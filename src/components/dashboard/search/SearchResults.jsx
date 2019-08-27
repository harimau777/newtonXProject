import React from 'react';
import { Link } from 'react-router';

const SearchResults = results => (
  <ul>
    {results.map(result => <SearchResult result={result} />)}
  </ul>
);

const SearchResult = ({ id, username, firstName, lastName }) => (
  <li>
    <Link
      to={{
        pathname: '/userDetails',
        query: { id, username, firstName, lastName }
      }}
    >
      <p>Username: ${username}</p>
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
    </Link>
  </li>
);

export default SearchResults;
