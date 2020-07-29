import React from 'react';
import PropTypes from 'prop-types';
import ArtistView from './ArtistView.jsx';

import { Link } from 'react-router-dom';

const ArtistsView = ({ artists }) => {
  const artistElements = artists.map(artist => {
    <Link to={`/release/${artist.id}`}>
      <li key={artist.id}>
        <ArtistView name= {artist.name} />
      </li>
    </Link>;
  });

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
