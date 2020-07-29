import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ totalPages, nextPage, prevPage, page }) => {
  return (
    <>
      <button disabled={page === 1} onClick={prevPage}>&lt;</button>
      <span>{page} / {totalPages}</span>
      <button disabled={page === totalPages} onClick={nextPage}>&gt;</button>

    </>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired
};

export default Pagination;
