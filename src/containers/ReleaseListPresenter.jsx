import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReleasesView from '../components/Releases/ReleasesView';
import { useReleases } from '../hooks/useReleases';
import { usePagination } from '../hooks/usePagination';

const ReleaseListPresenter = ({ match, location }) => {
  const params = new URLSearchParams(location.search);
  const artistName = params.get('artist');
  const [limit] = useState(20);

  const { offset, setOffset, setTotalCount, Pagination } = usePagination(limit);
  const { releases, handleClick } = useReleases(match.params.id, offset, setOffset, setTotalCount, limit);
  return (
    <>
      {Pagination}
      <ReleasesView onClick={handleClick} releases={releases} artistName={artistName}/>
    </>
  );
};

ReleaseListPresenter.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default ReleaseListPresenter;
