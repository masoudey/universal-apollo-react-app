import React from 'react';
import styled from 'styled-components';

import rem from '../utils/rem';
import { navbarHeight } from '../utils/sizes';
import NavSeparator from './NavSeparator';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  margin-right: ${rem(30)};
`;

const StyledNavLink = styled(NavLink)`
  flex: 0 0 auto;
  display: inline-block;
  line-height: ${rem(navbarHeight)};
  transition: opacity 0.2s, transform 0.2s;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: ${rem(0.4)};
  color: currentColor;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`;

const NavLinks = ({currentUser}) => (
  <Wrapper>
     <StyledNavLink to='/'>Home</StyledNavLink>
    <NavSeparator />
    <StyledNavLink to='/signup'>SignUp</StyledNavLink>
    <NavSeparator />
    <StyledNavLink to='/signin'>SignIn</StyledNavLink>
    <NavSeparator />
    {currentUser && <StyledNavLink to='/dashboard'>Dashboard</StyledNavLink>}
  </Wrapper>
);

export default NavLinks;
