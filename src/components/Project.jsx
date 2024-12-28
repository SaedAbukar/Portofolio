import React from "react";

function Project(props) {
  // Destructure props using spread operator
  const { title, description, link } = props;

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}

export default Project;
