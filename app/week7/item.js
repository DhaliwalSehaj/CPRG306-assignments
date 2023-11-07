import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="cursor-pointer border border-sky-500 bg-sky-600 m-3 p-2">
      <div className="font-semibold text-lg">{name}</div>
      <div className="text-white-600">{category}</div>
      <div className="text-sm text-white-500">{`Quantity: ${quantity}`}</div>
    </li>
  );
};
export default Item;