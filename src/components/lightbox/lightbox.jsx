import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactLightbox from 'react-image-lightbox';
import styled from 'styled-components';
import { rem } from 'polished';

import Image from 'components/image/image';

const StyledImage = styled(({ ...rest }) => <Image {...rest} />)`
  margin-bottom: ${rem('20px')};
`;

class Lightbox extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    images: [],
    isOpen: false,
    photoIndex: 0,
  };

  componentWillMount() {
    this.setState(() => ({
      images: this.props.images.map(image => `http:${image.sizes.src}`),
    }));
  }

  onClickImage = event => {
    const imageUrl = event.target.src;

    this.setState(
      prevState => ({ photoIndex: prevState.images.indexOf(imageUrl) }),
      () => {
        this.toggleLightbox();
      }
    );
  };

  onPrevImage = () => {
    const { images } = this.props;
    this.setState(prevState => ({
      photoIndex: (prevState.photoIndex + images.length - 1) % images.length,
    }));
  };

  onNextImage = () => {
    const { images } = this.props;
    this.setState(prevState => ({
      photoIndex: (prevState.photoIndex + 1) % images.length,
    }));
  };

  toggleLightbox = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { images } = this.props;
    const { photoIndex, isOpen } = this.state;

    return (
      <React.Fragment>
        {images.map((image, index) => (
          <StyledImage
            alt={image.description || image.title}
            key={`${image.title}-${index}`}
            onClick={this.onClickImage}
            sizes={image.sizes}
            title={image.title}
          />
        ))}
        {isOpen && (
          <ReactLightbox
            imageCaption={images[photoIndex].description}
            imageTitle={images[photoIndex].title}
            mainSrc={images[photoIndex].sizes.src}
            nextSrc={images[(photoIndex + 1) % images.length].sizes.src}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].sizes.src
            }
            onCloseRequest={this.toggleLightbox}
            onMovePrevRequest={this.onPrevImage}
            onMoveNextRequest={this.onNextImage}
          />
        )}
      </React.Fragment>
    );
  }
}

Lightbox.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      aspectRatio: PropTypes.number,
      base64: PropTypes.string,
      description: PropTypes.string,
      sizes: PropTypes.shape({
        aspectRatio: PropTypes.number,
        base64: PropTypes.string,
        sizes: PropTypes.string,
        src: PropTypes.string,
      }),
      src: PropTypes.string,
      srcSet: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default Lightbox;
