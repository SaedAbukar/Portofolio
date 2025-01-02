import React from "react";
import Project from "../components/Project";
import JobScoutPic from "../assets/jobscout.jpg";
import LosSantosPic from "../assets/Cardealership.jpg";
import HeartRatePic from "../assets/Heartrate.jpg";

// Dummy project data
const projectData = [
  {
    id: 1,
    image: JobScoutPic,
    title: "Job$cout",
    description:
      "Developed a full-stack job-hunting application using the MERN stack (MongoDB, Express, React with Vite, Node.js) with user authentication, real-time updates, and responsive design. The app scrapes job postings from third-party sites, saves them to a database, and allows registered users to view listings. Integrated GPT-3.5-Turbo API to generate personalized cover letters based on job descriptions.",
    link: "https://jobscout-frontend.onrender.com/",
    github: "https://github.com/Viettranni/JobScout",
  },
  {
    id: 2,
    image: LosSantosPic,
    title: "Los Santos Customs",
    description:
      "Developed a three-phase simulation in Java using JavaFX and SQL to model customer interactions at a car dealership, including sales, financing, test drives, and customer service. The program utilized normal and exponential distributions for realism, with user inputs and car data stored in a SQL database. Outputs were exported to CSV for data analysis, providing insights to improve efficiency and customer satisfaction.",
    link: "",
    github: "https://github.com/Viettranni/LosSantosCustoms",
  },
  {
    id: 3,
    image: HeartRatePic,
    title: "Heart Rate Sensor",
    description:
      "Developed an IoT heart rate sensor using Raspberry Pi Pico and MicroPython to monitor real-time heart rate and HRV. The device calculates HRV on-board and transmits data wirelessly via MQTT. It integrates with Kubios for advanced health analytics. Technologies used include also Wi-Fi and Thonny IDE. This solution offers efficient, continuous heart rate monitoring and analysis.",
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
