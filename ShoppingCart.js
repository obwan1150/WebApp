import React from 'react';

const ShoppingCart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = 100;

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between">
          <span>{item.name}</span>
          <span>Price: ${item.price} x {item.quantity}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            min="1"
          />
        </div>
      ))}
      <h3>Total: ${totalPrice + shippingCost}</h3>
    </div>
  );
};

export default ShoppingCart;
