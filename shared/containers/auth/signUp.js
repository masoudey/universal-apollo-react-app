import React, { Component, useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import * as Cookies from "es-cookie";
import { Helmet } from "react-helmet";

import useFormInput from "../../hooks/useFormInput";


export const SIGNUP_USER = gql`
    mutation($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!, $profileImage: String) {
        signUp(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName, profileImage:$profileImage) {
            token
            user{
                username
                email
                firstName
                lastName
                password
            }
        }
    }
`;

const initialState = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: '',
    passwordMatch: '',
    error: ''
}

function SignUpp(props) {
    const username = useFormInput('');
    const email = useFormInput('');
    const password = useFormInput('');
    const passwordConfirm = useFormInput('');
    const firstName = useFormInput('');
    const lastName = useFormInput('');

    
    const passwordMatch = password !== passwordConfirm;
    const isInvalid = !firstName || !lastName || !email || !username || !password || password !== passwordConfirm

    return (
        <div class="login-wrapper" >
            <Helmet bodyAttributes={{ class: 'signUp'}}>
                <title>Join now - Apollo React App</title>
            </Helmet>
        </div>
    )
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
    }

    head() {
        return (
            <Helmet bodyAttributes={{ class: 'signUp'}}>
                <title>Join now - Apollo React App</title>
            </Helmet>
        )
    }

    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e, signUp, client) => {
        e.preventDefault();
        console.log(client);
        signUp().then(async ({ data }) => {
           Cookies.set('token', data.signUp.token);
           await this.props.refresh();
           this.setState({ ...initialState });
           this.props.history.push('/');
        }).catch(error => {
            this.setState({
                error: 'Either your email or username is already taken'
            });
        });
    }

    confirmPW = () => {
        const { password, passwordConfirm } = this.state;
        const isMatch = password !== passwordConfirm;
        this.setState({
            passwordMatch: isMatch
        });
    }

    validateForm = () => {
        const { firstName, lastName, email, userName, password, passwordConfirm } = this.state
        const isInvalid = !firstName || !lastName || !email || !userName || !password || password !== passwordConfirm
        return isInvalid;
    }

    render() {
        const {
            username,
            email,
            password,
            passwordConfirm,
            firstName,
            lastName,
            passwordMatch
        } = this.state;

        return (
            <div class="login-wrapper">
                {this.head()}
                <span class="title">SignUp</span>
                <Mutation 
                mutation={SIGNUP_USER} 
                variables={{username, email, password, firstName, lastName}} 
                update={(cache, { data }) => {
                    console.log("data", data);
                    console.log("cache", cache);
                }}
                >
                    {(signUp, {data, client, loading, error}) => {
                        return(
                            <form name="form" onSubmit={e => this.handleSubmit(e, signUp, client)}>
                                <fieldset>
                                    
                                    <div class="inputrow">
                                        <i class="fa icon-user fa-fw" />
                                        <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="UserName"
                                        onChange={this.onChange}
                                        onBlur={this.validateForm}
                                        value={username}
                                        autoFocus
                                        required
                                        />
                                    </div>
                                    <div class="inputrow">
                                        <i class="fa icon-user fa-fw" />
                                        <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        placeholder="FirstName"
                                        onChange={this.onChange}
                                        value={firstName}
                                        required
                                        />
                                    </div>
                                    <div class="inputrow">
                                        <i class="fa icon-user fa-fw" />
                                        <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        placeholder="LastName"
                                        onChange={this.onChange}
                                        value={lastName}
                                        required
                                        />
                                    </div>
                                    <div class="inputrow">
                                        <i class="fa icon-mail4 fa-fw" />
                                        <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        onChange={this.onChange}
                                        value={email}
                                        required
                                        />
                                    </div>
                                    <div class="inputrow">
                                        <i class="fa icon-key fa-fw" />
                                        <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        data-typetoggle="#show"
                                        onChange={this.onChange}
                                        value={password}
                                        placeholder="Password"
                                        required
                                        />
                                    </div>
                                    <div class="inputrow">
                                        <i class="fa icon-key fa-fw" />
                                        <input
                                        type="password"
                                        name="passwordConfirm"
                                        id="passwordConfirm"
                                        data-typetoggle="#show"
                                        onChange={this.onChange}
                                        onBlur={this.confirmPW}
                                        value={passwordConfirm}
                                        placeholder="Confirm Password"
                                        required
                                        />
                                    </div>

                                    
                                    <div class="button-center">
                                        <button class="btn-log" type="submit" id="submit" disabled={passwordMatch || this.validateForm()} >
                                        Register
                                        </button>
                                        {loading && (
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                        )}
                                    </div>
                                </fieldset>
                            </form>
                        )
                    }}
                </Mutation>
            </div>
        )
    }
}

export default withRouter(SignUp)