import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const projects = () => {
  return (
    <div>
      projects outside github
      <div className="projects_container grid">
        <div className="projects_card">
          <div className="image"></div>
          <div className="content">
            <a href="#">
              <span className="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </a>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium
            </p>
          </div>
          <div className="action_box">
            <a href="#" className="action">
              Github
              <span aria-hidden="true">
                <BiLinkExternal />
              </span>
            </a>
          </div>
        </div>
        <div className="projects_card">
          <div className="image"></div>
          <div className="content">
            <a href="#">
              <span className="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </a>

            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium
            </p>

            <div className="action_box">
              <a href="#" className="action">
                Demo
                <span aria-hidden="true">→</span>
              </a>
              <a href="#" className="action">
                Github
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="projects_card">
          <div className="image"></div>
          <div className="content">
            <a href="#">
              <span className="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </a>

            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium
            </p>

            <div className="action_box">
              <a href="#" className="action">
                Demo
                <span aria-hidden="true">→</span>
              </a>
              <a href="#" className="action">
                Github
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="projects_card">
          <div className="image"></div>
          <div className="content">
            <a href="#">
              <span className="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </a>

            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium
            </p>
            <div className="action_box">
              <a href="#" className="action">
                Demo
                <span aria-hidden="true">→</span>
              </a>
              <a href="#" className="action">
                Github
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
