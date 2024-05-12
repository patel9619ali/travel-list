import React from 'react';

export function Stats({ items }) {
  let numItems = items.length;
  let packeditem = items.filter(items => items.packed);
  let percentagePackedItems = (packeditem.length / numItems) * 100;
  return (
    <div className="stats">{`You have ${numItems} items in your list and ${packeditem.length == 0 ? "0" : percentagePackedItems}% has been Packed`}</div>
  );
}
