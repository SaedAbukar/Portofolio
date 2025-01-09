import React from "react";

function Navbar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Get the height of the navbar
      const navbarHeight = document.querySelector("nav").offsetHeight;

      // Scroll to the element, adjusting the position by the navbar's height
      window.scrollTo({
        top: element.offsetTop - navbarHeight, // Adjust the top position
        behavior: "smooth",
      });
    }
  };

  return (
    <nav>
      <ul>
        <li onClick={() => handleScroll("hero")}>Home</li>
        <li onClick={() => handleScroll("skills")}>Skills</li>
        <li onClick={() => handleScroll("projects")}>Projects</li>
        <li onClick={() => handleScroll("about")}>About</li>
        <li onClick={() => handleScroll("contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
