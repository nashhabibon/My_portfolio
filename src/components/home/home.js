import React from "react";
import "./home.css";
import Image from "../../assets/pic.png";
import { Fade, Slide } from "react-awesome-reveal";
const home = () => {
  return (
    <section className="home section" id="home">
      <div className="container home_container">
        <div className="home_container_left">
          <div className="container-name">
            <Fade>
              <span>Hello! I am</span>
              <span>NASHRUDIN H.</span>
              <span>Let me build web stuff for you</span>
              <span>
                "A Front-end Web Developer who love to turn ideas into reality
                through web development. I like to craft solid and scalable
                frontend products with great user experience"
              </span>
            </Fade>
          </div>
        </div>

        <div className="home_container_right">
          <Slide right>
            {" "}
            <img src={Image} alt="" />
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default home;
