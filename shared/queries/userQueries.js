import gql from "graphql-tag";

export const SIGNUP_USER = gql`
    mutation($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!, $profileImage: String) {
        signUp(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName, profileImage:$profileImage) {
            token
            user
        }
    }
`;