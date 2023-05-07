import React from "react";
import { FiPenTool } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

import "./services.css";

const services = () => {
  return (
    <section className="services section" id="services">
      <div className="container_title">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle"> What i provide</span>
      </div>
      <div className="services_container container grid">
        <div className="services_content">
          <div className="services_group">
            <div className="services_box">
              <div className="icon_box">
                <i className="services_icon">
                  <FiPenTool />
                </i>
              </div>
              <h3 className="services_title">Graphic Design</h3>
              <p>
                The potential services that can be offered in the field of
                graphic design are logo design, brand identity design, print
                design, web design, social media graphics, packaging design, and
                illustration.
              </p>
            </div>
            <div className="services_box">
              <div className="icon_box">
                <i className="services_icon">
                  <FaLaptopCode />
                </i>
              </div>
              <h3 className="services_title">Web Development</h3>
              <p>
                As a web developer, my primary responsibility is to create and
                maintain websites and web applications. I use a variety of
                programming languages, such as HTML, CSS, JavaScript, and PHP,
                to create the underlying structure, layout, and functionality of
                a website.
              </p>
            </div>
            <div className="services_box">
              <div className="icon_box">
                <i className="services_icon">
                  <MdOutlineDashboard />
                </i>
              </div>
              <h3 className="services_title">UI/UX Design</h3>
              <p>
                As a UI/UX designer, my main focus is on creating user-centered
                designs that are both visually appealing and easy to use. I work
                on designing user interfaces for websites, mobile apps, and
                other digital products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
