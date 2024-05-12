import React, { useState } from 'react';

export function Sort({ items, handleClear }) {
  const [sortValue, setSortValue] = useState("Input");

  let sortItems;
  if (sortValue === 'Packed Items') {
    sortItems = items.sort((a, b) => (a.packed === b.packed) ? 0 : (a.packed ? 1 : -1));
  }
  else if (sortValue === 'Description') {
    sortItems = items.slice().sort((a, b) => a.search.localeCompare(b.search));
  }
  else if (sortValue === 'Input') {
    sortItems = items;
  }


  return (
    <React.Fragment>
      <div className='sort_wrapper'>
        <select value={sortValue} onChange={(e) => setSortValue(e.target.value)}>
          <option value="Input">Sort it by List</option>
          <option value="Description">Sort it by Description</option>
          <option value="Packed Items">Sort it by Packed Items</option>
        </select>
        <button onClick={() => { handleClear(); }}>Clear all the list</button>
      </div>
    </React.Fragment>
  );
}
