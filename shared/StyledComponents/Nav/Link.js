import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import rem from '../utils/rem';
import { red, violetRed, lightGrey } from '../utils/colors';

export const StyledLink = styled(Link)`
  display: inline-block;
  color: inherit;
  cursor: pointer;
  padding: ${rem(2)} ${rem(8)};
  margin: ${rem(-2)} ${rem(-8)};

  @media (min-width: ${1000 / 16}em) {
    border-radius: ${rem(3)};

    &:hover {
      background: ${lightGrey};
    }
  }
`;

export const InlineLink = styled(Link).attrs({
  target: '_blank',
  rel: 'noopener',
})`
  color: ${p => (p['data-white'] ? 'white' : violetRed)};
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${p => (p['data-white'] ? 'white' : red)};
  }
`;

const _Link = ({ children, className, inline, unstyled, white, ...rest }) => {
  let Child = StyledLink;
  if (inline) {
    Child = InlineLink;
  } else if (unstyled) {
    Child = 'a';
  }

  let dataAttrs;
  if (white) {
    dataAttrs = { 'data-white': white };
  }

  return (
      <Child to={rest.to} className={className} aria-label={rest['aria-label']} {...dataAttrs}>
        {children}
      </Child>
  );
};

export default _Link;
