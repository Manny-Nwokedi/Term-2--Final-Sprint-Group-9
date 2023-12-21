
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <div className="img-container">
          <img src={product.image} alt={product.name}></img>
        </div>
        <h3 className="product-name"> {product.name}</h3>
      </Link>
      <p>Price: {product.price} </p>
    </div>
  );
};

export default Product;
