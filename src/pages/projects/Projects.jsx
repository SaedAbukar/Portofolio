import React from "react";
import Project from "../../components/Project";
import JobScoutPic from "../../assets/jobscout.jpg";
import LosSantosPic from "../../assets/Cardealership.jpg";
import HeartRatePic from "../../assets/Heartrate.jpg";
import FCHaxi from "../../assets/FCHaxi_Portofolio.jpg";
import EvoRoutePic from "../../assets/EvoRoute.jpg";
import TacticFlow from "../../assets/TacticFlow.jpg";
import "./Projects.css";

// Dummy project data
const projectData = [
  {
    id: 1, // Added EvoRoute here
    image: EvoRoutePic,
    title: "EvoRoute",
    description:
      "Developed a cross-platform EV trip planner using React Native, Expo, and NestJS to eliminate range anxiety. The app aggregates real-time charging station data via REST APIs and utilizes Gemini AI for intelligent battery consumption estimations. Features include route calculation capabilities with TomTom, complex state management using MobX, and a scalable multi-database architecture with SQLite, MongoDB, and Supabase.",
    link: "",
    github: "https://github.com/Viettranni/StationFinder-EV",
  },
  {
    id: 2,
    image: TacticFlow,
    title: "TacticFlow",
    description: (
      <>
        Developed an interactive tactical planning platform for football
        managers using React (TypeScript) and Spring Boot (Kotlin). The
        application features a virtual tactics board where training sessions and
        match strategies can be designed and fully animated. Includes robust
        collaboration tools backed by PostgreSQL.
        <br />
        <br />
        {/* UPDATED NOTE SECTION */}
        <div
          style={{
            backgroundColor:
              "rgba(255, 165, 0, 0.08)" /* Very subtle orange tint */,
            padding: "10px",
            borderRadius: "6px",
            borderLeft: "3px solid orange",
            marginBottom: "12px",
            fontSize: "0.85rem",
            color: "var(--text-light)",
            lineHeight: "1.5",
          }}
        >
          <strong>⚠️ Infrastructure Note:</strong> Hosted on Render Free Tier.
          The backend spins down after inactivity. Please allow{" "}
          <strong>~60 seconds</strong> for the initial cold start. You can check
          the current server status via the <strong>Backend Live</strong> link
          below.
        </div>
        <strong>Backend Live: </strong>
        <a
          href="https://apittactics-app.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--accent-color)", textDecoration: "underline" }}
          onClick={(e) => e.stopPropagation()}
        >
          apittactics-app.onrender.com
        </a>
        <br />
        <strong>Backend GitHub: </strong>
        <a
          href="https://github.com/SaedAbukar/ApitTactics_app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--accent-color)", textDecoration: "underline" }}
          onClick={(e) => e.stopPropagation()}
        >
          View Repository
        </a>
      </>
    ),
    link: "https://tacticflow-client.onrender.com/tacticalEditor",
    github: "https://github.com/SaedAbukar/Tactics_app",
  },
  // {
  //   id: 3,
  //   image: FCHaxi,
  //   title: "FC Haxi Websites",
  //   description:
  //     "Developed a modern and responsive home page for my local team FC Haxi using React. The platform includes key sections such as the homepage, sponsors, player profiles, contact information, social media integration, and interactive elements to engage fans. Designed with a clean, dynamic interface, the website aligns with the team's branding and delivers an optimal user experience across all devices.",
  //   link: "https://fc-haxi.vercel.app/",
  //   github: "https://github.com/SaedAbukar/FCHaxi",
  // },
  {
    id: 4,
    image: JobScoutPic,
    title: "Job$cout",
    description: (
      <>
        Developed a full-stack job-hunting application using the MERN stack
        (MongoDB, Express, React with Vite, Node.js) with user authentication,
        real-time updates, and responsive design. The app scrapes job postings
        from third-party sites, saves them to a database, and allows registered
        users to view listings. Integrated GPT-3.5-Turbo API to generate
        personalized cover letters based on job descriptions.
        <br />
        <br />
        {/* MAINTENANCE NOTE */}
        <div
          style={{
            backgroundColor:
              "rgba(128, 128, 128, 0.1)" /* Subtle Grey for archived status */,
            padding: "10px",
            borderRadius: "6px",
            borderLeft: "3px solid #71717a" /* Zinc/Grey border */,
            marginBottom: "12px",
            fontSize: "0.85rem",
            color: "var(--text-light)",
            lineHeight: "1.5",
          }}
        >
          <strong>⚠️ Legacy Status:</strong> This project is archived. The
          backend cloud services have been discontinued, so the live link below
          functions as a <strong>frontend-only demonstration</strong>.
        </div>
      </>
    ),
    link: "https://jobscout.viettran.fi/",
    github: "https://github.com/Viettranni/JobScout",
  },
  {
    id: 5,
    image: LosSantosPic,
    title: "Los Santos Customs",
    description:
      "Developed a three-phase simulation in Java using JavaFX and SQL to model customer interactions at a car dealership, including sales, financing, test drives, and customer service. The program utilized normal and exponential distributions for realism, with user inputs and car data stored in a SQL database. Outputs exported to CSV for data analysis, providing insights for efficiency improvements",
    link: "",
    github: "https://github.com/Viettranni/LosSantosCustoms",
  },
  {
    id: 6,
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
