// Filter.js
import React from 'react';

function Filter({ search, onSearchChange }) {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="Filter">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search"
        aria-label="Search"
      />
    </div>
  );
}

export default Filter;
