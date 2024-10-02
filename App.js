import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return;
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  return (
    <div className="container mx-auto">
      <h1>Shopping Cart App</h1>
      <ProductList addToCart={addToCart} />
      <ShoppingCart cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  );
};

export default App;

