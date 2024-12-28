import React from "react";
import Saed from "../assets/Saed_AVI.jpg";

function Hero() {
  return (
    <div className="section" id="home">
      <div className="hero">
        <img
          className="profile_pic"
          src={Saed}
          alt="profile picture of Saed Abukar"
        ></img>
        <div className="hero-text">
          <h1>Saed Abukar</h1>
          <p>Software Engineering student</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
