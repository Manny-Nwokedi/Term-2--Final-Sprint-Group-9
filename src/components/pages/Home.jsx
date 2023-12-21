
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ color: "#fff" }}>
      <Link to="/list">
        <div>Click to see all products</div>
      </Link>
    </div>
  );
};

export default Home;
