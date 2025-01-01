import React from "react";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Java", icon: "devicon-java-plain" },
    ],
  },
  {
    category: "Frontend Frameworks",
    skills: [
      { name: "React", icon: "devicon-react-original" },
      { name: "TailwindCSS", icon: "devicon-tailwindcss-plain" },
      { name: "HTML", icon: "devicon-html5-plain" },
      { name: "CSS", icon: "devicon-css3-plain" },
      { name: "JavaFX", icon: "devicon-java-plain" },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "MariaDB/SQL", icon: "devicon-mysql-plain" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Git", icon: "devicon-git-plain" },
      { name: "Figma", icon: "devicon-figma-plain" },
      { name: "Jest", icon: "devicon-jest-plain" },
      { name: "JUnit", icon: "devicon-junit-plain" },
    ],
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
                  <i className={`${skill.icon} skill-icon`}></i>{" "}
                  {/* Devicon Icon */}
                  {skill.name}
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
