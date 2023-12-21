// Checkout.js
import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import "./Checkout.css";
 
const Checkout = () => {
  const [cartItems, setCartItems] = useLocalStorage("cart");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    creditCard: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
 
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log("Checkout data:", formData);
    console.log("Cart Items:", cartItems);
 
    setCartItems([]);
    setSubmittedData(formData); // Store submitted data
    setFormData({ name: "", address: "", creditCard: "" }); // Clear form data after submission
    alert("Checkout successful!");
  };
 
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  };
 
  return (
<div className="checkout">
<h2>Checkout</h2>
<form onSubmit={handleSubmit}>
        {/* Form Fields */}
<input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
<input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
<input
          type="text"
          name="creditCard"
          placeholder="Credit Card Number"
          value={formData.creditCard}
          onChange={handleInputChange}
          required
        />
<button type="submit">Submit Order</button>
</form>
 
      <div className="order-summary">
<h3>Order Summary</h3>
        {submittedData && ( // Display submitted data if available
<div>
<p>Name: {submittedData.name}</p>
<p>Address: {submittedData.address}</p>
<p>Credit Card: {submittedData.creditCard}</p>
</div>
        )}
        {cartItems.map((item, index) => (
<div key={index}>
            {/* ... display cart items */}
</div>
        ))}
<p>Total Amount: ${calculateTotal()}</p>
</div>
</div>
  );
};
 
export default Checkout;