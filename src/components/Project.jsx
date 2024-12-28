import React from "react";

function Project(props) {
  const { title, description, link, github } = props;

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visit site
        </a>
      )}
      <br></br>
      <a href={github} target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </div>
  );
}

export default Project;
