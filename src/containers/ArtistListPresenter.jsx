import React, { useState } from 'react';
import ArtistsView from '../components/Artists/ArtistsView';
import SearchForm from '../components/SearchForm/SearchForm';
import { useArtists } from '../hooks/useArtists';
import { usePagination } from '../hooks/usePagination';

const ArtistListPresenter = () => {
  const [limit] = useState(20);
  const { offset, setOffset, setTotalCount, Pagination } = usePagination(limit);
  const { artists, handleSubmit, handleChange } = useArtists(offset, setOffset, setTotalCount, limit);

  return (
    <>
      {Pagination}
      <SearchForm onChange={handleChange} onSubmit={handleSubmit}/>
      <ArtistsView artists={artists}/>
    </>
  );
};

export default ArtistListPresenter;
