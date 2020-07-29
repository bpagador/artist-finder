import { useState, useEffect } from 'react';
import * as Artist from '../models/Artist';

//ArtistModel

export const useArtists = (page, setTotalPages) => {
  const [artists, setArtists] = useState([]);
  const [artistSearch, setArtistSearch] = useState('');

  const handleChange = ({ target }) => {
    setArtistSearch({ target: target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    Artist.find()
      .then(({ artists, totalPages }) => {
        setArtists(artists);
        setTotalPages(totalPages);
      });
  };

  useEffect(() => {
    if(artistSearch) handleSubmit(event);
  }, [page]);

  return { 
    handleChange, 
    handleSubmit, 
    artists };
};
