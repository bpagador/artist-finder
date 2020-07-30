import { useState, useEffect } from 'react';
import * as Releases from '../models/Releases';

export const useReleases = (id) => {
  const [releases, setReleases] = useState([]);

  const handleClick = () => {
    Releases.find(id)
      .then(({ releases }) => {
        setReleases(releases);
      });
  };

  useEffect(() => {
    if(handleClick) {
      Releases.find(id)
        .then(({ releases }) => {
          setReleases(releases);
        });
    }
  }, []);

  return {
    handleClick,
    releases
  };
};
