import React from "react";

function Navbar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <ul>
        <li onClick={() => handleScroll("about")}>About</li>
        <li onClick={() => handleScroll("skills")}>Skills</li>
        <li onClick={() => handleScroll("projects")}>Projects</li>
        <li onClick={() => handleScroll("contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
