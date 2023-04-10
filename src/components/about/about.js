import React, { useState } from "react";
import "./about.css";
import pic from "../..//assets/Programming.svg";
import { Fade, Slide } from "react-awesome-reveal";
import Info from "./info";
// import '../..//animation.css'

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="section" id="about">
      <div className="container about_container">
        <div className="about_container_left">
          <img className="programming" src={pic} alt="" />
        </div>
        <div className="about_container_right">
          <h1 className="section__title">Profile</h1>

          <p>
            Hi, I'm <span className="name">Nashrudin N. Habibon</span>, a web
            front-end developer and graphic designer based in Davao City,
            Philippines. I have a passion for creating beautiful and functional
            websites that provide seamless user experiences. My background in
            graphic design helps me bring a unique perspective to web
            development, allowing me to create visually stunning interfaces that
            engage users.
          </p>

          <Info />
        </div>
      </div>
    </div>
  );
};

export default About;
