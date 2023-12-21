
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import redmug from "../../images/RedCup.png";
import twocoffe from "../../images/2Coffee.png";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <img src={twocoffe} alt="2Coffee" class="home-image" />
        <div className="home-content">
          <p>
            Warm hands and hearts with personalized mugs that are made to last.
          </p>
          <Link to="/list">
            <div className="see-all">Click to see all products</div>
          </Link>
        </div>
        <img src={redmug} alt="RedCup" className="home-image" />
      </div>
      <div className="footer">
        <p>Copyright 2023 www.mugandcup.com. All rights reserved</p>
      </div>
    </>
  );
};

export default Home;
