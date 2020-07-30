import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ artistSearch, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Search for Artist
        <input type="text" name="artistSearch" value={artistSearch} onChange={onChange}></input>
      </label>
      <button>Submit</button>
    </form>
  );
}

SearchForm.propTypes = {
  artistSearch: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.inRequired
};

export default SearchForm;


