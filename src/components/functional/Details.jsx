import { useNavigate } from "react-router-dom";

const Details = ({ product }) => {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  console.log(cart);

  const productInView = cart.filter((item) => item.id === product.id);

  function addToCart() {
    var qty = document.getElementById("qty").value;
    if (qty === "" || qty === "0") {
      alert("Enter a value greater than 0!");
      return;
    }
    if (productInView.length > 0) {
      cart.forEach((element) => {
        if (element.id === product.id) {
          element.qty = Number(element.qty) + Number(qty);
        }
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Quantity Added to Cart");
      navigate("/list");
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: Number(document.getElementById("qty").value),
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Item Added to Cart");
      navigate("/list");
    }
  }
  return (
    <div>
      <div className="details-img-container">
        <img src={product.image} alt={product.name}></img>
      </div>
      <div>
        <h3>{product.name}</h3>
        <p>Price: {product.price} </p>
        <p>Description: {product.description} </p>
        <div>
          <input type="number" id="qty" min="1"></input>
          <button id="add_to_cart" onClick={() => addToCart()}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
