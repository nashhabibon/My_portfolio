import React from "react";
import "./home.css";
import Image from "../../assets/pic.png";
import { Fade, Slide } from "react-awesome-reveal";
import Resume from "../../../src/assets/Habibon_Nashrudin_Resume.pdf";

const home = () => {
  const downloadDocx = () => {
    const url = Resume;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Habibon_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="home section" id="home">
      <div className="container home_container">
        <div className="home_container_left">
          <div className="container-name">
            <Fade>
              <span>Hello! I am</span>
              <h1>NASHRUDIN H.</h1>
              <span>Let me build web stuff for you</span>
              <h3>
                "A Front-end Web Developer who love to turn ideas into reality
                through web development. I like to craft solid and scalable
                frontend products with great user experience"
              </h3>
            </Fade>
          </div>
          <button className="cv_btn" onClick={downloadDocx}>
            Resume
          </button>
        </div>

        <div className="home_container_right">
          <Slide right>
            {" "}
            <img src={Image} alt="Profile" />
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default home;
