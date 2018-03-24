import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { rem, transitions } from 'polished';

const StyledLink = styled(({ large, underline, withHover, ...rest }) => (
  <Link {...rest} />
))`
  color: ${props => props.theme.text};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  font-weight: 700;
  font-size: ${props => (props.large ? rem('22px') : 'inherit')};
  ${transitions('all 0.25s ease-in')} &:hover {
    color: ${props =>
      props.withHover ? props.theme.linkHoverColor : props.theme.text};
  }
`;

const StyledExternalLink = StyledLink.withComponent('a');

const TextLink = ({ external, large, text, to, underline, withHover }) => {
  if (external) {
    return (
      <StyledExternalLink
        href={to}
        large={large}
        target="_blank"
        underline={underline}
        withHover={withHover}
      >
        {text}
      </StyledExternalLink>
    );
  }

  return (
    <StyledLink
      to={to}
      large={large}
      underline={underline}
      withHover={withHover}
    >
      {text}
    </StyledLink>
  );
};

TextLink.defaultProps = {
  external: false,
  large: false,
  underline: true,
  withHover: true,
};

TextLink.propTypes = {
  external: PropTypes.bool,
  large: PropTypes.bool,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  underline: PropTypes.bool,
  withHover: PropTypes.bool,
};

export default TextLink;
