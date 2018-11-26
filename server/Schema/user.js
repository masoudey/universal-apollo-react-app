import { gql } from "apollo-server-express";

export default gql`
    extend type Query {
        currentUser: User
        user(id: ID!): User
        users: [User!]
    }

    extend type Mutation {
        signUp(
            username: String!
            email: String!
            password: String!
            firstName: String! 
            lastName: String!
            profileImage: String
        ): AuthPayload!
        signIn(email: String!, password: String!): AuthPayload!
        updateUser(email: String!, username: String!, firstName: String!, lastName: String!): User!
        deleteUser(id: ID!): Boolean!
        setUserImage(email: String!, userImage: String!): User!
        changeEmail(currentEmail: String!, newEmail: String!): User!
        changePassword(email: String!, password: String!): User!
        passwordReset(email: String!): User! 
    }

    type AuthPayload {
        token: String!
        user: User!
    }

    type User {
        id: ID!
        username: String!
        password: String!
        email: String!
        firstName: String! 
        lastName: String!
        bio: String
        userImage: String
        role: String
        createdAt: String!
        posts: [Post!]
    }
`;