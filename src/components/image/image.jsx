import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import GatsbyImage from 'gatsby-image';

const ImageContainer = styled.div`
  display: ${props => (props.caption ? 'flex' : 'block')};
  flex-flow: row;
  align-items: center;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
`;

const StyledImage = styled(({ circle, ...rest }) => <GatsbyImage {...rest} />)`
  border-radius: ${props => (props.circle ? '50%' : '0')};
`;

const StyledCaption = styled.div`
  margin-left: ${props =>
    props.captionPosition === 'right' ? rem('20px') : '0'};
`;

const StyledBackgroundImage = styled.div`
  background-image: url(${props =>
    props.sizes ? props.sizes.src : props.resolutions.src});
  background-repeat: no-repeat;
  background-size: ${props => props.backgroundSize};
  height: inherit;
  width: inherit;
`;

const Image = ({
  alt,
  backgroundSize,
  caption,
  captionPosition,
  circle,
  className,
  isBackground,
  onClick,
  resolutions,
  sizes,
  title,
}) => {
  if (!resolutions && !sizes) {
    return null;
  }

  if (isBackground) {
    return (
      <StyledBackgroundImage
        className={className}
        resolutions={resolutions}
        sizes={sizes}
        backgroundSize={backgroundSize}
      />
    );
  }

  return (
    <ImageContainer className={className} caption={caption} onClick={onClick}>
      <StyledImage
        alt={alt}
        circle={circle}
        resolutions={resolutions}
        sizes={sizes}
        title={title}
      />
      {caption && (
        <StyledCaption captionPosition={captionPosition}>
          {caption}
        </StyledCaption>
      )}
    </ImageContainer>
  );
};

Image.defaultProps = {
  backgroundSize: 'cover',
  caption: null,
  captionPosition: 'bottom',
  circle: false,
  onClick: null,
  resolutions: null,
  sizes: null,
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  backgroundSize: PropTypes.string,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  captionPosition: PropTypes.oneOf(['right', 'bottom']),
  circle: PropTypes.bool,
  onClick: PropTypes.func,
  resolutions: PropTypes.shape({
    base64: PropTypes.string,
    height: PropTypes.number,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    width: PropTypes.number,
  }),
  sizes: PropTypes.shape({
    aspectRatio: PropTypes.number,
    base64: PropTypes.string,
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
};

export default Image;
