import React from "react";

function CertificateComponent({src, alt, headtext, paratext, buttonlink, buttontext}) {
  return (
    <div
      className="col"
      style={{
        padding: 25,
        background: "linear-gradient(#080932 0%, #0c2c1d 100%)",
      }}
    >
      <div
        className="container"
        style={{
          background: "Rgba(255, 255, 255, 0.25)",
          borderRadius: 10,
          border: "1px solid rgba(255,255,255,0.25)",
        }}
      >
        <div className="row">
          <div className="col-md-8" style={{ padding: 15 }}>
            <div
              data-aos="fade"
              data-aos-duration={1250}
              style={{ padding: 20 }}
            >
              <img
                className="img-fluid"
                src={src}
                style={{
                  boxShadow: "1px 1px 20px 8px rgb(0,0,0)",
                  borderRadius: 5,
                }}
                alt={alt}
              />
            </div>
          </div>
          <div className="col-md-4" style={{ padding: 15 }}>
            <div style={{ padding: 20 }}>
              <h4
                className="text-uppercase"
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={100}
                style={{
                  textAlign: "center",
                  color: "rgb(255,255,255)",
                  paddingBottom: "15PX",
                }}
              >
              {headtext}
              </h4>
              <div
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={200}
                style={{ border: "1px dashed rgb(255,255,255)" }}
              />
              <p
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={300}
                style={{
                  marginTop: 20,
                  fontSize: 15,
                  textAlign: "center",
                  color: "rgb(255,255,255)",
                  fontStyle: "italic",
                }}
              >
                {paratext}
              </p>
              <div
                className="text-center"
                data-aos="fade"
                data-aos-duration={1000}
                data-aos-delay={400}
                style={{ padding: 20 }}
              >
                <a
                  className="btn btn-light"
                  role="button"
                  style={{
                    background: "rgba(0,0,0,0.25)",
                    fontWeight: 400,
                    fontSize: 15,
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

export default CertificateComponent;

