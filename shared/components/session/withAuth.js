import React from "react";
import { Redirect } from "react-router-dom";
import { Query } from "react-apollo";

import { GET_CURRENT_USER } from "../../queries/userQueries";

const withAuth = conditionFn => Component => props => (
    <Query query={GET_CURRENT_USER} notifyOnNetworkStatusChange>
        {({data, loading, networkStatus}) => {
            if (networkStatus !== 7) {
                return null;
            };

            return conditionFn(data) ? 
            (<Component {...props} />) :
            (<Redirect to='/signin' />);
        }}
    </Query>
);

export default withAuth;
