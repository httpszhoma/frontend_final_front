import React from 'react';

const ProductCard = ({ name, price, image }) => (
  <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
    <img src={image} alt={name} className="h-40 w-full object-cover rounded-t-lg" />
    <div className="mt-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">${price}</p>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductCard;
