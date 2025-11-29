import React from "react";
import "./banner.css";

export const Banner = () => {
  return (
    <>
      <section className="promo-banner">
        <div className="promo-content">
          <div className="promocontentone">
            <h1> Ready Ace Your Exam</h1>
            <p>
              Join thousand of student already learning Smarter With futurePrep
              Ai
            </p>
          </div>
        </div>
        <div className="promocontenttwo">
          <div className="contentinput">
            <input type="email" placeholder="Enter Email" id="emailbox" />
          </div>

          <button id="snap">Subscribe</button>
        </div>
      </section>
    </>
  );
};
