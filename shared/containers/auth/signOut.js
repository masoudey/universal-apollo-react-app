import React from "react";
import { withRouter } from "react-router-dom";

import * as Cookies from "es-cookie";
import { Helmet } from "react-helmet";
import { ApolloConsumer } from "react-apollo";
import history from "../../util/history";

const signOut = client => {
    Cookies.remove('token');
    client.resetStore();
    history.pushState('/signin');
}

const SignOutButton = () => {
    <ApolloConsumer>
        {client => (
            <button type="button" onClick={() => signOut(client)}>
                Sign Out
            </button>
        )}
    </ApolloConsumer>
};

export { signOut };
export default SignOutButton;