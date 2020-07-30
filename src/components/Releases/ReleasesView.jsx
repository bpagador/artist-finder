import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ReleasesView = ({ releases }) => {
  const releaseElements = releases.map(release => (
    <Link to={`/releases/recordings/${release.id}`} key={release.id}>
      <li>
        <img src={`http://coverartarchive.org/release/${release.id}/front`} onError={(e)=>{e.target.onerror = null; e.target.src = '/public/music_icon.svg';}} width='250px' />

        <h4>{release.title}</h4>
        <h6>{release.date}</h6>
      </li>
    </Link>
  ));

  return (
    <ul>
      {releaseElements}
    </ul>
  );
};

ReleasesView.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }))
};

export default ReleasesView;
