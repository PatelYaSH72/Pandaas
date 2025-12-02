import React from "react";
import "./Airesources.css";
import { AIToolsData } from "../../../assets/assets";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi2";

const Airesources = () => {
  console.log(AIToolsData[1].name);

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-section">
          <div className="logo-back">
            <HiHome size={30} />
            <Link to="/">
              <FaArrowLeft size={20} /> Back
            </Link>
          </div>

          <span className="header-text">
            Discover powerful AI tools for your next project
          </span>
        </div>
      </header>

      <main className="main-content">
        {AIToolsData.map((items) => (
          <div className="card" key={items}>
            <div className="card-image-container">
              <img src={items.image} alt={items.name} className="card-image" />
            </div>
            <div className="card-details">
              <h2 className="card-title">{items.name}</h2>
              <h3 className="section-heading">What it does</h3>
              <p className="description">{items.whatItDoes}</p>
              <h3 className="section-heading">How to use</h3>
              <ol className="how-to-list">
                {items.howToUse.map((item) => (
                  <li>{item}</li>
                ))}
              </ol>
              <h3 className="section-heading">Technology Relevance</h3>
              <div className="tags-container">
                {items.techRelevance.map((item) => (
                  <span className="tag">{item}</span>
                ))}
              </div>
              <h3 className="section-heading">Useful Links</h3>
              <div className="useful-links">
                <a
                  href={items.officialLink}
                  className="link-item"
                  target="_blank"
                >
                  <span className="link-icon">↗</span> Official Website
                </a>
                <a href={items.docLink} className="link-item" target="_blank">
                  <span className="link-icon">📄</span> Documentation
                </a>
                <a
                  href={items.tutorialLink}
                  className="link-item"
                  target="_blank"
                >
                  <span className="link-icon">📚</span> Tutorials
                </a>
                <a
                  href={items.githubLink}
                  className="link-item"
                  target="_blank"
                >
                  <span className="link-icon">🐙</span> GitHub / Resources
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Airesources;
