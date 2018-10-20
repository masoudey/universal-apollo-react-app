import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import withSession from "./components/session/withSession";

import Routes from "./routes";
import Header from "./components/Header";


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const session = this.props.session;
        return (
            <Fragment>
                <Header session={session} />
                <main>
                    <Routes session={session}/>
                </main>
            </Fragment>
        )
    }
}

export default withRouter(withSession(App));