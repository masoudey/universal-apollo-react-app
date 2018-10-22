import gql from "graphql-tag";

export const SIGNUP_USER = gql`
    mutation($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!, $profileImage: String) {
        signUp(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName, profileImage:$profileImage) {
            token
            user
        }
    }
`;

export const SIGNIN_USER = gql`
    mutation($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
            token
            user
        }
    }
`;

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