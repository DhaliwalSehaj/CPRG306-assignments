import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  // State to track the sorting option (default: "name")
  const [sortBy, setSortBy] = useState("name");

  // Create a sorted copy of the items based on the selected sorting option
  const sortedItems = [...items].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  return (
    <div>
      {/* Sorting buttons */}
      <div>
        <button
          onClick={() => setSortBy('name')}
          className={`py-2 px-2 mt-2 ml-4 ${sortBy === 'name' ? 'bg-green-600 hover:bg-yellow-600' : 'bg-yellow-600'} hover:bg-green-700 rounded-md text-black w-full max-w-xs`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`py-2 px-2 ml-4 mt-2 ${sortBy === 'category' ? 'bg-green-600 hover:bg-yellow-600 ' : 'bg-yellow-600'} hover:bg-green-700 rounded-md text-black w-full max-w-xs`}
        >
          Category
        </button>
      </div>

      {/* Render the sorted items using the Item component */}
      <div>
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect} />
        ))}
      </div>
    </div>
  );
}
