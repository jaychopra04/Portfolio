import React from "react";

function Class10() {
  return (

    <div
      style={{
        padding: "25PX",
        background: "linear-gradient(#000022 0%, #007981 100%), var(--pink)",
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
        <div className="container" style={{ marginTop: 20 }}>
          <div
            className="jumbotron"
            style={{
              background: "rgba(255, 255, 255, 0)",
              textAlign: "center",
              fontSize: 18,
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
              10th Score Card
            </h1>
            <ul className="list-group">
              <li
                className="list-group-item"
                data-aos="zoom-in-left"
                data-aos-duration={1000}
                style={{
                  marginBottom: 10,
                  borderRight: "10px groove var(--pink)",
                  borderBottom: "10px groove var(--pink)",
                }}
              >
                <span style={{ fontSize: 20 }}>
                  <strong>MATHEMATICS&nbsp; --&nbsp; 92</strong>
                </span>
              </li>
              <li
                className="list-group-item"
                data-aos="zoom-in-left"
                data-aos-duration={1000}
                style={{
                  marginBottom: 10,
                  borderRight: "10px groove var(--pink)",
                  borderBottom: "10px groove var(--pink)",
                }}
              >
                <span style={{ fontSize: 20 }}>
                  <strong>SCIENCE&nbsp; --&nbsp; 90</strong>
                </span>
              </li>
              <li
                className="list-group-item"
                data-aos="zoom-in-left"
                data-aos-duration={1000}
                style={{
                  marginBottom: 10,
                  borderRight: "10px groove var(--pink)",
                  borderBottom: "10px groove var(--pink)",
                }}
              >
                <span style={{ fontSize: "20PX" }}>
                  <strong>ENGLISH&nbsp; --&nbsp; 79</strong>
                </span>
              </li>
              <li
                className="list-group-item"
                data-aos="zoom-in-left"
                data-aos-duration={1000}
                style={{
                  marginBottom: 10,
                  borderRight: "10px groove var(--pink)",
                  borderBottom: "10px groove var(--pink)",
                }}
              >
                <span style={{ fontSize: "20PX" }}>
                  <strong>HIST &amp; GEO&nbsp; --&nbsp; 85</strong>
                  <br />
                </span>
              </li>
              <li
                className="list-group-item"
                data-aos="zoom-in-left"
                data-aos-duration={1000}
                style={{
                  marginBottom: 10,
                  borderRight: "10px groove var(--pink)",
                  borderBottom: "10px groove var(--pink)",
                }}
              >
                <span style={{ fontSize: "20PX" }}>
                  <strong>HINDI&nbsp; --&nbsp; 96</strong>
                </span>
              </li>
              <li
                className="list-group-item"
                data-aos="zoom-in-left"
                data-aos-duration={1000}
                style={{
                  marginBottom: 10,
                  borderRight: "10px groove var(--pink)",
                  borderBottom: "10px groove var(--pink)",
                }}
              >
                <span style={{ fontSize: "20PX" }}>
                  <strong>ECONOMIC APN&nbsp; --&nbsp; 95</strong>
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

export default Class10;
