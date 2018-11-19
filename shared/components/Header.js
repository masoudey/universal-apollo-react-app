import React, { useState } from "react";
import { withRouter, NavLink } from "react-router-dom";
import Navbar from "../StyledComponents/Nav/Navbar";
import useIsScrolled from "../hooks/useIsScrolled";


function Header(props) {
    const [isNavFolded, setIsNavFolded] = useState(false);
    const isScrolled = useIsScrolled();
    const toggleNav = () => setIsNavFolded(!isNavFolded)

    return (
        <header>
            <Navbar 
                transparent={isScrolled}
                isNavFolded={isNavFolded}
                onNavToggle={toggleNav}
                session={props.session}
            />
        </header>

    )
}


export default withRouter(Header);