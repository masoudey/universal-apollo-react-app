import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import withSession from "./components/session/withSession";

import Routes from "./routes";
import Header from "./components/Header";
import './app.css';

function App(props) {
        console.log(props.session.currentUser);
        const currentUser = props.session.currentUser;
        return (
            <Fragment>
                <Header currentUser={currentUser} />
                <main>
                    <Routes currentUser={currentUser}/>
                </main>
            </Fragment>
        )
}

export default withRouter(withSession(App));