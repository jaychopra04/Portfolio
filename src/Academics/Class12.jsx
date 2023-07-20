import React from "react";

function Class12() {
  return (
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
          padding: 0,
        }}
      >
        <div className="container" style={{ marginTop: 20 }}>
          <div
            className="jumbotron"
            style={{
              background: "rgba(255, 255, 255, 0)",
              textAlign: "center",
              fontSize: 18,
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            <h1
              data-aos="fade"
              data-aos-duration={750}
              style={{
                color: "var(--white)",
                fontFamily: '"Kaushan Script", serif',
                marginBottom: 40,
              }}
            >
              12th Score Card
            </h1>
            <ul className="list-group">
              <li
                className="list-group-item"
                data-aos="zoom-out"
                data-aos-duration={1000}
                data-aos-delay={50}
                style={{
                  marginBottom: 10,
                  borderRight: "10px groove var(--pink)",
                  borderBottom: "10px groove var(--pink)",
                }}
              >
                <span style={{ fontSize: 20 }}>
                  <strong>PHYSICS&nbsp; --&nbsp; 93</strong>
                </span>
              </li>
              <li
                className="list-group-item"
                data-aos="zoom-out"
                data-aos-duration={1000}
                data-aos-delay={50}
                style={{
                  marginBottom: 10,
                  borderRight: "10px groove var(--pink)",
                  borderBottom: "10px groove var(--pink)",
                }}
              >
                <span style={{ fontSize: 20 }}>
                  <strong>MATHEMATICS&nbsp; --&nbsp; 87</strong>
                </span>
              </li>
              <li
                className="list-group-item"
                data-aos="zoom-out"
                data-aos-duration={1000}
                data-aos-delay={50}
                style={{
                  marginBottom: 10,
                  borderRight: "10px groove var(--pink)",
                  borderBottom: "10px groove var(--pink)",
                }}
              >
                <span style={{ fontSize: "20PX" }}>
                  <strong>CHEMISTRY&nbsp; --&nbsp; 92</strong>
                </span>
              </li>
              <li
                className="list-group-item"
                data-aos="zoom-out"
                data-aos-duration={1000}
                data-aos-delay={50}
                style={{
                  marginBottom: 10,
                  borderRight: "10px groove var(--pink)",
                  borderBottom: "10px groove var(--pink)",
                }}
              >
                <span style={{ fontSize: "20PX" }}>
                  <strong>HINDI&nbsp; --&nbsp; 87</strong>
                </span>
              </li>
              <li
                className="list-group-item"
                data-aos="zoom-out"
                data-aos-duration={1000}
                data-aos-delay={50}
                style={{
                  marginBottom: 10,
                  borderRight: "10px groove var(--pink)",
                  borderBottom: "10px groove var(--pink)",
                }}
              >
                <span style={{ fontSize: "20PX" }}>
                  <strong>ENGLISH&nbsp; --&nbsp; 86</strong>
                </span>
              </li>
            </ul>
            <p />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class12;
