import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = (props) => {
  const { onSearchChange, searchTerm } = props;
  return (
    <div className='pa2'>
      <input className='pa2'
        type='search'
        placeholder='search Robots...'
        onChange={onSearchChange}
        value={searchTerm}
      />
    </div>
  );
};

SearchBox.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default SearchBox;
