import React from "react";

function CourseComponent({backdesign, src, imgborder, alt, headtext, paratext, buttonlink, buttontext}){
    return (
      <div
      style={{
        padding: 20,
        background:
          backdesign,
        borderTop: "1px dashed var(--blue)",
        borderBottom: "1px dashed var(--blue)"
      }}
    >
      <div
        className="container"
        style={{
          paddingTop: 30,
          paddingBottom: 30,
          background: "Rgba(255, 255, 255, 0.15)",
          borderRadius: 10,
          border: "1px solid rgba(255,255,255,0.18)"
        }}
      >
        <div className="row">
          <div className="col-md-6" style={{ borderRightColor: "var(--blue)" }}>
            <div
              data-aos="zoom-in"
              data-aos-duration={1250}
              style={{ padding: "15PX" }}
            >
              <img
                className="img-fluid"
                src={src}
                style={{ border: imgborder, borderRadius: "5PX" }}
                alt={alt}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ padding: 15 }}>
              <h4
                className="text-uppercase"
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={100}
                style={{
                  color: "rgb(255,255,255)",
                  textAlign: "center",
                  paddingTop: 20,
                  paddingBottom: 20
                }}
              >
                {headtext}
              </h4>
              <div
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={200}
                style={{
                  borderWidth: "2.5px",
                  borderColor: "rgb(252,252,252)",
                  borderBottomStyle: "solid"
                }}
              />
              <p
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={300}
                style={{
                  color: "rgb(255,255,255)",
                  textAlign: "center",
                  fontSize: 20,
                  marginTop: 16,
                  fontStyle: "italic"
                }}
              >
                {paratext}
                <br />
              </p>
              <div
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={400}
                style={{ textAlign: "center", padding: 20 }}
              >
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
                    paddingLeft: 15
                  }}
                  href={buttonlink}
                  target="_blank"
                >
                  {buttontext}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default CourseComponent;