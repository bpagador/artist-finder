import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecordingsView from '../components/Recordings/RecordingsView';
import { useRecordings } from '../hooks/useRecordings';
import { usePagination } from '../hooks/usePagination';

const RecordingListPresenter = ({ match, location }) => {
  const params = new URLSearchParams(location.search);
  const artistName = params.get('artist');
  const [limit] = useState(20);

  const { offset, setOffset, setTotalCount, Pagination } = usePagination(limit);
  const { recordings, handleClick } = useRecordings(match.params.id, offset, setOffset, setTotalCount, limit);

  return (
    <>
      {Pagination}
      <RecordingsView onClick={handleClick} recordings={recordings} artistName={artistName}/>
    </>
  );
};

RecordingListPresenter.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default RecordingListPresenter;
