import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReleasesView from '../components/Releases/ReleasesView';
import { useReleases } from '../hooks/useReleases';
import { usePagination } from '../hooks/usePagination';


const ReleaseListPresenter = ({ match }) => {
  const [limit] = useState(20);

  const { offset, setOffset, setTotalCount, Pagination } = usePagination(limit);
  const { releases, handleClick } = useReleases(match.params.id, offset, setOffset, setTotalCount, limit);
  return (
    <>
      {Pagination}
      <ReleasesView onClick={handleClick} releases={releases}/>
    </>
  );
};

ReleaseListPresenter.propTypes = {
  match: PropTypes.object.isRequired
};

export default ReleaseListPresenter;
