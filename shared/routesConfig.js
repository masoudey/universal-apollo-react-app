import React from "react";

import SignUp from "./containers/auth/signUp";
import withAuth from "./components/session/withAuth";

const routes = [
    {
        path: '/signup',
        render: () => <SignUp />,
        exact: true
    },
    {
        path: '/dashboard',
        render: withAuth(session => session && session.currentUser)(SignUp),
        exact: true
    }
]
export default routes;