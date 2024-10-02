import React from 'react';
import { products } from './data';

const ProductList = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4">
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-2 py-1">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
