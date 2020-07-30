import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const ArtistsView = ({ artists }) => {
  const artistElements = artists.map(artist => (
    <Link to={`/release/${artist.id}`} key={artist.id}>
      <li >
        <h4>{artist.name}</h4>
      </li>
    </Link>
  ));

  return (
    <ul>
      {artistElements}
    </ul>
  );
};

ArtistsView.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired
};

export default ArtistsView;
