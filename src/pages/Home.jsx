import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/newimage.png";
import valueImage from "../assets/images/benefitPicture.jpg";
import skillImage from "../assets/images/skillPicture.jpg";
import whatWeDo from "../data.js";
import logoOne from "../assets/images/head.png";
import logoTwo from "../assets/images/head.png";
import logoThree from "../assets/images/iconHolder.png";
import { Testimonial } from "../components/Testimonial.jsx";
import { Faq } from "../components/Faq.jsx";
import { IoIosPlay } from "react-icons/io";
import { Banner } from "../components/Banner.jsx";
import Downloadus from "../components/Downloadus.jsx";
import Contactus from "../components/Contactus.jsx";

export const Home = () => {
  return (
    <>
      {/* hero-section  */}
      <div className="hero-section">
        <div className="hero-container">
          <div className="heroSectionOne">
            <h1>
              Your AI Learning <br /> Companion for the <br /> Future
            </h1>
            <p id="hero-paragraph">
              Master WEAC/NECO exams, with an AI-powered tutor designed <br />{" "}
              for African students. Learn smarter, faster, and with confidence
              all in your phone.
            </p>
            <div className="hero-button">
              <div className="newConcept">
                <button id="demo">Watch Demo</button>
                <div>
                  <IoIosPlay className="play" />
                </div>
              </div>
            </div>
          </div>

          <div className="heroSectionTwo">
            <div className="circle"></div>
            <img src={heroImage} />
          </div>
        </div>
      </div>
      <div className="aside">
        <div className="aside-content">
          <p>Call for Subscription</p>
          <p>08103044943</p>
        </div>
      </div>
      <Downloadus />

      {/* services section */}
      <section className="services">
        <h1 id="services">Why Students Choose FuturePrep AI</h1>
        <div className="services-container">
          <div className="service-card">
            <div className="service-image">
              <img src={logoOne} />
            </div>

            <h4>Understand Faster</h4>

            <p>
              Ai gives instant, simple explanation for any question - no waiting
            </p>
          </div>
          <div className="service-card">
            <div className="service-image">
              <img src={logoTwo} />
            </div>

            <h4>Learn Smarter</h4>
            <p>
              Adaptive learning shows your weak topics, and recommends what to
              study next
            </p>
          </div>
          <div className="service-card" id="newcard">
            <div className="service-image">
              <img src={logoThree} />
            </div>

            <h4>Pay Less, Get More</h4>
            <p>Get the power of a private lesson teacher the go.</p>
          </div>

          <div className="service-card" id="newcard">
            <div className="service-image">
              <img src={logoThree} />
            </div>

            <h4>Learn Anywhere</h4>
            <p>Mobile-first design so you can study on the go.</p>
          </div>
        </div>
        {/* <div className="feature">
          <button>More About Our Features</button>
        </div> */}
      </section>
      {/* what we do section */}
      <section className="whatWeDo-section">
        <h1 id="whatwedo-heading">How it Works</h1>
        <p id="whatwedo-paragraph">Learning with FuturePrep AI is Simple</p>
        <div className="whatWeDo-Container">
          {whatWeDo.map((element) => {
            return (
              <div key={element.id} className="weDo-card">
                <img src={element.img} alt="" />
                <h4>{element.title}</h4>
                <p id="paragraph">{element.text}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* value proposition/Benefits */}
      <div className="value-section">
        <h1>Value Proposition / Benefits</h1>
        <div className="value-container">
          <div className="valueSectionOne">
            <h2>Personalized AI Learning</h2>
            <p>
              Every student learns differently—FuturePrep AI adapts to your
              pace,strengths, and gaps so you never feel left behind. Whether
              you’re struggling in math or excelling in English, the platform
              meets <br /> where you are.
            </p>
          </div>
          <div className="valueSectionTwo">
            <img src={valueImage} alt="" />
          </div>
        </div>
      </div>
      {/* Exam/Skill Readliness */}
      <div className="skill-section">
        <div className="skill-container">
          <div className="skillSectionOne">
            <img src={skillImage} alt="" />
          </div>

          <div className="skillSectionTwo">
            <h2>Exam/Skill Readliness</h2>
            <p>
              From WAEC and JAMB to future-focused skills,FuturePrep AI prepares
              you step by step with mock tests,practice questions, and real-time
              feedback.You don't just memorize — you understand and retain
              knowledge for exams and life
            </p>
          </div>
        </div>
      </div>
      {/* Demo section */}
      {/* <section className="demo-section">
        <h1 id="demoHeading">Demo</h1>
        <div className="demoContainer">
          <div className="demoContainerOne">
            <h2>See FuturePrep Ai in Actions </h2>
            <p>
              Watch how our AI helps students solve real exam <br />
              questions in second
            </p>
          </div>
          <div className="demo-video">
            <video src="../" alt="futurePrep Ai">
              Content
            </video>
          </div>
        </div>
      </section> */}
      <Testimonial />
      <Faq />
      <Banner />
      <Contactus />
    </>
  );
};
