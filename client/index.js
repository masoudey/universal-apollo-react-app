import 'babel-polyfill';
import React from "react";
import { Router } from "react-router-dom";
import ReactDOM, { hydrate,  } from "react-dom";
import { ApolloClient } from "apollo-client";
import { getMainDefinition } from "apollo-utilities";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { ApolloLink, split } from "apollo-link";
import { withClientState } from "apollo-link-state";
import { onError } from "apollo-link-error";
import * as Cookies from "es-cookie";
import { createBrowserHistory } from "history";

import App from "../shared/app";
import { defaults, resolvers } from "./resolvers";
import registerServiceWorker from './registerServiceWorker';

const httpLink = new HttpLink({
    uri: 'http://localhost:5000/graphql',
});

const wsLink = new WebSocketLink({
    uri: 'ws://localhost:5000/graphql',
    options: {
        reconnect: true,
    },
});

const terminatingLink = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return (
            kind === 'OperationDefinition' && operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            'x-token': Cookies.get('token'),
            'Cookie': Cookies.get('token'),
        },
    }));
    console.log(Cookies.get('token'))
    return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
            console.log('graphQL error', message);

            if (message === 'NOT_AUTHENTICATED') {
                
            }
        });
    }

    if (networkError) {
        console.log('Network error', networkError);

        if (networkError.statusCode === 401) {

        }
    }
});

const cache = new InMemoryCache().restore(window.__APOLLO_STATE__);

const stateLink = withClientState({
    cache,
    defaults,
    resolvers,
})

const link = ApolloLink.from([stateLink, authLink, errorLink, terminatingLink]);


const client = new ApolloClient({
    link,
    cache,
});

const history = createBrowserHistory();
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
<ApolloProvider client={client} >
    <Router history={history}>
        <App />
    </Router>
</ApolloProvider>);
// hydrate(
//     <ApolloProvider client={client} >
//         <Router history={history}>
//             <App />
//         </Router>
//     </ApolloProvider>,
//     root
// );

registerServiceWorker();