import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Mutation } from "react-apollo";
import * as Cookies from "es-cookie";
import { Helmet } from "react-helmet";
import { SIGNUP_USER } from "../../queries/userQueries";

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
        signUp().then(async ({ data }) => {
            
        })
    }

    render() {
        const {
            username,
            email,
            password,
            passwordConfirm,
            firstName,
            lastName,
        } = this.state;

        return (
            <div class="login-wrapper">
                {this.head()}
                <span class="title">SignUp</span>
                <Mutation 
                mutation={SIGNUP_USER} 
                variables={{username, email, password, firstName, lastName}} 
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
                                        onChange={this.handleChange}
                                        onBlur={this.validateForm.bind(this)}
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
                                        onChange={this.handleChange}
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
                                        onChange={this.handleChange}
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
                                        onChange={this.handleChange}
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
                                        onChange={this.handleChange}
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
                                        onChange={this.handleChange}
                                        onBlur={this.confirmPW.bind(this)}
                                        value={passwordConfirm}
                                        placeholder="Confirm Password"
                                        required
                                        />
                                    </div>

                                    
                                    <div class="button-center">
                                        <button class="btn-log" type="submit" id="submit" disabled={passwordMatch || this.validateForm()} >
                                        Register
                                        </button>
                                        {registering && (
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