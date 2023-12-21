
import { useState, useEffect } from "react";
import ProductLookup from "../functional/ProductLookup";
import "./ProductList.css";

const ProductList = () => {
  const [productList, setList] = useState([]);
  const cart = JSON.parse(localStorage.getItem("cart" || "[]"));
  console.log(cart);

  async function fetchProducts() {
    const response = await fetch(`http://localhost:5000/products`);
    const data = await response.json();
    setList(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="top-bar">
        <div>
         
        </div>
        <div className="nav-links">
          {/* Your existing navigation links */}
          {/* Home, Shopping Cart, Product List, Check Out */}
        </div>
      </div>
      <div className="Main_Content_Area">
        <ProductLookup data={productList}></ProductLookup>
      </div>
      <div className="footer">
        <p>Copyright 2023 www.mugandcup.com. All rights reserved</p>
      </div>
    </>
  );
};

export default ProductList;
