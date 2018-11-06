import React, { Lazy, Suspense } from "react";
import { Spinner } from "./components/Spinner";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

const SignUp = Lazy(() => import("./containers/auth/signUp"));
const SignIn = Lazy(() => import("./containers/auth/signIn"));
const Dashboard = Lazy(() => import("./containers/Dashboard"));
const Home = Lazy(() => import("./containers/Home"));
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