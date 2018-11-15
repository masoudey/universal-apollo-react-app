import React, { useState } from "react";
import { withRouter, NavLink, Link } from "react-router-dom";
import Navbar from "../StyledComponents/Nav/Navbar";
import useIsScrolled from "../hooks/useIsScrolled";


function Header1(props) {
    const [isMobileNavFolded, setIsMobileNavFolded] = useState(false);
    const isScrolled = useIsScrolled();
    const toggleMobileNav = () => setIsMobileNavFolded(!isMobileNavFolded)

    return (
        <header>
            <Navbar 
                showSideNav={false}
                transparent={!isScrolled}
                isMobileNavFolded={isMobileNavFolded}
                onMobileNavToggle={toggleMobileNav}
            />
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