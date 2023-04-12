import React from "react";
import Graphic from "./graphic";
import Frontend from "./frontend";
import Backend from "./backend";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container_title">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle"> My Technical Level</span>
      </div>
      <div className="skills_container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
