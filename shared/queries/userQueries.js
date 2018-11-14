import gql from "graphql-tag";


export const GET_CURRENT_USER = gql`
    {
        currentUser{
            _id
            username
            email
            role
        }
    }
`;

export const GET_CLIENT_USER = gql`
    {
        currentUser @client{
            _id
            username
            email
            role
        }
    }
`;