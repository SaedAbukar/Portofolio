import React from "react";
import Saed from "../assets/Saed_AVI.jpg";
import SaedCV from "../assets/Saed_Abukar_CV.pdf";

function Hero() {
  return (
    <div className="section" id="hero">
      <div className="inner-hero">
        <img
          className="profile_pic"
          src={Saed}
          alt="profile picture of Saed Abukar"
        />
        <div className="hero-text">
          <h1>Saed Abukar</h1>
          <p className="tagline">
            Passionate Software Engineering Student | Building the Future of
            Technology
          </p>
          <p className="description">
            I specialize in creating innovative and efficient software
            solutions. Eager to bring my skills in Full-Stack Development and
            Problem Solving to a dynamic team. Let's collaborate to make an
            impact!
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/SaedAbukar"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <i className="devicon-github-original"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/saed-abukar-a1bb592b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <i className="devicon-linkedin-plain"></i>
            </a>
          </div>
          <a href={SaedCV} download>
            <button className="btn-cv">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
