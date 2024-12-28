import React from "react";
import Saed from "../assets/Saed_AVI.jpg";
import "../styles/home.css";

function Home() {
  return (
    <div className="section" id="home">
      <h1>Home</h1>
      <img
        className="profile_pic"
        src={Saed}
        alt="profile picture of Saed Abukar"
      ></img>
      <p>Welcome to my portfolio! Scroll down to learn more.</p>
    </div>
  );
}

export default Home;
