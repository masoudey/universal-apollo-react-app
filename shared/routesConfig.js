import React from "react";

import signUp from "./containers/auth/signUp";


const routes = [
    {
        path: '/signup',
        component: signUp,
        exact: true
    }
]
export default routes;