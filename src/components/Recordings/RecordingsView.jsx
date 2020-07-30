import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecordingsView = ({ recordings }) => {
  const recordingElements = recordings.map(recording => (
    <Link to={'/lyrics'} key={recording.id}>
      <li>
        <h4>{recording.title}</h4>
        { (recording.type.length > 0) && <h6>{recording.type}</h6>
        }
      </li>
    </Link>
  ));

  return (
    <ul>
      {recordingElements}
    </ul>
  );
};

RecordingsView.propTypes = {
  recordings: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string
  }))
};

export default RecordingsView;
