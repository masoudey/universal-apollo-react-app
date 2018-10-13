import React from "react";
import { Query } from "react-apollo";
import { GET_CURENT_USER } from "../../queries/userQueries";

const withSession = Component => props => (
    <Query query={GET_CURENT_USER} >
        {({ data, refetch }) => (
            <Component  {...props} session={data} refetch={refetch}/>
        )}
    </Query>
)