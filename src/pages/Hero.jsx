import React from "react";
import Saed from "../assets/Saed_AVI.jpg";
import SaedCV from "../assets/Saed_Abukar_CV.pdf";

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
          <h1>Saed Abukar</h1>
          <p className="tagline">
            Passionate Software Developer | Building the Future of Technology
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
