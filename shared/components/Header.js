import React, { useState } from "react";
import { withRouter, NavLink, Link } from "react-router-dom";
import Navbar from "../StyledComponents/Nav/Navbar";


function Header1(props) {
    const [exposed, setExposed] = useState(false);

    return (
        <header>
            <NavLink to='/signup' >SignUp</NavLink>
            <NavLink to='/signin' >SignIn</NavLink>
        </header>

    )
}

const Header = ({session}) => {

        return (
            <header>
                <NavLink to='/signin'>SignIn</NavLink>
                <NavLink to='/signup'>SignUp</NavLink>
            </header>
        )
};

export default withRouter(Header);