import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="footer-container">
          <div className="">
            <div className="logo">
              <h1>
                FuturePrep <span id="highlightOne">AI</span>{" "}
              </h1>
            </div>
            <p id="footer-text">
              Building Africa Future, One <br />
              Student at a time
            </p>
            <div className="footer-icon">
              <div className="iconOne">
                <a href="">
                  <FaFacebook id="icon" />
                </a>
              </div>
              <div className="iconOne">
                <a href="">
                  <FaInstagramSquare id="icon" />
                </a>
              </div>
              <div className="iconOne">
                <a href="">
                  <FaLinkedin id="icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="footerCard">
            <h1 className="heading">Features</h1>
            <div className="footerCard-links">
              <ul className="footerLinks">
                <li>AI Tutor</li>
                <li>Personalized Learning</li>
                <li>Exam Prep</li>
                <li>Progress Tracking</li>
              </ul>
            </div>
          </div>
          <div className="footerCard">
            <h1 className="heading">Pricing</h1>
            <div className="footerCard-links">
              <ul className="footerLinks">
                <li>Free Plan</li>
                <li>Premium Plan</li>
                <li>Compare Plan</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
          <div className="footerCard">
            <h1 className="heading">Contact</h1>
            <div className="footerCard-links">
              <ul className="footerLinks">
                <li>Support Center</li>
                <li>Email Us</li>
                <li>Community/Social Links</li>
                <li>Partner with Us</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
