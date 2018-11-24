import React, { useState, useRef, createRef, Fragment } from 'react'
import styled, { css } from 'styled-components'
import { Close } from 'styled-icons/material'
import rem from '../utils/rem'
import { violetBlue, paleGrey } from '../utils/colors'
import { navbarHeight } from '../utils/sizes'
import { headerFont } from '../utils/fonts'
import { mobile } from '../utils/media'
import Link from './Link'
import NavLinks from './NavLinks'
import Social from './Social'
import Logo from './Logo';
import Search from './Search'

const Wrapper = styled.nav`
  position: fixed;
  left: 0;
  box-sizing: border-box;
  z-index: 3;

  width: 100%;
  height: ${rem(navbarHeight)};

  font-family: ${headerFont};
  font-size: ${rem(15)};
  font-weight: 500;
  background: ${props => (props.transparent ? 'transparent' : violetBlue)};
  transition: background 300ms ease-out;
  color: white;
  padding: 0;
`

const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const EndWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
/* stylelint-disable */
const StyledSocial = styled(Social)``
/* stylelint-enable */

const NormalNavbar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${rem(20)};
  justify-content: space-between;
  ${StartWrapper}, ${EndWrapper} ${StyledSocial} {
    ${mobile(css`
      display: none;
    `)};
  }
`

const StyledModalCloseIcon = styled(Close)`
  width: ${rem(26)};
  height: ${rem(26)};
  color: white;
`

const AlgoliaModal = styled.div`
  ${mobile(css`
    background: currentColor;
    overflow: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  `)};
`

const baseZ = 1

const AlgoliaModalHeader = styled.div`
  display: none;
  color: currentColor;

  ${mobile(css`
    display: ${props => (props.isOpen ? 'block' : 'none')};

    button {
      cursor: pointer;
      padding: 0;
      position: fixed;
      right: ${rem(10)};
      top: ${rem(11)};
      border: none;
      z-index: ${baseZ + 1};
    }
  `)};
`

const AlgoliaModalOverlay = styled.div`
  margin-right: ${rem(10)};

  ${mobile(css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${baseZ};
    left: 0;
    display: ${props => (props.isOpen ? 'block' : 'none')};
    background: ${paleGrey};
    overflow-y: auto;
    margin: 0;

    .algolia-autocomplete .ds-dropdown-menu {
      position: static !important;
      display: block;
      max-width: 100%;
      min-width: 0;
    }
  `)};
`

function ModalContainer(props)  {
  const modalElement = createRef();
  const onModalOverlayClick = e => {
    if (!modalElement.current.contains(e.target)) {
      props.requestModalClose()
    }
  }
  const onCloseButtonClick = e => {
    e.stopPropagation()
    props.requestModalClose()
  }

    return (
      <Fragment>
        <AlgoliaModalHeader isOpen={props.isOpen}>
          <button onClick={onCloseButtonClick}>
            <StyledModalCloseIcon />
          </button>
        </AlgoliaModalHeader>
        <AlgoliaModalOverlay
          onClick={onModalOverlayClick}
          isOpen={props.isOpen}
        >
          <AlgoliaModal ref={modalElement}>
            <div>{props.children}</div>
          </AlgoliaModal>
        </AlgoliaModalOverlay>
      </Fragment>
    )
}

const LogoLink = styled(Link).attrs({
  unstyled: true,
  href: '/',
})`
  display: inline-block;
  vertical-align: center;
  margin-right: ${rem(35)};
`

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const {
    onNavToggle,
    isNavFolded,
    currentUser,
    transparent,
  } = props

    return (
      <Wrapper transparent={transparent}>
        <NormalNavbar>
          <StartWrapper>
            <LogoLink>
              <Logo />
            </LogoLink>
            <NavLinks currentUser={currentUser} />
          </StartWrapper>
          <EndWrapper>
            <ModalContainer
              isOpen={isOpen}
              requestModalClose={closeModal}
            >
              <Search />
            </ModalContainer>
            {/* <StyledSocial /> */}
          </EndWrapper>
        </NormalNavbar>
      </Wrapper>
    )
  }

export default Navbar
