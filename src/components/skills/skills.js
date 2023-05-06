import React, { useState } from "react";
import Graphic from "./graphic";
import Frontend from "./frontend";
import Backend from "./backend";
import "./skills.css";

const Skills = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabs = [
    { label: "Graphic Designer", content: <Graphic /> },
    { label: "Frontend Developer", content: <Frontend /> },
    { label: "Backend Developer", content: <Backend /> },
  ];

  function handleTabClick(index) {
    setActiveTabIndex(index);
  }
  return (
    <section className="skills section" id="skills">
      <div className="container_title">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle"> My Technical Level</span>
      </div>
      <div className="skills_container container">
        <div className="tab_container">
          <div className="vertical_tabs">
            <ul>
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={index === activeTabIndex ? "active" : ""}
                  onClick={() => handleTabClick(index)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="tab_content">
            <div className="skills_box">{tabs[activeTabIndex].content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
