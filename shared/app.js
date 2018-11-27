import React, { Fragment } from "react";

import { withRouter } from "react-router-dom";
import withSession from "./components/session/withSession";

import Routes from "./routes";
import Header from "./components/Header";
import './app.css';

function App(props) {

        const currentUser = props.session ? props.session.currentUser : null;
        console.log(currentUser);
        return (
            <Fragment>
                <Header currentUser={currentUser} />
                <main style={{marginTop:'60px'}}>
                    <Routes currentUser={currentUser}/>
                </main>
            </Fragment>
        )
}

export default withRouter(withSession(App));