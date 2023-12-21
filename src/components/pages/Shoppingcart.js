
// Shoppingcart.js
 
import CartDisplay from "../functional/CartDisplay";
import useLocalStorage from "../hooks/useLocalStorage";
import "./Shoppingcart.css"; // Import the CSS file

export const ShoppingCartProvider = () => {
  const [cartItems, setCartItems] = useLocalStorage("cart");

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="ShoppingCart">
      <CartDisplay cart={cartItems} onRemoveItem={removeFromCart}></CartDisplay>
      {/* Footer */}
      <div className="footer">
        <p>Copyright 2023 www.mugandcup.com. All rights reserved</p>
      </div>
    </div>
  );
};
 
