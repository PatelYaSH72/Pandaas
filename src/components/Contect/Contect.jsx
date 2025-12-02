import React from "react";
import "./Contect.css";
// All CSS styling is now included directly inside the component using a <style> block.

// Icons for professional look (using Lucide-React equivalent concepts)
// In a real project, you would import these from a library like lucide-react or react-icons
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="Black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-mail"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="Black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-clock"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const HelpCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="Black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-help-circle"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </svg>
);

const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-container">
          {/* Left Side: Support Information & FAQs */}
          <div className="contact-info">
            <h2 className="contact-title">Need Help? Get in Touch</h2>
            <p className="contact-desc">
              Whether you have questions about course enrollment, technical
              issues, or pricing, our dedicated support team is here to guide
              your learning journey.
            </p>

            {/* Key Support Details (Structured) */}
            <div className="info-grid">
              <div className="info-item">
                <MailIcon />
                <div className="info-text">
                  <span className="info-label">Student Support</span>
                  <a
                    href="mailto:support@learningsite.com"
                    className="info-value"
                  >
                    support@learningsite.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <ClockIcon />
                <div className="info-text">
                  <span className="info-label">Support Hours</span>
                  <span className="info-value">
                    Mon - Fri: 9:00 AM - 6:00 PM (IST)
                  </span>
                </div>
              </div>

              <div className="info-item large-item">
                <HelpCircleIcon />
                <div className="info-text">
                  <span className="info-label">Quick Answers</span>
                  {/* Dummy link, replace with actual FAQ link */}
                  <a href="#faq" className="info-value faq-link">
                    Visit our detailed FAQ Center
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form
            className="contact-form"
            action="https://formsubmit.co/yp7201007221@gmail.com"
            method="POST"
          >
            {/* Important hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Support Request from Website"
            />
            <input
              type="hidden"
              name="_next"
              value="https://yourwebsite.com/thankyou.html"
            />

            <h3 className="form-heading">Send Us Your Query</h3>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="E.g., Anjali Sharma"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="anjali@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                Subject (e.g., Course Access Issue)
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Select a relevant subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Detailed Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Please describe your issue or question here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit Support Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
