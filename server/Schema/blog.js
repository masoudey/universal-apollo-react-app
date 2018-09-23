import { gql } from "apollo-server-express";

export default gql`
    extend type Query {
        post(id: ID!): Post!
        posts(cursor: String, limit: Int): PostConnection!
    }

    extend type Mutation {
        createPost(title: String!, desc: String!, content: String!, cotagory: String!, img: String!): Post!
        deletePost(id: ID!): Boolean!
    }

    type PostConnection {
        edges: [Post!]!
        pageInfo: PageInfo!
    }

    type PageInfo {
        hasNextPage: Boolean!
        endCursor: String!
    }

    type Post {
        _id: ID!
        title: String!
        desc: String!
        content: String!
        cotagory: String!
        img: String!
        date: String!
        user: User!
    }

    extend type Subscription {
        postCreated: PostCreated!
    }

    type PostCreated {
        post: Post!
    }
`;