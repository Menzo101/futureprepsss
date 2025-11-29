import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <div className="logo">
          <h1>
            FuturePrep <span id="highlightOne">AI</span>{" "}
          </h1>
        </div>
        <nav className={open ? "mobile-nav active" : "mobile-nav"}>
          <ul className="nav-links">
            <li>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="links">
                Buy Subscription
                <br />
              </Link>
            </li>
            <li>
              <Link to="/ai-tutor" className="links">
                Contact-Us 081 0304 4943
              </Link>
            </li>

            {/* <li>
              <Link to="/about-us" className="links">
                About Us
              </Link>
            </li> */}

            <div className="header-btn">
              <li>
                <Link to="/sign-up" id="signup">
                  Try For Free
                </Link>
              </li>
            </div>
          </ul>
        </nav>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          <span className={open ? "bar bar1 open" : "bar bar1"}>X</span>
          {/* <span className={open ? "bar bar2 open" : "bar bar2"}>X</span>
          <span className={open ? "bar bar3 open" : "bar bar3"}>X</span> */}
        </button>
      </header>
    </>
  );
};
