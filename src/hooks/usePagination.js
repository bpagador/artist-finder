import React, { useState } from 'react';
import Pagination from '../components/pagination/Pagination.jsx';

export const usePagination = (limit) => {
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const previousPage = () => setOffset(offset => offset - limit);
  const nextPage = () => setOffset(offset => offset + limit);

  return {
    offset,
    setOffset,
    previousPage,
    nextPage,
    setTotalCount,
    Pagination: (<Pagination
      totalCount={totalCount}
      nextPage={nextPage}
      prevPage={previousPage}
      offset={offset}  
      limit={limit}
    />)
  };
};
