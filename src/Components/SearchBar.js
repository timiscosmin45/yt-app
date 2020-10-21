import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search Video</label>
          <input type="text" onChange={(e) => setTerm(e.target.value)} value={term} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;