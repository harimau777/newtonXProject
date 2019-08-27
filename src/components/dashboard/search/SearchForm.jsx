import React, { useState } from 'react';

const SearchForm = search => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTextChange = ({ target: { value } }) => setSearchText(value);

  const handleSearchButtonClick = () => search(searchText);

  return (
    <div>
      <label>
        Search Term:
        <input type="text" value={searchText} onChange={handleSearchTextChange} />
      </label>

      <button onClick={handleSearchButtonClick}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
