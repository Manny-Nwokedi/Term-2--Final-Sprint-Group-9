import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="top-bar">
        <h1>Mugs & Cups</h1>
        <img src={logo} alt="Mug Symbol" className="logo" />
      </div>
      <div className="navbar">
        <div>{/* No need to repeat the heading and logo here */}</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            <h3>Home</h3>
          </Link>
          <Link to="/cart" className="nav-link">
            <h3>Shopping Cart</h3>
          </Link>
          <Link to="/list" className="nav-link">
            <h3>Product List</h3>
          </Link>
          <Link to="/check" className="nav-link">
            <h3>Check Out</h3>
          </Link>
        </div>
        <div className="belownavbar"></div>
      </div>
    </div>
  );
};

export default NavBar;
