import React, { Component, Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import * as Cookies from "es-cookie";

import { Helmet } from "react-helmet";
import useFormInput from "../../hooks/useFormInput";

export const SIGNIN_USER = gql`
    mutation($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
            token
            user
        }
    }
`;

const initialState = {
    email: '',
    password: '',
}

function SignIn(props) {
    const email = useFormInput('');
    const password = useFormInput('');

    return (
        <Fragment>

        </Fragment>
    )
}



class SignIn1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
    }

    head() {
        return (
            <Helmet bodyAttributes={{ class: 'signIn'}}>
                <title>LogIn - Apollo React App</title>
            </Helmet>
        )
    }

    onChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    onSubmit = (e, signIn) => {
        e.preventDefault();
        signIn().then(async ({ data }) => {
            this.setState({ ...initialState });

            Cookies.set('token', data.signIn.token);

            await this.props.refetch();

            this.props.history.push('/dashboard');
        }).catch(error => {
            this.setState({
                error: error.graphQLErrors.map(x => x.message)
            });
            console.error("ERR -", error.graphQLErrors.map(x => x.message));
        });
    }

    validationForm = () => {
        const { email, password } = this.state;
        const isInvalid = !email || !password;
        return isInvalid;
    }

    render() {
        const { email, password } = this.state;
        return (
            <Fragment>
                <div class="login-wrapper">
                    <div class="logo ir" />
                    <span class="title">Login</span>
                    <Mutation 
                        mutation={SIGNIN_USER} 
                        variables={{ email, password}}
                    >
                    {(signIn, { data, loading, error}) => {
                        return (
                            <form name="form" onSubmit={e => this.onSubmit(e, signIn)}>
                                <fieldset>
                                <div class="inputrow">
                                    <i class="fa icon-user fa-fw" />
                                    <input
                                    type="text"
                                    name="email"
                                    id="user"
                                    placeholder="Email"
                                    onChange={this.onChange}
                                    value={email}
                                    autoFocus
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

                                <div class="remember">
                                    <input
                                    type="checkbox"
                                    name="remember_login"
                                    value="1"
                                    id="remember_login"
                                    />
                                    <label for="remember_login" class="radio">
                                    Remember me
                                    </label>
                                </div>
                                <div class="button-center">
                                    <button class="btn-log" type="submit" id="submit">
                                    SignIn
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
            </Fragment>
        )
    }
};

export default withRouter(SignIn);