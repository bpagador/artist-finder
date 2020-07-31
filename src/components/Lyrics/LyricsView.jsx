import React from 'react';
import PropTypes from 'prop-types';

const LyricsView = ({ lyrics }) => (
  <p>{lyrics}</p>
);

LyricsView.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default LyricsView;
