import React from "react";

const Footer = () => {
  return (
    <footer
      className="shadow-sm"
      style={{
        background: "linear-gradient(black, #222222), #000000",
        paddingTop: 35,
        paddingBottom: 80,
        borderTopStyle: "dashed",
        borderTopColor: "var(--white)",
      }}
    >
      <h1
        className="display-4"
        style={{
          color: "rgb(255,255,255)",
          fontFamily: '"Kaushan Script", serif',
        }}
      >
        Jay Chopra
      </h1>
      <p
        style={{
          color: "#ffd600",
          fontStyle: "italic",
          fontSize: 9,
          marginTop: "-12px",
        }}
      >
        A CLASS OF ITS OWN
      </p>
      <div className="container">
        <div className="row">
          <div className="col" style={{ paddingTop: 15 }}>
            <ul
              className="list-inline social-buttons"
              style={{ textAlign: "center" }}
            >
              <li className="list-inline-item">
                <a
                  className="bg-secondary border rounded-0"
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
    </footer>
  );
};

export default Footer;
