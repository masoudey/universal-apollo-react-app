import gql from "graphql-tag";


export const GET_CURRENT_USER = gql`
    {
        currentUser{
            id
            username
            email
            role
        }
    }
`;
export const GET_USERS = gql`
    {
        users{
            username
            firstName
            password
            email
        }
    }
`;

export const GET_CLIENT_USER = gql`
    {
        currentUser @client{
            id
            username
            email
            role
        }
    }
`;