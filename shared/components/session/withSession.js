import React from "react";
import { Query } from "react-apollo";
import { GET_CURRENT_USER, GET_USERS } from "../../queries/userQueries";

const withSession = Component => props => (
    <Query query={GET_USERS} >
        {({ data, refetch }) => {
            console.log("data in withsession", data);
            return <Component  {...props} session={data} refetch={refetch}/>
        }}
    </Query>
);

export default withSession;