import React, { useState } from "react";
import { withRouter, NavLink } from "react-router-dom";
import Navbar from "../StyledComponents/Nav/Navbar";
import useIsScrolled from "../hooks/useIsScrolled";


function Header({currentUser}) {
    const [isNavFolded, setIsNavFolded] = useState(false);
    const isScrolled = useIsScrolled();
    const toggleNav = () => setIsNavFolded(!isNavFolded)

    return (
        <header>
            <Navbar 
                transparent={isScrolled}
                isNavFolded={isNavFolded}
                onNavToggle={toggleNav}
                currentUser={currentUser}
            />
            {/* <NavLink to='/signin' >SignIn</NavLink> */}
        </header>

    )
}


export default withRouter(Header);