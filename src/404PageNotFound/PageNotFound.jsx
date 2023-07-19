import "./PageNotFound.css";
import { Link } from "react-router-dom";
//import { Parallax } from "react-parallax";

import React, { useEffect } from 'react';
import Parallax from 'parallax-js'; // Import the Parallax library

function PageNotFound() {
  useEffect(() => {
    // First line of code: Get the element by id
    const scene = document.getElementById('scene');

    // Second line of code: Create a Parallax instance
    const parallaxInstance = new Parallax(scene);

    // Clean up the Parallax instance on component unmount
    return () => {
      parallaxInstance.disable();
    };
  }, []);
  
  


  return (

    <div>
      <title>404 Page Not Found</title>
      <section className="wrapper">
        <div className="container">
          <div id="scene" className="scene" data-hover-only="true">
            <div className="circle" data-depth="1.2" />
            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece" />
                <span className="piece" />
                <span className="piece" />
              </div>
            </div>
            <div className="two" data-depth="0.60">
              <div className="content">
                <span className="piece" />
                <span className="piece" />
                <span className="piece" />
              </div>
            </div>
            <div className="three" data-depth="0.40">
              <div className="content">
                <span className="piece" />
                <span className="piece" />
                <span className="piece" />
              </div>
            </div>
            <p className="p404" data-depth="0.50">
              404
            </p>
            <p className="p404" data-depth="0.10">
              404
            </p>
          </div>
          <div className="text">
            <article>
              <p>
                Uh oh! Looks like you got lost. <br />
                Go back to the homepage if you dare!
              </p>
              <Link to="/">
                <button>i dare!</button>
              </Link>
            </article>
          </div>
        </div>
      </section> 
    </div>
  );
}

export default PageNotFound;
