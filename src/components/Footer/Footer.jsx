import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
   <>
           
            

            {/* The Footer Structure */}
            <footer className="footer-container">
                <div className="footer-content">

                    {/* Section 1: Brand & Tagline */}
                    <div className="footer-section">
                        <span className="footer-brand">Pandas</span>
                        <p className="footer-brand-tagline">
                            Learn data science, programming, and analysis from the ground up.
                        </p>
                    </div>

                    {/* Section 2: Quick Links */}
                    <div className="footer-section">
                        <h3>Explore</h3>
                        <a href="#courses">All Courses</a>
                        <a href="#paths">Learning Paths</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#blog">Blog</a>
                    </div>

                    {/* Section 3: Company */}
                    <div className="footer-section">
                        <h3>Company</h3>
                        <a href="#about">About Us</a>
                        <a href="#team">Our Team</a>
                        <a href="#careers">Careers</a>
                        <a href="#contact">Contact Support</a>
                    </div>

                    {/* Section 4: Connect */}
                    <div className="footer-section">
                        <h3>Connect</h3>
                        <a href="https://linkedin.com/pandas" target="_blank">LinkedIn</a>
                        <a href="https://twitter.com/pandaslearn" target="_blank">Twitter</a>
                        <a href="https://facebook.com/pandaslearn" target="_blank">Facebook</a>
                    </div>
                </div>

                {/* Copyright and Legal */}
                <div className="footer-bottom">
                    <p>&copy; 2024 Pandas. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#terms">Terms of Service</a> |
                        <a href="#privacy">Privacy Policy</a> |
                        <a href="#cookies">Cookie Settings</a>
                    </div>
                </div>
            </footer>
        </>
  )
}

export default Footer
