import React, { useState } from 'react';

import { doSearch } from '../../../apiUtils';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import Error from './Error';

const Search = () => {
  const [results, setResults] = useState([]);
  const [isError, setIsError] = useState(false);

  const search = () => {
    doSearch
    .then(
      results => {
        setResults(results);
        setIsError(false);
      },
      Promise.reject  // For now reject in order to handle all errors in catch block
    )
    .catch(error => setIsError(true));
  };

  return (
    <div>
      {isError && <Error />}
      <SearchForm search={search} />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;
