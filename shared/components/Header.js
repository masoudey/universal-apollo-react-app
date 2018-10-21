import React, { Component } from "react";
import { withRouter, NavLink, Link } from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <header>
                <NavLink to='/signup'>SignUp</NavLink>
            </header>
        )
    }
};

export default withRouter(Header);