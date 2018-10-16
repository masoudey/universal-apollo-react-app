import React from "react";
import { Query } from "react-apollo";
import { GET_CLIENT_USER } from "../../queries/userQueries";

const withSession = Component => props => (
    <Query query={GET_CLIENT_USER} >
        {({ data, refetch }) => (
            <Component  {...props} session={data} refetch={refetch}/>
        )}
    </Query>
);

export default withSession;