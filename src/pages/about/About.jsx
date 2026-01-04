import React from "react";
import NewYork from "../../assets/NewYork.jpg";
import NiagarFalls from "../../assets/Niagara_Falls.jpg";
import Veneily from "../../assets/Veneily.jpg";
import Stadikka from "../../assets/Stadikka.jpg";
import SaedTennis from "../../assets/SaedTennis.jpg";
import SaedOttawa from "../../assets/Ottawa.jpg";
import ImageSlider from "../../components/ImageSlider";
import "./About.css";

const IMAGES = [
  { url: SaedOttawa, alt: "Saed suited" },
  { url: NewYork, alt: "Saed at New York" },
  { url: NiagarFalls, alt: "Saed at Niagara Falls" },
  { url: Veneily, alt: "Saed at boating" },
  { url: SaedTennis, alt: "Saed playing tennis" },
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
          University of Applied Sciences, majoring in{" "}
          <strong>
            Software Engineering with a focus on Mobile Development
          </strong>
          . My technical passion lies in building scalable mobile solutions and
          designing intuitive user interfaces that solve real-world challenges.
          <br />
          <br />
          Beyond my technical pursuits, I am an active{" "}
          <strong>youth football coach</strong> and athlete. This experience has
          been instrumental in developing my ability to{" "}
          <strong>collaborate effectively</strong> and{" "}
          <strong>adapt quickly</strong> to changing circumstances. Coaching has
          taught me the value of clear communication and patience, qualities
          that allow me to integrate seamlessly into engineering teams and learn
          rapidly in fast-paced environments.
          <br />
          <br />I am eager to bring this blend of technical skill and a
          dedicated, team-first mindset to a dynamic development role. Let’s
          connect to explore how I can contribute to your team’s success.
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
