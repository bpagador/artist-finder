import React from 'react';
import PropTypes from 'prop-types';

const ArtistView = ({ name })=> {
  return (
    <>
      <h4>{name}</h4>
    </>
  );
};

ArtistView.propTypes = {
  name: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired
};

export default ArtistView;
