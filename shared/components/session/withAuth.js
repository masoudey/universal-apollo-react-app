import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Query } from "react-apollo";

import { GET_CURENT_USER } from "../queries/userQueries";

const withAuthentication = conditionFn => Component => props => (
    <Query query={GET_CURENT_USER}>
        {({data}) => {
            
        }}
    </Query>
)