import { useState, useEffect } from 'react';
import * as Artist from '../models/Artist';

//ArtistModel

export const useArtists = (offset, setOffset, setTotalCount, limit) => {
  const [artists, setArtists] = useState([]);
  const [artistSearch, setArtistSearch] = useState('');

  const handleChange = ({ target }) => {
    setArtistSearch(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    Artist.find(artistSearch, offset, limit)
      .then(({ artists, totalCount }) => {
        setArtists(artists);
        setTotalCount(totalCount);
        setOffset(0);
      });
  };

  useEffect(() => {
    if(artistSearch) {
      Artist.find(artistSearch, offset, limit)
        .then(({ artists, totalCount }) => {
          setArtists(artists);
          setTotalCount(totalCount);
        });
    }
  }, [offset]);

  return {
    handleChange,
    handleSubmit,
    artists };
};
