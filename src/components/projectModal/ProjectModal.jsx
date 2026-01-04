import React, { useEffect } from "react";
import ImageSlider from "../ImageSlider";
import "../styles/ProjectModal.css";

function ProjectModal({ project, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="modal-slider-wrapper">
          <ImageSlider images={project.gallery} />
        </div>

        <div className="modal-details">
          <h2>{project.title}</h2>
          <p className="modal-description">{project.description}</p>

          <div className="modal-tech-stack">
            <h3>Technologies:</h3>
            <div className="tech-tags">
              {/* You can pass tech stack as an array in data later, strictly using description for now */}
              {/* This is a placeholder visual based on your design system */}
              {project.title.includes("MERN") && <span>MERN Stack</span>}
              <span>React</span>
              <span>Development</span>
            </div>
          </div>

          <div className="project-links modal-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="devicon-github-original"></i>
                <span>GitHub</span>
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
