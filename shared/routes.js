import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import SignUp from "./containers/auth/signUp";
import SignIn from "./containers/auth/signIn";
import Dashboard from "./containers/Dashboard";
import Home from "./containers/Home";
import withAuth from "./components/session/withAuth";

const Routes = ({session, refetch, ...props}) => {
    const currentUser = session ? session.currentUser : null;
    return (
        <Switch>
            <Route 
                exact
                path='/'
                component={() => <Home />}
            />
            <Route 
                exact
                path='/signup'
                render={props => 
                    currentUser 
                    ? <Redirect to='/' /> 
                    : <SignUp {...props} refetch={refetch} />}
            />
            <Route 
                exact
                path='/signin'
                render={props => 
                    currentUser 
                    ? <Redirect to='/' /> 
                    : <SignIn {...props} refetch={refetch} />}
            />
            <Route 
                exact
                path= '/dashboard'
                render={withAuth(session => session && session.currentUser)(Dashboard)}    
            />
        </Switch>
    )
};

export default withRouter(Routes);