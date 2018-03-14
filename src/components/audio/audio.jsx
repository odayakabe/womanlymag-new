import React from 'react';
import PropTypes from 'prop-types';

const Audio = ({ title, url }) => (
  <iframe
    width="100%"
    height="166"
    scrolling="no"
    frameBorder="no"
    src={`https://w.soundcloud.com/player/?url=${url}&amp;show_artwork=true`}
    title={title}
  />
);

Audio.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Audio;
