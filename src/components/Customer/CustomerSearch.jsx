import React from 'react';

function CustomerSearch({ searchTerm, onSearch }) {
  return (
    <input
      type='text'
      placeholder='Search by name'
      value={searchTerm}
      onChange={onSearch}
      className='my-4 px-2 py-1 border border-gray-300 rounded-md'
    />
  );
}

export default CustomerSearch;
