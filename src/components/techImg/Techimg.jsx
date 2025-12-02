import React from 'react';
import "./Techimg.css";

// Importing images
import js from "../../assets/js.png";
import css from "../../assets/css.png";
import html from "../../assets/html-5.png";
import database from "../../assets/database.png"; // Assuming this is SQL
import programming from "../../assets/programing.png"; // Assuming this is Node.js
import python from "../../assets/python.png";
import c from "../../assets/letter-c.png"; // Assuming C or C++
import react from "../../assets/physics.png"; // React logo
import java from "../../assets/java.png";
import r from "../../assets/r.png";

const Techimg = () => {

  // Data array for better maintainability and cleaner JSX
  // Humne har skill ka naam aur image yahan define kiya hai
  const techStackData = [
    { id: 1, icon: html, name: "HTML5" },
    { id: 2, icon: css, name: "CSS3" },
    { id: 3, icon: js, name: "JavaScript" },
    { id: 4, icon: react, name: "React" },
    { id: 5, icon: programming, name: "Node.js" }, // Adjusted label based on common usage
    { id: 6, icon: database, name: "SQL" },
    { id: 7, icon: python, name: "Python" },
    { id: 8, icon: java, name: "Java" },
    { id: 9, icon: c, name: "C / C++" },
    { id: 10, icon: r, name: "R" },
  ];

  return (
    <section className="tech-section-wrapper">
      {/* Optional Heading */}
      {/* <h2 className="section-title">My Tech Stack</h2> */}

      <div className='TechImg-container'>
        {/* Data array par map chala kar cards banana */}
        {techStackData.map((tech) => (
          <div key={tech.id} className="tech-card">
            <div className="icon-wrapper">
              {/* Alt text add kiya accessibility ke liye */}
              <img src={tech.icon} alt={`${tech.name} logo`} />
            </div>
            <span className="tech-label">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Techimg;