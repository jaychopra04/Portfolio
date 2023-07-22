import React from "react";
import { Link } from "react-router-dom";

function NavMini() {
  return (
    <div className="container-fluid">
      <Link to="/">
        <a
          className="navbar-brand"
          data-bss-hover-animate="pulse"
          style={{
            fontSize: "25PX",
            color: "#ffffff",
            fontFamily: "Kaushan Script",
            margin: 10,
          }}
        >
          Jay Chopra
        </a>
      </Link>
    </div>
  );
}

export default NavMini;
