import React from "react";
import Saed from "../../assets/Saed_Sunset.jpg";
import SaedCV from "../../assets/Saed_Abukar_CV.pdf";
import "./Hero.css";

function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Get the height of the navbar
      const navbarHeight = document.querySelector("nav").offsetHeight;

      // Scroll to the element, adjusting the position by the navbar's height
      window.scrollTo({
        top: element.offsetTop - navbarHeight, // Adjust the top position
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="section" id="hero">
      <div className="inner-hero">
        <img
          className="profile_pic"
          src={Saed}
          alt="profile picture of Saed Abukar"
        />
        <div className="hero-text">
          <h1>
            Turning <span className="hero-h1-software">Ideas</span> Into{" "}
            <span className="hero-h1-software"> Software</span>
          </h1>
          <p className="tagline">Saed Abukar | Software Engineering Student</p>
          <p className="description">
            Specializing in <strong>Mobile and Full-Stack development</strong>,
            I build scalable, user-centric software solutions. I combine
            technical expertise with a collaborative, team-first mindset. Ready
            to adapt quickly and solve complex problems in a dynamic engineering
            environment.
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
          <div className="hero-btn-container">
            <a href={SaedCV} download>
              <button className="button1">Download CV</button>
            </a>
            <button className="button1" onClick={() => handleScroll("contact")}>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
