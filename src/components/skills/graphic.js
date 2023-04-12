import React from "react";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

const graphic = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title"> Graphic Designer</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i>
              <SiAdobephotoshop />
            </i>
            <div className="skills_info">
              <h3 className="skills_name">Photoshop</h3>
              <span className="skills_level">Advance</span>
            </div>
          </div>
          <div className="skills_data">
            <i>
              {" "}
              <SiAdobeillustrator />
            </i>
            <div className="skills_info">
              <h3 className="skills_name">Illustrator</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills_data">
            <i>
              <FiFigma />
            </i>
            <div className="skills_info">
              <h3 className="skills_name">Figma</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default graphic;
