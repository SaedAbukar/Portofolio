import React from "react";
import Himos from "../assets/Himos.jpg";
import Monaco from "../assets/Monaco.jpg";
import NewYork from "../assets/NewYork.jpg";
import NiagarFalls from "../assets/Niagara_Falls.jpg";
import Veneily from "../assets/Veneily.jpg";
import Stadikka from "../assets/Stadikka.jpg";
import ImageSlider from "../components/ImageSlider";

const IMAGES = [
  { url: NewYork, alt: "Saed at New York" },
  { url: Himos, alt: "Saed at Himos hill" },
  { url: NiagarFalls, alt: "Saed at Niagara Falls" },
  { url: Veneily, alt: "Saed at boating" },
  { url: Monaco, alt: "Saed at Monaco" },
  {
    url: Stadikka,
    alt: "Saed at Helsinki Olympic Stadion field playing football",
  },
];

function About() {
  return (
    <div className="section" id="about">
      <h1>About Me</h1>
      <div>
        <p>
          Hello! I’m Saed Abukar, a Software Engineering student at Metropolia
          University of Applied Sciences with a passion for technology and
          solving real-world problems. I specialize in creating user-friendly
          applications and efficient systems that make a meaningful impact.
          <br />
          Outside of academics, I’m a football player, fitness enthusiast, and
          nature lover, committed to balancing personal growth and well-being.
          <br />
          Let’s connect to share ideas, collaborate on innovative projects, or
          explore new opportunities. Together, we can create something
          impactful!
        </p>
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
          }}
          className="img-slider-container"
        >
          <ImageSlider images={IMAGES} />
        </div>
      </div>
    </div>
  );
}

export default About;
