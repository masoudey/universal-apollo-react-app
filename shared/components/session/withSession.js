import React from "react";
import { UserContext } from "../../contexts/userContext";
import { Query } from "react-apollo";
import { GET_CURRENT_USER, GET_USERS } from "../../queries/userQueries";

const withSession = Component => props => (
    <Query query={GET_CURRENT_USER} >
        {({ data, refetch }) => {
            console.log("data in withsession", data);
            return(
                <UserContext.Provider value={data}>
                    <Component  {...props} session={data} refetch={refetch}/>
                </UserContext.Provider>
            )
        }}
    </Query>
);

export default withSession;