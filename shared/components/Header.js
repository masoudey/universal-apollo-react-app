import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { withRouter, NavLink } from "react-router-dom";
import Navbar from "../StyledComponents/Nav/Navbar";
import useIsScrolled from "../hooks/useIsScrolled";


function Header({currentUser}) {
    const [isNavFolded, setIsNavFolded] = useState(false);
    const cUser = useContext(UserContext);
    const isScrolled = useIsScrolled();
    const toggleNav = () => setIsNavFolded(!isNavFolded)
    console.log("cUser", cUser.currentUser);
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