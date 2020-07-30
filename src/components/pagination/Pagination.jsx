import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ totalCount, nextPage, prevPage, offset, limit }) => {
  return (
    <>
      {
        totalCount > 0 && <>
          <button disabled={offset === 0} onClick={prevPage}>&lt;</button>
          {}
          <span>{Math.ceil(offset / limit) + 1} / {Math.ceil(totalCount / limit)}</span>
          <button disabled={offset >= totalCount - limit} onClick={nextPage}>&gt;</button>
        </>
      }


    </>
  );
};

Pagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired
};

export default Pagination;
