import React from 'react';
import PropTypes from 'prop-types';
import ReleasesView from '../components/Releases/ReleasesView';
import { useReleases } from '../hooks/useReleases';


const ReleaseListPresenter = ({ match }) => {
  const { releases, handleClick } = useReleases(match.params.id);

  return (
    <>
      <ReleasesView onClick={handleClick} releases={releases}/>
    </>
  );
};

ReleaseListPresenter.propTypes = {
  match: PropTypes.object.isRequired
};

export default ReleaseListPresenter;
