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
          I’m Saed Abukar, a Software Engineering student at Metropolia
          University of Applied Sciences. I have a strong foundation in
          developing scalable, efficient software solutions and am passionate
          about solving complex problems through technology. My focus is on
          creating user-friendly applications, leveraging modern frameworks and
          methodologies to deliver high-quality results.
          <br />
          Throughout my studies, I’ve gained hands-on experience in software
          development, system design, and data structures. I thrive in
          collaborative environments and am always eager to learn new
          technologies to improve my skills and contribute meaningfully to
          real-world projects.
          <br />
          I’m actively seeking opportunities to apply my technical expertise and
          work on projects that challenge me and have a positive impact. Let’s
          connect and explore how we can work together to build innovative
          software solutions.
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
