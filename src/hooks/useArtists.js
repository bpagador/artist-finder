import { useState, useEffect } from 'react';
import * as Artist from '../models/Artist';

//ArtistModel

export const useArtists = (page, setTotalPages) => {
  const [artists, setArtists] = useState([]);
  const [artistSearch, setArtistSearch] = useState('');

  const handleChange = ({ target }) => {
    setArtistSearch(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    Artist.find(artistSearch, page)
      .then(({ artists, totalPages }) => {
        console.log(artists);
        setArtists(artists);
        setTotalPages(totalPages);
      });
  };

  useEffect(() => {
    if(artistSearch) {
      Artist.find(artistSearch, page)
        .then(({ artists, totalPages }) => {
          setArtists(artists);
          setTotalPages(totalPages);
        });
    }
  }, [page]);

  return {
    handleChange,
    handleSubmit,
    artists };
};
