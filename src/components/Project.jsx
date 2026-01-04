import React from "react";

function Project(props) {
  const { image, title, description, link, github } = props;

  return (
    <div className="project-card">
      <img src={image} alt="project picture"></img>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <i className="devicon-github-original"></i>
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            Visit site
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
