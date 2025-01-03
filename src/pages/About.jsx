import React from "react";
import Himos from "../assets/Himos.jpg";
import Monaco from "../assets/Monaco.jpg";
import NewYork from "../assets/NewYork.jpg";
import NiagarFalls from "../assets/Niagara_Falls.jpg";
import Ottawa from "../assets/Ottawa.jpg";
import Stadikka from "../assets/Stadikka.jpg";
import ImageSlider from "../components/ImageSlider";

const IMAGES = [
  { url: Ottawa, alt: "Saed at Ottawa National Gallery" },
  { url: NewYork, alt: "Saed at New York" },
  { url: Himos, alt: "Saed at Himos hill" },
  { url: NiagarFalls, alt: "Saed at Niagara Falls" },
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
      <p>
        Hello! I’m Saed Abukar, currently pursuing a degree in Software
        Engineering at Metropolia University of Applied Sciences. With a deep
        passion for technology and problem-solving, I thrive on creating
        innovative and meaningful projects that make a real impact.
        <br />
        Whether it’s developing user-friendly applications or designing
        efficient systems, I am always eager to learn and apply new skills to
        overcome real-world challenges.
        <br />
        Outside of my studies and coding projects, I’m an avid football player,
        fitness enthusiast, and nature lover. I believe in balancing both mental
        and physical growth, which is why I stay active on the field and in the
        gym, and find inspiration in the outdoors.
        <br />
        I’m excited about the future and the opportunities to collaborate,
        learn, and contribute to projects that bring positive change. I’m always
        open to connecting with like-minded professionals and curious minds.
        Feel free to reach out—there’s a lot more to explore, and I’d love to
        share my journey with you!
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
  );
}

export default About;
