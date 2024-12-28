import React from "react";
import Project from "../components/Project";

// Dummy project data
const projectData = [
  {
    id: 1,
    title: "Job$cout",
    description:
      "Developed a fullstack web application using the MERN (MongoDB, Express, React, Node.js) stack that scrapes job postings from third-party websites and saves them to a database. Registered users can view job listings, and the app offers live scraping functionality for signed-up users.",
    link: "https://jobscout-frontend.onrender.com/",
    github: "https://github.com/Viettranni/JobScout",
  },
  {
    id: 2,
    title: "Los Santos Customs",
    description:
      "Developed a three-phase simulation in Java using JavaFX and SQL to model customer interactions at a car dealership, including sales, financing, test drives, and customer service. The program utilized normal and exponential distributions for realism, with user inputs and car data stored in a SQL database. Outputs were exported to CSV for data analysis, providing insights to improve efficiency and customer satisfaction.",
    link: "",
    github: "https://github.com/Viettranni/LosSantosCustoms",
  },
  {
    id: 3,
    title: "Heart Rate Sensor",
    description:
      "Built an IoT heart rate sensor using a Raspberry Pi Pico and MicroPython to calculate live heart rate and monitor heart rate variability (HRV) and transmit data via MQTT. The device also had in-device HRV-analysis calculation.",
    link: "",
    github: "https://gitlab.metropolia.fi/karhukopla/hardware2_project",
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
