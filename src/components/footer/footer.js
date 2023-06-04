import React from "react";
import "./footer.css";
import { AiOutlineBehance } from "react-icons/ai";

import { FiGithub } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";

const Footer = () => {
  return (
    <section className="footer section">
      <div className="footer-container container">
        <span>Design & Built by Nashrudin Habibon</span>

        <div className="social_media">
          <a
            href="https://github.com/nashhabibon"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.behance.net/nashrudin"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineBehance />
          </a>

          <a
            href="https://www.linkedin.com/in/nashrudin-habibon-433ab8a8/"
            target="_blank"
            rel="noreferrer"
          >
            <GrLinkedinOption />
          </a>

          <a
            href="https://www.facebook.com/NashrudinHabibon/"
            target="_blank"
            rel="noreferrer"
          >
            <GrFacebookOption />
          </a>

          <a
            href="https://www.upwork.com/freelancers/nashrudinh"
            target="_blank"
            rel="noreferrer"
          >
            <SiUpwork />
          </a>
        </div>
        <span className="motto">
          "<i>WORK,</i> that's how you get it"
        </span>
      </div>
    </section>
  );
};

export default Footer;
