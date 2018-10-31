import React, { Component, useState } from "react";
import { withRouter, NavLink, Link } from "react-router-dom";

function Header(props) {
    const [exposed, setExposed] = useState(false);

    return (
        <header>
            <NavLink to='/signup' >SignUp</NavLink>
            <NavLink to='/signin' >SignIn</NavLink>
        </header>

    )
}

class Header1 extends Component {

    render() {
        return (
            <header>
                <NavLink to='/signin'>SignIn</NavLink>
                <NavLink to='/signup'>SignUp</NavLink>
            </header>
        )
    }
};

export default withRouter(Header);