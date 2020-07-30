import React from 'react';
import ArtistsView from '../components/Artists/ArtistsView';
import SearchForm from '../components/SearchForm/SearchForm';
import { useArtists } from '../hooks/useArtists';
import { usePagination } from '../hooks/usePagination';


const ArtistListPresenter = () => {
  const { page, setTotalPages, Pagination } = usePagination();
  const { artists, handleSubmit, handleChange } = useArtists(page, setTotalPages);
  

  return (
    <>
      {Pagination}
      <SearchForm onChange={handleChange} onSubmit={handleSubmit}/>
      <ArtistsView artists={artists}/>
    </>
  );

};

export default ArtistListPresenter;
