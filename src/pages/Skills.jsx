import React from "react";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["JavaScript", "Python", "Java"],
  },
  {
    category: "Frontend Frameworks",
    skills: ["React", "TailwindCSS", "HTML", "CSS", "JavaFX"],
  },
  {
    category: "Backend & Databases",
    skills: ["Node.js", "Express", "MongoDB", "MariaDB/SQL"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Docker", "Git", "Figma", "Jester", "JUnit"],
  },
];

function Skills() {
  return (
    <div className="section" id="skills">
      <h1>Skills</h1>
      <p>Here are the technologies and tools I work with:</p>

      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-category-card">
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
