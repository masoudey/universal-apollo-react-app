import gql from "graphql-tag";

export const defaults = {
    me: {},
    users: [],
    posts:[],
};

export const resolvers = {
    Mutation: {
        signUp: (_, { username, email, password, firstName, lastName, userImage }, { cache }) => {
            
        }
    }
}