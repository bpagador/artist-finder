import { useState, useEffect } from 'react';
import * as Recordings from '../models/Recording';

export const useRecordings = (id, offset, setOffset, setTotalCount, limit) => {
  const [recordings, setRecordings] = useState([]);

  const handleClick = () => {
    Recordings.find(id, offset, limit)
      .then(({ recordings, totalCount }) => {
        setRecordings(recordings);
        setTotalCount(totalCount);
        setOffset(0);
      });
  };

  useEffect(() => {
    if(handleClick) {
      Recordings.find(id, offset, limit)
        .then(({ recordings, totalCount }) => {
          setRecordings(recordings);
          setTotalCount(totalCount);
        });
    }
  }, [offset]);

  return {
    handleClick,
    recordings
  };
};
