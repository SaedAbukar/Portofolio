import React, { useState } from "react";

function Navbar() {
  // State to track the selected item
  const [selectedItem, setSelectedItem] = useState(null);

  const handleScroll = (id, item) => {
    const element = document.getElementById(id);
    if (element) {
      // Get the height of the navbar
      const navbarHeight = document.querySelector("nav").offsetHeight;

      // Scroll to the element, adjusting the position by the navbar's height
      window.scrollTo({
        top: element.offsetTop - navbarHeight, // Adjust the top position
        behavior: "smooth",
      });

      // Set the selected item
      setSelectedItem(item);
    }
  };

  return (
    <nav>
      <ul>
        <li
          className={selectedItem === "home" ? "selected" : ""}
          onClick={() => handleScroll("hero", "home")}
        >
          Home
        </li>
        <li
          className={selectedItem === "skills" ? "selected" : ""}
          onClick={() => handleScroll("skills", "skills")}
        >
          Skills
        </li>
        <li
          className={selectedItem === "projects" ? "selected" : ""}
          onClick={() => handleScroll("projects", "projects")}
        >
          Projects
        </li>
        <li
          className={selectedItem === "about" ? "selected" : ""}
          onClick={() => handleScroll("about", "about")}
        >
          About
        </li>
        <li
          className={selectedItem === "contact" ? "selected" : ""}
          onClick={() => handleScroll("contact", "contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
