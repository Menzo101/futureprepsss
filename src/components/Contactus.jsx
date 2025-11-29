import React from "react";
import "./contactus.css";
import customerservice from "../assets/images/customerservice.jpg";

const Contactus = () => {
  return (
    <>
      <section className="contact-wrapper">
        <div className="contact-container">
          <div className="contact-image">
            <img src={customerservice} alt="Support Agent" />
          </div>

          <div className="contact-content">
            <h1>Contact us</h1>
            <p className="contact-sub">
              Need more clarification? Connect with our Learning Advisors.
            </p>

            <div className="contact-block">
              <h3>Call Us:</h3>
              <p className="contact-line">
                <span className="icon">📞</span>
                <span className="number">+234 810 304 4943</span>
              </p>
            </div>

            <div className="contact-block">
              <h3>WhatsApp:</h3>
              <p className="contact-line">
                <span className="icon">💬</span>
                <span className="number">+234 807 800 3333</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
