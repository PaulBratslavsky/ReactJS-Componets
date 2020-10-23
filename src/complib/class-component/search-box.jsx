import React from 'react';

const SearchBox = ({label = "Search", handleChange}) => (
    <input type="search" placeholder={label} onChange={handleChange} />
  )

export default SearchBox;