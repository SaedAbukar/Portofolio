import React, { useState, useEffect } from "react";

function Navbar() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [theme, setTheme] = useState("light");

  // Detect system theme and set initial theme
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const savedTheme = localStorage.getItem("theme") || systemTheme;
    setTheme(savedTheme);
    document.documentElement.className = savedTheme; // Apply the theme class to root
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e) => {
      const newSystemTheme = e.matches ? "dark" : "light";
      const savedTheme = localStorage.getItem("theme");
      // Update theme only if no preference is saved
      if (!savedTheme) {
        setTheme(newSystemTheme);
        document.documentElement.className = newSystemTheme;
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  // Toggle theme manually
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme; // Apply new theme to root
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
