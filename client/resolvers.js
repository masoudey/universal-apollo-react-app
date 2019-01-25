import gql from "graphql-tag";

export const defaults = {
    me: {},
    users: [],
    posts:[],
};

<<<<<<< HEAD
export const yy = {
    
=======
export const t = {
    m:""
>>>>>>> 742ef95d964625788cacd7ebec0984ba642845a4
}

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