import React from "react";
import { Link } from "react-router-dom";

function Nav_second() {
  return (
    <nav
      className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark"
      id="mainNav"
      style={{
        borderRadius: 0,
        background: "linear-gradient(rgba(68,68,68,0) 0%, black 100%)",
      }}
    >
      <div className="container-fluid">
        <Link to="/">
          <a
            className="navbar-brand"
            data-bss-hover-animate="pulse"
            style={{ fontSize: "25PX", color: "#ffffff" }}
          >Jay Chopra

          </a>
        </Link>
        <button
          data-toggle="collapse"
          data-target="#navbarResponsive"
          className="navbar-toggler text-body navbar-toggler-right"
          data-bss-hover-animate="flash"
          type="button"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ background: "rgba(255,255,255,0.28)" }}
        >
          <i className="fa fa-bars" style={{ color: "rgb(255,255,255)" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul
            className="navbar-nav ml-auto text-uppercase"
            style={{ fontSize: 16 }}
          >
            <li className="nav-item" />

            <Link to="/Academics">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger">ACADEMICS</a>
              </li>
            </Link>

            <Link to="/Badges">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger">BADGES</a>
              </li>
            </Link>

            <Link to="/Certifications">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger">CERTIFICATIONS</a>
              </li>
            </Link>

            <Link to="/Courses">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" to="/Courses">
                  COURSES
                </a>
              </li>
            </Link>

            <Link to="/Engineering-programs">
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  to="/Engineering-programs"
                >
                  MISCELLANEOUS
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav_second;
