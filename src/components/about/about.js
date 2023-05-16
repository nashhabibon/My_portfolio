import React from "react";
import "./about.css";
import pic from "../..//assets/Programming.svg";
import Info from "./info";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container about_container">
        <div className="about_container_left">
          <img className="programming" src={pic} alt="" />
        </div>
        <div className="about_container_right">
          <h1 className="section_title">Profile</h1>

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
    </section>
  );
};

export default About;
