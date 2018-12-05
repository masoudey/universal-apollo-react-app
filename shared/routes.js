import React, { lazy, Suspense } from "react";
import { Spinner } from "./components/Spinner";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

const SignUp = lazy(() => import("./containers/auth/signUp"));
const SignIn = lazy(() => import("./containers/auth/signIn"));
const Dashboard = lazy(() => import("./containers/dashboard"));
const Home = lazy(() => import("./containers/Home"));
import withAuth from "./components/session/withAuth";

const Routes = ({session, refetch, ...props}) => {
    const currentUser = session ? session.currentUser : null;
    return (
        <Suspense fallback={<Spinner size="large" />}>
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
        </Suspense>
    )
};

export default withRouter(Routes);