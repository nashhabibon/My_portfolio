import React, { useState, useEffect } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

import SwiperInfo from "./swiperinfo";

const Info = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576); // set breakpoint here
    };

    // Add event listener for screen resize
    window.addEventListener("resize", handleResize);

    // Initial check for screen size on component mount
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isSmallScreen) {
    return <SwiperInfo />;
  }
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="about_icon">
          <BsPersonWorkspace />
        </i>
        <h3 className="about_title">Experience</h3>
        <span className="about_sub">7 Years of Working</span>
      </div>

      <div className="about_box">
        <i className="about_icon">
          <TbCertificate />
        </i>
        <h3 className="about_title">Education</h3>
        <span className="about_sub">BSIT Degree Holder</span>
      </div>

      <div className="about_box">
        <i className="about_icon">
          <BiSupport />
        </i>
        <h3 className="about_title">Support</h3>
        <span className="about_sub">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
