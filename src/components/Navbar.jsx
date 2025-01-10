import React, { useState, useEffect } from "react";

function Navbar() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme; // Set theme class on the root
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme; // Toggle theme class on the root
    localStorage.setItem("theme", newTheme); // Save preference
  };

  const handleScroll = (id, item) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth",
      });
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
          className={selectedItem === "projects" ? "selected" : ""}
          onClick={() => handleScroll("projects", "projects")}
        >
          Projects
        </li>
        <li
          className={selectedItem === "skills" ? "selected" : ""}
          onClick={() => handleScroll("skills", "skills")}
        >
          Skills
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
        {/* Theme Toggle Button with Material Symbols icons */}
        <button className="theme-icon-btn" onClick={toggleTheme}>
          <span className="material-symbols-outlined">
            {theme === "light" ? "light_mode" : "dark_mode"}
          </span>
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
