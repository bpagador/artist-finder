import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ artistName, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Search for Artist
        <input type="text" name="artistName" value={artistName} onChange={onChange}></input>
      </label>
      <button>Submit</button>
    </form>
  );
}

SearchForm.propTypes = {
  artistName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.inRequired
};

export default SearchForm;


