import React from "react";
import { withRouter } from "react-router-dom";

import * as Cookies from "es-cookie";
import { Helmet } from "react-helmet";
import { ApolloConsumer } from "react-apollo";

const signOut = client => {
    Cookies.remove('token');
    client.resetStore();
    history.pushState('/signin');
}