import React, { useEffect, useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Intersection Observer for active section
    const sections = document.querySelectorAll("section");
    const observerOptions = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    // Scroll event listener for header shadow
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scrolling for navigation
  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`bg-gray-50 sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-700">My Portfolio</h1>
        <ul className="flex space-x-4">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => handleSmoothScroll(e, section)}
                className={`hover:text-gray-900 transition-colors duration-300 ${
                  activeSection === section ? "text-blue-900 font-bold" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
