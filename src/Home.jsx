import React from "react";
import { Link } from "react-router-dom";
//import { Link } from 'react-scroll';

function Home() {
  function setTextAnimation(
    delay,
    duration,
    strokeWidth,
    timingFunction,
    strokeColor,
    repeat
  ) {
    let paths = document.querySelectorAll("path");
    let mode = repeat ? "infinite" : "forwards";
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const length = path.getTotalLength();
      path.style["stroke-dashoffset"] = `${length}px`;
      path.style["stroke-dasharray"] = `${length}px`;
      path.style["strokeWidth"] = `${strokeWidth}px`;
      path.style["stroke"] = `${strokeColor}`;
      path.style[
        "animation"
      ] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
      path.style["animation-delay"] = `${i * delay}s`;
    }
  }
  setTextAnimation(0.1, 2.9, 0.6, "linear", "#ffffff", true);

  return (
    <div
      class="flex-grow-0 flex-shrink-0"
      id="page-top"
      style={{ background: "rgb(0,0,0)" }}
    >
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
            style={{ fontSize: "25PX", color: "#FFFFFF" }}
            href="https://jaychopra.in"
            aria-label="Jay Chopra"
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
            <i className="fa fa-bars" style={{ color: "rgb(246,250,255)" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul
              className="navbar-nav ml-auto text-uppercase"
              style={{ fontSize: 16 }}
            >
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#achievements">
                  Achievements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#co-curricular">
                  C0-curricular
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="Resume"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
              <Link to="TicTacToe">
              <li className="nav-item" >
              <a className="nav-link js-scroll-trigger">
                  X & O
                </a>
                </li>
                </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div id="particles-js" />
      <section style={{ paddingBottom: 0, paddingTop: 0 }} />
      <div style={{ background: "#000000", marginTop: 62 }}>
        <div className="container py-4 py-xl-5">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div
                data-aos="zoom-in"
                data-aos-duration={1000}
                className="p-xl-5 m-xl-5"
              >
                <img
                  className="img-fluid w-100 fit-cover"
                  style={{
                    minHeight: 300,
                    borderRadius: 30,
                    borderStyle: "none",
                  }}
                  src="assets/img/jaychopra.webp"
                  alt="jaychopra"
                />
              </div>
            </div>
            <div className="col-md-6 d-md-flex align-items-md-center mb-4">
              <div className="text-center" style={{ maxWidth: 350 }}>
                <h1
                  className="display-4 font-weight-bold"
                  data-aos="fade-down"
                  data-aos-duration={1000}
                  style={{
                    fontFamily: '"Kaushan Script", serif',
                    color: "rgb(255,255,255)",
                    paddingTop: 30,
                  }}
                >
                  About
                </h1>
                <p
                  className="font-weight-normal my-3"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  style={{
                    color: "rgb(255,255,255)",
                    fontSize: 20,
                    paddingTop: 10,
                    paddingBottom: 20,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  I am an Engineer Specialized in Information &amp;
                  Communication Technology. I code in C#, JavaScript &amp; Python. I am a Cloud Enthusiast and always passionate about Financial Markets.
                </p>
                <ul
                  className="list-inline social-buttons"
                  style={{ textAlign: "center" }}
                >
                  <li className="list-inline-item">
                    <a
                      className="bg-secondary border rounded-0"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      data-aos-delay={100}
                      href="mailto:jaychopra.in@icloud.com"
                      style={{ fontSize: 30, marginRight: 5 }}
                      aria-label="mail"
                      target="_blank"
                    >
                      <i
                        className="icon ion-android-mail"
                        style={{ textAlign: "center", fontSize: 30 }}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="bg-secondary border rounded-0"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      data-aos-delay={150}
                      href="https://www.cloudskillsboost.google/public_profiles/3bb30461-2dc5-44f2-9e1e-69bc3785a59b"
                      style={{ fontSize: 30, marginRight: 5 }}
                      aria-label="gcp"
                      target="_blank"
                    >
                      <i
                        className="icon ion-android-cloud"
                        style={{ textAlign: "center", fontSize: 30 }}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="bg-secondary border rounded-0"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      data-aos-delay={200}
                      href="https://scholar.google.com/citations?hl=en&user=-47lZN4AAAAJ"
                      style={{ fontSize: 30, marginRight: 5 }}
                      aria-label="gcp"
                      target="_blank"
                    >
                      <i
                        className="icon ion-university"
                        style={{ textAlign: "center", fontSize: 30 }}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="bg-secondary border rounded-0"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      data-aos-delay={250}
                      style={{ fontSize: 30 }}
                      href="https://github.com/jaychopra04"
                      aria-label="git"
                      target="_blank"
                    >
                      <i
                        className="icon ion-social-github"
                        style={{ fontSize: 30 }}
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="bg-secondary border rounded-0"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                      data-aos-delay={300}
                      href="http://www.linkedin.com/in/Jay--chopra"
                      style={{ fontSize: 30, marginLeft: 5 }}
                      aria-label="linkedin"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center" style={{ background: "#000000" }}>
        <div style={{ paddingTop: 20 }}>
          <i
            className="fas fa-chess"
            style={{ fontSize: 250, color: "#bcbcbc" }}
          />
        </div>
        <div style={{ paddingTop: 20 }}>
          <a
            className="btn btn-primary font-weight-light"
            role="button"
            data-aos="flip-down"
            data-aos-duration={1000}
            style={{
              background: "repeating-linear-gradient(-86deg, #6e00c5, #061873)",
              fontSize: 26,
              paddingRight: 25,
              paddingLeft: 25,
              borderStyle: "solid",
              borderColor: "rgba(255,255,255,0.66)",
            }}
            href="https://friend.chess.com/YzfW"
            target="_blank"
          >
            Let's Play !!
          </a>
        </div>
      </div>
      <section
        id="education"
        style={{
          textAlign: "center",
          background: "linear-gradient(#000022 9%, #007981 100%)",
          paddingTop: "0PX",
          marginTop: "100PX",
        }}
      >
        <div
          className="container-fluid"
          style={{ background: "linear-gradient(#9d9d9d 0%, #ffffff)" }}
        >
          <h1
            style={{
              color: "#000000",
              paddingTop: 20,
              paddingBottom: 20,
              textShadow: "-2px 0px 0px #595959",
            }}
          >
            &lt;EDUCATION&gt;
          </h1>
        </div>
        <div className="container" style={{ marginTop: 32 }}>
          <div
            className="jumbotron"
            data-aos="fade"
            data-aos-duration={750}
            style={{
              fontSize: 16,
              background: "rgba(255,255,255,0.2)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            <h1
              style={{
                marginTop: 5,
                marginBottom: 20,
                fontFamily: '"Kaushan Script", serif',
                color: "var(--white)",
              }}
            >
              CLASS-10
            </h1>
            <p
              style={{
                fontSize: 16,
                fontFamily: "Montserrat, sans-serif",
                color: "var(--white)",
              }}
            >
              I pursued my class 10 from Seventh Day Adventist School in 2017 ||
              Obtained 91% in ICSE Board.
            </p>
            <p>
              <Link to="Class-10">
                <a
                  className="btn btn-light font-weight-lighter"
                  role="button"
                  style={{
                    borderColor: "var(--white)",
                    marginTop: 15,
                    fontSize: 18,
                  }}
                >
                  View SSC
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="container">
          <div
            className="jumbotron"
            data-aos="fade"
            data-aos-duration={750}
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            <h1
              style={{
                color: "var(--white)",
                marginTop: 5,
                marginBottom: 20,
                fontFamily: '"Kaushan Script", serif',
              }}
            >
              CLASS-12
            </h1>
            <p
              style={{
                color: "var(--light)",
                fontSize: 16,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Completed class 12 from SDA School in 2019 || Obtained 90.67% in
              ISC Board.
            </p>
            <p>
              <Link to="/Class-12">
              <a
                className="btn btn-light font-weight-lighter"
                role="button"
                style={{
                  borderColor: "var(--light)",
                  borderTopColor: "rgb(255,",
                  borderRightColor: "255,",
                  borderBottomColor: "255)",
                  borderLeftColor: "255,",
                  marginTop: 15,
                  fontSize: 18,
                }}
                
              >
                View HSC
              </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="container">
          <div
            className="jumbotron"
            data-aos="fade"
            data-aos-duration={750}
            style={{
              fontSize: 16,
              background: "rgba(255,255,255,0.2)",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            <h1
              style={{
                color: "var(--light)",
                marginTop: 5,
                marginBottom: 20,
                fontFamily: '"Kaushan Script", serif',
              }}
            >
              B-Tech
            </h1>
            <p
              style={{
                color: "var(--light)",
                marginBottom: 30,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              I am Pursuing B-Tech in Information &amp; Communication Technology
              [ICT] from PDEU.&nbsp;
            </p>
            <ul className="list-group">
              <li
                className="list-group-item"
                data-aos="zoom-in-left"
                data-aos-duration={1000}
                style={{
                  marginTop: 4,
                  marginBottom: 4,
                  borderRightWidth: 15,
                  borderRightColor: "var(--orange)",
                  borderLeftWidth: 15,
                  borderLeftColor: "var(--orange)",
                }}
              >
                <span>Grade : 9.7 CGPA</span>
              </li>
              <li
                className="list-group-item"
                data-aos="zoom-in-left"
                data-aos-duration={1000}
                style={{
                  marginTop: 4,
                  marginBottom: 4,
                  borderRightWidth: 15,
                  borderRightColor: "var(--orange)",
                  borderLeftWidth: 15,
                  borderLeftColor: "var(--orange)",
                }}
              >
                <span>Recognised among top 5 meritorious student in ICT</span>
              </li>
              <li
                className="list-group-item"
                data-aos="zoom-in-left"
                data-aos-duration={1000}
                style={{
                  marginTop: 4,
                  marginBottom: 4,
                  borderRightWidth: 15,
                  borderRightColor: "var(--orange)",
                  borderLeftWidth: 15,
                  borderLeftColor: "var(--orange)",
                }}
              >
                <span>Felicitated at the University&nbsp;</span>
              </li>
              <li
                className="list-group-item"
                data-aos="zoom-in-left"
                data-aos-duration={1000}
                style={{
                  marginTop: 4,
                  marginBottom: 4,
                  borderRightWidth: 15,
                  borderRightColor: "var(--orange)",
                  borderLeftWidth: 15,
                  borderLeftColor: "var(--orange)",
                }}
              >
                <span>C# &amp; Py Programmer&nbsp;</span>
              </li>
              <li
                className="list-group-item"
                data-aos="zoom-in-left"
                data-aos-duration={1000}
                style={{
                  marginTop: 4,
                  marginBottom: 4,
                  borderRightWidth: 15,
                  borderRightColor: "var(--orange)",
                  borderLeftWidth: 15,
                  borderLeftColor: "var(--orange)",
                }}
              >
                <span>Web Developer</span>
              </li>
            </ul>
            <p>
              <Link to="/Academics">
              <a
                className="btn btn-light font-weight-lighter"
                role="button"
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={100}
                style={{
                  borderColor: "var(--white)",
                  marginTop: 30,
                  fontSize: 18,
                }}
                
              >
                <i className="fa fa-university" style={{ marginRight: 10 }} />
                View more
              </a>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <div style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div style={{ padding: "4vw" }}>
                <img
                  className="img-fluid"
                  src="assets/img/Cheggimg.webp"
                  alt="chegglogo"
                  style={{ padding: 30 }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div style={{ textAlign: "center", padding: "5vw" }}>
                <h1 style={{ fontSize: 22 }}>Managed Network Expert</h1>
                <p style={{ fontSize: 15 }}>
                  Subject Matter Expert in Compurer Science
                </p>
                <div>
                  <button
                    className="btn btn-dark font-weight-lighter"
                    type="button"
                    data-target="#modal-1"
                    data-toggle="modal"
                    style={{ fontSize: 20 }}
                  >
                    VIEW
                  </button>
                </div>
                <div
                  className="modal fade"
                  role="dialog"
                  tabIndex={-1}
                  id="modal-1"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title"
                          style={{ fontFamily: "Alatsi, sans-serif" }}
                        >
                          Chegg India Pvt Ltd
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <img
                          className="img-fluid"
                          src="assets/img/cheggletter.webp"
                          alt="cheggletter"
                        />
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-light btn-sm"
                          type="button"
                          data-dismiss="modal"
                          style={{ letterSpacing: 1, fontSize: 15 }}
                        >
                          CLOSE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          minHeight: 1,
          border: "0.5px dashed rgb(159,159,159)",
          background: "#ffffff",
        }}
      />
      <div style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img
                  className="img-fluid"
                  src="assets/img/BISAG-img.webp"
                  alt="BisagLogo"
                  style={{ padding: 30 }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center" style={{ padding: "5vw" }}>
                <h1 style={{ fontSize: 22 }}>Front-End Developer</h1>
                <p style={{ fontSize: 15 }}>
                  Developed Front-End for the Platform NoteBucket using React
                  Technology
                </p>
                <div>
                  <button
                    className="btn btn-dark font-weight-lighter"
                    type="button"
                    data-target="#modal-2"
                    data-toggle="modal"
                    style={{ fontSize: 20 }}
                  >
                    VIEW
                  </button>
                </div>
                <div
                  className="modal fade"
                  role="dialog"
                  tabIndex={-1}
                  id="modal-2"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4
                          className="modal-title"
                          style={{ fontFamily: "Alatsi, sans-serif" }}
                        >
                          BISAG-N
                        </h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <img
                          className="img-fluid"
                          src="assets/img/notebucket.webp"
                          alt="notebucketlandingpage"
                        />
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-light btn-sm"
                          type="button"
                          data-dismiss="modal"
                          style={{ fontSize: 15, letterSpacing: 1 }}
                        >
                          CLOSE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          minHeight: 1,
          border: "0.5px dashed rgb(159,159,159)",
          background: "#ffffff",
        }}
      />
      <div style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img
                  className="img-fluid"
                  src="assets/img/capspire.webp"
                  alt="BisagLogo"
                  style={{ padding: 40 }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center" style={{ padding: "5vw" }}>
                <h1 style={{ fontSize: 22 }}>CTRM Associate</h1>
                <p style={{ fontSize: 15 }}>
                  C/ETRM Foundational System &amp; Business Solution Development
                </p>
                <div>
                  <button
                    className="btn btn-dark font-weight-lighter"
                    type="button"
                    style={{ fontSize: 20 }}
                    data-toggle="modal"
                    data-target="#modal-3"
                  >
                    VIEW
                  </button>
                </div>
                <div
                  className="modal fade"
                  role="dialog"
                  tabIndex={-1}
                  id="modal-3"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4
                          className="modal-title"
                          style={{ fontFamily: "Alatsi, sans-serif" }}
                        >
                          CapSpire
                        </h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <img
                          className="img-fluid"
                          src="assets/img/capspire-modal.webp"
                          alt="notebucketlandingpage"
                        />
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-light btn-sm"
                          type="button"
                          data-dismiss="modal"
                          style={{ fontSize: 15, letterSpacing: 1 }}
                        >
                          CLOSE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        id="achievements"
        style={{ paddingTop: 50, paddingBottom: 50, background: "#111111" }}
      >
        <div
          className="container-fluid"
          style={{ background: "linear-gradient(#626262 0%, #ffffff 100%)" }}
        >
          <h1
            style={{
              color: "#000000",
              paddingTop: 20,
              paddingBottom: 20,
              fontSize: "32PX",
              textAlign: "center",
              textShadow: "-2px 0px 0px #595959",
            }}
          >
            &lt;ACHIEVEMENTS&gt;
          </h1>
        </div>
        <div className="container" style={{ marginTop: "32PX" }}>
          <div
            className="jumbotron"
            style={{
              textAlign: "center",
              background:
                "linear-gradient(-56deg, #1700a4 0%, rgb(112,0,108) 53%, #bc0531 100%), var(--gray-dark)",
              fontSize: 16,
            }}
          >
            <h2
              style={{
                color: "var(--light)",
                fontFamily: '"Kaushan Script", serif',
              }}
            >
              MY COURSES
            </h2>
            <p
              data-aos="fade"
              data-aos-duration={1000}
              data-aos-delay={50}
              style={{
                textAlign: "center",
                color: "var(--light)",
                paddingTop: 20,
                paddingBottom: 30,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              I have organized and presented the professional courses I have
              completed.
            </p>
            <div className="d-flex justify-content-around">
              <div>
                <img
                  className="img-fluid"
                  data-aos="zoom-out"
                  data-aos-duration={1200}
                  src="assets/img/Html-css-js-COURSERA.webp"
                  style={{ padding: 5, borderRadius: 10 }}
                  alt="co1"
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  data-aos="zoom-out"
                  data-aos-duration={900}
                  src="assets/img/HTML5-COURSERA.webp"
                  style={{ padding: 5, borderRadius: 10 }}
                  alt="co2"
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  data-aos="zoom-out"
                  data-aos-duration={1200}
                  src="assets/img/Trading-Basics-COURSERA.webp"
                  style={{ padding: 5, borderRadius: 10 }}
                  alt="co3"
                />
              </div>
            </div>
            <p style={{ marginTop: 20 }}>
              <Link to="/Courses">
                <a
                  className="btn btn-light text-uppercase font-weight-light"
                  role="button"
                  data-aos="fade"
                  data-aos-duration={1000}
                  data-aos-delay={50}
                  style={{
                    borderColor: "var(--white)",
                    borderTopColor: "rgb(255,",
                    borderRightColor: "255,",
                    borderBottomColor: "255)",
                    borderLeftColor: "255,",
                    fontSize: 18,
                  }}
                >
                  <i
                    className="fa fa-graduation-cap"
                    style={{ marginRight: 10 }}
                  />
                  Courses
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="container">
          <div
            className="jumbotron text-center"
            style={{
              background:
                "linear-gradient(-56deg, #bc0531, rgb(112,0,108) 53%, #1700a4), var(--gray-dark)",
              fontSize: 16,
            }}
          >
            <h2
              style={{
                color: "var(--light)",
                fontFamily: '"Kaushan Script", serif',
              }}
            >
              CERTIFICATES
            </h2>
            <p
              data-aos="fade"
              data-aos-duration={1000}
              style={{
                color: "var(--light)",
                textAlign: "center",
                paddingTop: 20,
                paddingBottom: 30,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              The page showcases all of my certifications highlighting the
              recognition I have received.
            </p>
            <div className="d-flex">
              <div>
                <img
                  className="img-fluid"
                  data-aos="zoom-out"
                  data-aos-duration={1200}
                  src="assets/img/Python-Programming-COURSERA.webp"
                  style={{ padding: 5, borderRadius: 10 }}
                  alt="c1"
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  data-aos="zoom-out"
                  data-aos-duration={900}
                  src="assets/img/Financial-Markets-BSE.webp"
                  style={{ padding: 5, borderRadius: 10 }}
                  alt="c2"
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  data-aos="zoom-out"
                  data-aos-duration={1200}
                  src="assets/img/DesignThinkingEnergySector-PDEU-IIC.webp"
                  style={{ padding: 5, borderRadius: 10 }}
                  alt="c3"
                />
              </div>
            </div>
            <p style={{ marginTop: 20 }}>
              <Link to="/Certifications">
                <a
                  className="btn btn-light text-uppercase font-weight-light"
                  role="button"
                  data-aos="fade"
                  data-aos-duration={1000}
                  data-aos-delay={50}
                
                  style={{ borderColor: "var(--light)", fontSize: 18 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icon-tabler-certificate"
                    style={{ marginRight: 10 }}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={15} cy={15} r={3} />
                    <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                    <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                    <line x1={6} y1={9} x2={18} y2={9} />
                    <line x1={6} y1={12} x2={9} y2={12} />
                    <line x1={6} y1={15} x2={8} y2={15} />
                  </svg>
                  Certificates
                </a>
              </Link>
            </p>
          </div>
          <div
            className="jumbotron text-center"
            style={{
              background:
                "linear-gradient(-56deg, #1700a4 0%, rgb(112,0,108) 53%, #bc0531 100%), var(--gray-dark)",
              fontSize: 16,
            }}
          >
            <h2
              style={{
                color: "var(--light)",
                fontFamily: '"Kaushan Script", serif',
              }}
            >
              BADGES
            </h2>
            <p
              data-aos="fade"
              data-aos-duration={1000}
              style={{
                color: "var(--light)",
                textAlign: "center",
                paddingTop: 20,
                paddingBottom: 30,
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              The page comprises of all my Badges achieved in last two years.
              Click below to view more.
            </p>
            <div className="d-flex justify-content-around">
              <div>
                <img
                  className="img-fluid"
                  data-aos="zoom-out"
                  data-aos-duration={1200}
                  src="assets/img/insights-from-data-with-BigQuery.webp"
                  style={{ padding: 5 }}
                  alt="b1"
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  data-aos="zoom-out"
                  data-aos-duration={900}
                  src="assets/img/Integrate-with-Machine-Learning-APIs.webp"
                  style={{ padding: 5 }}
                  alt="b2"
                />
              </div>
              <div>
                <img
                  className="img-fluid"
                  data-aos="zoom-out"
                  data-aos-duration={1200}
                  src="assets/img/Deploy-and-Manage-Cloud-Environments-with-Google-Cloud.webp"
                  style={{ padding: 5 }}
                  alt="b3"
                />
              </div>
            </div>
            <p style={{ marginTop: 20 }}>
              <Link to="/Badges">
                <a
                  className="btn btn-light text-uppercase font-weight-light"
                  role="button"
                  data-aos="fade"
                  data-aos-duration={1000}
                  data-aos-delay={50}
                  style={{ borderColor: "var(--light)", fontSize: 18 }}
                >
                  <i className="icon-badge" style={{ marginRight: 10 }} />
                  Badges
                </a>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section
        id="co-curricular"
        style={{ paddingTop: 50, paddingBottom: 50, background: "#111111" }}
      >
        <div
          className="container-fluid"
          style={{ background: "linear-gradient(#9d9d9d 0%, #ffffff)" }}
        >
          <h1
            style={{
              color: "#000000",
              paddingTop: 20,
              paddingBottom: 20,
              fontSize: "32PX",
              textAlign: "center",
              textShadow: "-2px 0px 0px #595959",
            }}
          >
            <strong>CO-CURRICULAR ACTIVITIES</strong>
          </h1>
        </div>
        <div className="container">
          <div className="row">
          <div 
                className="jumbotron"
                style={{
                  textAlign: "center",
                  color: "var(--light)",
                  background:
                    "linear-gradient(#4b0332 0%, #b40f37 100%), var(--gray-dark)",
                  fontSize: 16,
                  margin : 30,
                
                }}
              >
                <h2
                  style={{
                    fontFamily: '"Kaushan Script", serif',
                    marginTop: 5,
                    fontSize: 40,
                  }}
                >
                  RESEARCH PAPER
                </h2>
                <p style={{ textAlign: "center", marginBottom: 0 }}>
                  <br />
                  The research paper Advent of Big Data Technology in
                  environment and water management sector has been accepted in
                  Environmental Science and Pollution, Springer. This Journal
                  has an Impact Factor of 5.190. The paper was accepted on April
                  13, 2021 and got published on April 27, 2021. It took around a
                  year of continuous work to achieve.
                  <br />
                  <br />
                </p>
                <p className="d-flex justify-content-center">
                  <a
                    className="btn btn-light btn-block font-weight-light cbt"
                    role="button"
                    id="btn"
                    style={{
                      borderColor: "var(--white)",
                      borderLeftColor: "var(--white)",
                      fontSize: 18,
                      padding: 6,
                      backgroundColor: "#ffffff",
                      color: "rgb(0,0,0)",
                    }}
                    href="https://link.springer.com/article/10.1007/s11356-021-14017-y"
                  >
                    <i
                      className="icon ion-ios-paper"
                      style={{ marginRight: 10 }}
                    />
                    Publication
                  </a>
                  <a
                    className="btn btn-light btn-block font-weight-light"
                    role="button"
                    style={{
                      borderColor: "var(--white)",
                      borderLeftColor: "var(--white)",
                      fontSize: 18,
                      padding: 6,
                      marginTop: 0,
                      marginLeft: 5,
                    }}
                    href="https://sot.pdpu.ac.in/downloads/ICT%20Newsletter%20final%201.pdf"
                  >
                    <i
                      className="icon ion-ios-paper-outline"
                      style={{ marginRight: 10 }}
                    />
                    Newsletter
                  </a>
                </p>
              </div>
         

          

          </div>
        </div>
      </section>
      <div
        data-bss-parallax-bg="true"
        style={{
          height: "100vh",
          background: "repeating-linear-gradient(black, rgb(37,37,37) 4%)",
        }}
      >
        <div style={{ height: "35vh" }} />
        <p
          data-aos="zoom-in-up"
          data-aos-duration={1000}
          style={{
            textAlign: "center",
            fontSize: "9vw",
            fontFamily: '"Allerta Stencil", sans-serif',
            color: "rgb(255,255,255)",
          }}
        >
          MISCELLANEOUS
        </p>
        <div
          data-aos="zoom-in-up"
          data-aos-duration={1000}
          data-aos-delay={200}
          style={{
            boxShadow: "0px 0px 0px 1px var(--blue)",
            marginRight: "9vw",
            marginLeft: "9vw",
          }}
        />
      </div>
      <div
        style={{
          padding: "25PX",
          background: "linear-gradient(#990b02, #923cb5), var(--pink)",
        }}
      >
        <div
          className="container"
          style={{
            background: "Rgba(255, 255, 255, 0.25)",
            borderRadius: "15PX",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
          }}
        >
          <div
            className="row row-cols-1 row-cols-xl-2"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              borderRadius: "10PX",
              padding: "20PX",
            }}
          >
            <div className="col-md-6" style={{ padding: "15PX" }}>
              <div
                data-aos="zoom-in"
                data-aos-duration={1250}
                data-aos-delay={100}
              >
                <img
                  className="img-fluid"
                  src="assets/img/Scholarship.webp"
                  style={{ borderRadius: "5PX", boxShadow: "0px 0px 10px 1px" }}
                  alt="Scholarship"
                />
              </div>
            </div>
            <div
              className="col-md-6"
              style={{ textAlign: "center", padding: 15 }}
            >
              <h3
                data-aos="fade"
                data-aos-duration={1000}
                style={{ color: "rgb(255,255,255)", marginBottom: "20PX" }}
              >
                RECIPIENT OF MERIT SCHOLARSHIP
              </h3>
              <div
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={100}
                style={{
                  borderWidth: "2.5px",
                  borderColor: "rgb(252,252,252)",
                  borderBottomStyle: "solid",
                }}
              />
              <p
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={200}
                style={{
                  marginTop: 20,
                  color: "rgb(255,255,255)",
                  fontSize: 15,
                  textAlign: "center",
                  letterSpacing: "0.5px",
                }}
              >
                I am a recipient of Merit Cum Means Scholarship which is awarded
                by Pandit Deendayal Energy University to Top 7 students from
                entire batch on the basis of Academic Achievements.
              </p>
              <div style={{ padding: "20PX" }}>
                <a
                  className="btn btn-light btn-sm text-uppercase buttons"
                  role="button"
                  data-aos="fade"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                  style={{
                    fontSize: 15,
                    background: "rgba(0,0,0,0)",
                    fontWeight: 400,
                    paddingRight: 15,
                    paddingLeft: 15,
                  }}
                  href="https://drive.google.com/drive/folders/1JcfYivJM47JdL2vyc-WeUC0mdicy5cFO?usp=sharing"
                  target="_blank"
                >
                  View more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "25PX",
          background: "linear-gradient(black, #b76a22), var(--pink)",
        }}
      >
        <div
          className="container"
          style={{
            background: "Rgba(255, 255, 255, 0.25)",
            borderRadius: "15PX",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
          }}
        >
          <h1
            className="font-weight-normal text-center"
            style={{
              marginTop: 30,
              color: "rgb(255,255,255)",
              marginBottom: 30,
            }}
          >
            NEWSPAPER STORIES
          </h1>
          <div
            className="row row-cols-1 row-cols-xl-2"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              borderRadius: "10PX",
              padding: "20PX",
            }}
          >
            <div className="col-md-6" style={{ padding: "15PX" }}>
              <div
                data-aos="zoom-in"
                data-aos-duration={1250}
                data-aos-delay={100}
              >
                <img
                  className="img-fluid"
                  src="assets/img/TejGujarati-NewspaperStory.webp"
                  style={{ borderRadius: "5PX", boxShadow: "0px 0px 10px 1px" }}
                  alt="GujaratSamachar-NewspaperStory"
                />
              </div>
            </div>
            <div
              className="col-md-6"
              style={{ textAlign: "center", padding: 15 }}
            >
              <h2
                data-aos="fade"
                data-aos-duration={1000}
                style={{ color: "rgb(255,255,255)", marginBottom: "20PX" }}
              >
                STORY-1
              </h2>
              <div
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={100}
                style={{
                  borderWidth: "2.5px",
                  borderColor: "rgb(252,252,252)",
                  borderBottomStyle: "solid",
                }}
              />
              <p
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={200}
                style={{
                  marginTop: 20,
                  color: "rgb(255,255,255)",
                  fontSize: 15,
                  textAlign: "center",
                  letterSpacing: "0.5px",
                }}
              >
                <strong>Tej Gujarati</strong>, state based newspaper, covered a
                news story on one of my publications that was selected in
                Springer in April 2021, on Advent of Big data Technology in
                Environment and Water Management Sector.
              </p>
              <div style={{ padding: "20PX" }}>
                <a
                  className="btn btn-light btn-sm text-uppercase buttons"
                  role="button"
                  data-aos="fade"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                  style={{
                    fontSize: 15,
                    background: "rgba(0,0,0,0)",
                    fontWeight: 400,
                    paddingRight: 15,
                    paddingLeft: 15,
                  }}
                  href="https://tejgujarati.com/?p=79149"
                  target="_blank"
                >
                  View more
                </a>
              </div>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-xl-2"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              padding: "20PX",
              borderTopStyle: "dashed",
            }}
          >
            <div className="col-md-6" style={{ padding: "15PX" }}>
              <div
                data-aos="zoom-in"
                data-aos-duration={1250}
                data-aos-delay={100}
              >
                <img
                  className="img-fluid"
                  src="assets/img/GujaratSamachar-NewspaperStory.webp"
                  style={{ borderRadius: "5PX", boxShadow: "0px 0px 10px 1px" }}
                  alt="GujaratSamachar-NewspaperStory"
                />
              </div>
            </div>
            <div
              className="col-md-6"
              style={{ textAlign: "center", padding: 15 }}
            >
              <h2
                data-aos="fade"
                data-aos-duration={1000}
                style={{ color: "rgb(255,255,255)", marginBottom: "20PX" }}
              >
                STORY-2
              </h2>
              <div
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={100}
                style={{
                  borderWidth: "2.5px",
                  borderColor: "rgb(252,252,252)",
                  borderBottomStyle: "solid",
                }}
              />
              <p
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={200}
                style={{
                  marginTop: 20,
                  color: "rgb(255,255,255)",
                  fontSize: 15,
                  textAlign: "center",
                  letterSpacing: "0.5px",
                }}
              >
                <strong>Gujarat Samachar</strong>, state based newspaper on 14th
                December 2022, covered a news story on one of my project Smart
                Database Management System for Green Building.
              </p>
              <div style={{ padding: "20PX" }}>
                <a
                  className="btn btn-light btn-sm text-uppercase buttons"
                  role="button"
                  data-aos="fade"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                  style={{
                    fontSize: 15,
                    background: "rgba(0,0,0,0)",
                    fontWeight: 400,
                    paddingRight: 15,
                    paddingLeft: 15,
                  }}
                  href="https://drive.google.com/file/d/1FAsZ_ag5U5VUMsa45_SvePVKC4pR3foP/view?usp=share_link"
                  target="_blank"
                >
                  View more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "25PX",
          background: "linear-gradient(#0d0841, #923cb5), var(--pink)",
        }}
      >
        <div
          className="container"
          style={{
            background: "Rgba(255, 255, 255, 0.25)",
            borderRadius: "15PX",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
          }}
        >
          <div
            className="row row-cols-1 row-cols-xl-2"
            style={{
              opacity: 1,
              filter: "blur(0px)",
              borderRadius: "10PX",
              padding: "20PX",
            }}
          >
            <div className="col-md-6" style={{ padding: "15PX" }}>
              <div
                data-aos="zoom-in"
                data-aos-duration={1250}
                data-aos-delay={100}
              >
                <img
                  className="img-fluid"
                  src="assets/img/UNIVERSITY%20FELICITATION.webp"
                  style={{ borderRadius: "5PX", boxShadow: "0px 0px 10px 1px" }}
                  alt="UNIVERSITY FELICITATION"
                />
              </div>
            </div>
            <div
              className="col-md-6"
              style={{ textAlign: "center", padding: 15 }}
            >
              <h2
                data-aos="fade"
                data-aos-duration={1000}
                style={{ color: "rgb(255,255,255)", marginBottom: "20PX" }}
              >
                UNIVERSITY FELICITATION
              </h2>
              <div
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={100}
                style={{
                  borderWidth: "2.5px",
                  borderColor: "rgb(252,252,252)",
                  borderBottomStyle: "solid",
                }}
              />
              <p
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={200}
                style={{
                  marginTop: 20,
                  color: "rgb(255,255,255)",
                  fontSize: 15,
                  textAlign: "center",
                  letterSpacing: "0.5px",
                }}
              >
                I was felicitated at my university by our director (director of
                SOT) for my academic performance (of 9.73 CGPA) by being one of
                the top 5 undergraduates in my entire batch!
              </p>
              <div style={{ padding: "20PX" }}>
                <a
                  className="btn btn-light btn-sm text-uppercase buttons"
                  role="button"
                  data-aos="fade"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                  style={{
                    fontSize: 15,
                    background: "rgba(0,0,0,0)",
                    fontWeight: 400,
                    paddingRight: 15,
                    paddingLeft: 15,
                  }}
                  href="https://drive.google.com/drive/folders/1LQwOrJFTStWKycsuFUia7L4M18aqVaNh?usp=share_link"
                  target="_blank"
                >
                  View more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
