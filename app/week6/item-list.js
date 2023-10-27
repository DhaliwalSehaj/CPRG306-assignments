import React, { useState } from 'react';
import Item from './item'; 
import items from './items.json'; 

 function ItemList({items}) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items]; 
  if (sortBy === 'name') {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'category') {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  const isSortByName = sortBy === 'name';
  const isSortByCategory = sortBy === 'category';

  const handleNameSort = () => {
    setSortBy('name');
  };

  const handleCategorySort = () => {
    setSortBy('category');
  };

  return (
    <div>
      <div className="text-center">
  <select onChange={(e) => setSortBy(e.target.value)} value={sortBy} className="sort-select orange-button bg-sky-950 text-white p-2 font-sans">
    <option value="name" onClick={handleNameSort}>Sort by Name</option>
    <option value="category" onClick={handleCategorySort}>Sort by Category</option>
  </select>
</div>

      <ul>
        {sortedItems.map((item) => (
         // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
          //</div>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;