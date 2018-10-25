import gql from "graphql-tag";

export const defaults = {
    me: {},
    users: [],
    posts:[],
};

export const resolvers = {
    Mutation: {
        signUp: (_, { username, email, password, firstName, lastName, userImage }, { cache }) => {
            const query = gql`
                {
                    users @client {
                        username
                        email
                        password
                        firstName
                        lastName
                        userImage
                    }
                }
            `;
            const { users } = cache.readQuery({ query });
            const newData = {
                username,
                email,
                password,
                firstName,
                lastName,
                userImage,
                __typename: "User",
            };

            const data = {
                users: users.concat([newData])
            };
            cache.writeData({ data });
            return newData;
        }
    }
}