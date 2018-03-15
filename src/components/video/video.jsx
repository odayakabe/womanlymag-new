import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { rem } from 'polished';

// https://www.npmjs.com/package/react-player#responsive-player
// Player ratio: 100 / (1280 / 720)
const Container = styled.div`
  position: relative;
  padding-top: 56.25%;
  margin-bottom: ${rem('20px')};
`;

const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Video = ({ url }) => (
  <Container>
    <Player width="100%" height="100%" url={url} />
  </Container>
);

Video.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Video;
