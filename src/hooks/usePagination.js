import React, { useState } from 'react';
import Pagination from '../components/pagination/Pagination.jsx';

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const previousPage = () => setPage(page => page - 1);
  const nextPage = () => setPage(page => page + 1);

  return {
    page,
    previousPage,
    nextPage,
    setTotalPages,
    Pagination: (<Pagination
      totalPages={totalPages}
      page={page}
      previousPage={previousPage}
      nextPage={nextPage}
    />)
  };
};
