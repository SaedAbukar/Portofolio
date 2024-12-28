import React from "react";
import Project from "../components/Project";

// Dummy project data
const projectData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive portfolio built with React and CSS.",
    link: "https://myportfolio.com",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Full-stack e-commerce application using MERN stack.",
    link: "https://myecommerce.com",
  },
  {
    id: 3,
    title: "Weather App",
    description: "Weather forecasting app using OpenWeather API.",
    link: "https://weatherapp.com",
  },
];

function Projects() {
  return (
    <div className="section" id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {projectData.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
