// CartItem.js
import React from "react";

const CartItem = ({ item, onRemoveItem }) => {
  return (
    <div className="CartItem">
      <div className="CartItemDetails">
        <p>Name: {item.name}</p>
        <p>Amount: {item.qty}</p>
        <p>Price: ${item.price}</p>
      </div>
      <button className="RemoveButton" onClick={() => onRemoveItem(item.id)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;