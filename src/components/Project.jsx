import React from "react";

function Project(props) {
  const { image, title, description, link, github } = props;

  return (
    <div className="project-card">
      <img src={image} alt="project picture"></img>
      <h3>{title}</h3>
      <p>{description}</p>
      {/*link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Visit site
        </a>
      )*/}
      <br></br>
      <div className="social-icons">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <i className="devicon-github-original"></i>
        </a>
      </div>
    </div>
  );
}

export default Project;
