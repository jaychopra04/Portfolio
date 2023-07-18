import React from "react";

function Banner({ bannertext }) {
  return (
    <div
      data-bss-parallax-bg="true"
      style={{
        height: "100vh",
        background: "repeating-linear-gradient(black, rgb(37,37,37) 10px)",
      }}
    >
      <div style={{ height: "35vh" }} />
      <p
        data-aos="zoom-in-up"
        data-aos-duration={1000}
        style={{
          textAlign: "center",
          fontSize: "11vw",
          fontFamily: '"Allerta Stencil", sans-serif',
          color: "rgb(255,255,255)",
        }}
      >
        {bannertext}
      </p>
      <div
        data-aos="zoom-in-up"
        data-aos-duration={1000}
        data-aos-delay={200}
        style={{
          boxShadow: "0px 0px 0px 1px var(--blue)",
          marginRight: "10PX",
          marginLeft: "10PX",
        }}
      />
    </div>
  );
}

export default Banner;
