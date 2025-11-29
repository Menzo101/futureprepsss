import React from "react";
import "./downloadus.css";
import studentPlay from "../assets/images/studying.jpg";
import studentPlayTwo from "../assets/images/classreading.jpg";
import studentPlayThree from "../assets/images/peergroup.jpg";
import studentPlayFour from "../assets/images/reading.jpg";
import studentPlayFive from "../assets/images/smartlearning.jpg";
import googleplay from "../assets/images/app.png";
import applestore from "../assets/images/game.png";

const Downloadus = () => {
  return (
    <>
      <section className="download-section">
        <div className="download-content">
          <h1>
            Download the learning app <br />
            for <span className="downHigh">better learning experience</span>
          </h1>

          <div className="download-buttons">
            <button className="btn web-btn">
              <img src={applestore} alt="Google Play" />
              Download on App store
            </button>

            <button className="btn play-btn">
              <img src={googleplay} alt="Google Play" />
              Download on Google Play
            </button>
          </div>
        </div>

        <div className="hero-images">
          <div className="circle">
            <img src={studentPlay} alt="student" />
          </div>
          <div className="circle">
            <img src={studentPlayTwo} alt="student" />
          </div>
          <div className="circle">
            <img src={studentPlayThree} alt="student" />
          </div>
          <div className="circle">
            <img src={studentPlayFour} alt="student" />
          </div>
          <div className="circle">
            <img src={studentPlayFive} alt="student" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Downloadus;
