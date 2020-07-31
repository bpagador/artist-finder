import { useState, useEffect } from 'react';
import * as Releases from '../models/Releases';

export const useReleases = (id, offset, setOffset, setTotalCount, limit) => {
  const [releases, setReleases] = useState([]);

  const handleClick = () => {
    Releases.find(id, offset, limit)
      .then(({ releases, totalCount }) => {
        setReleases(releases);
        setTotalCount(totalCount);
        setOffset(0);
      });
  };

  useEffect(() => {
    if(handleClick) {
      Releases.find(id, offset, limit)
        .then(({ releases, totalCount }) => {
          setReleases(releases);
          setTotalCount(totalCount);
        });
    }
  }, [offset]);

  return {
    handleClick,
    releases
  };
};
