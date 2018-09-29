import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { hydrate } from "react-dom";
import { ApolloClient } from "apollo-client";
import { getMainDefinition } from "apollo-utilities";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { ApolloLink, split } from "apollo-link";
import { withClientState } from "apollo-link-state";
import { onError } from "apollo-link-error";
import {  } from "";

import App from "../shared/app";
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
        },
    }))
})