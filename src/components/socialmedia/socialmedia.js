import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import "./socialmedia.css";
import { SocialItem } from "./socialmediaItems";

const SocialMedia = () => {
  const [menuClass, setMenuClass] = useState("menu unclick");
  const [menuItem, setMenuItem] = useState("item hidden");
  const [isMenuShown, setIsMenuShown] = useState(false);

  //toggle menu change events

  const updateMenu = () => {
    if (!isMenuShown) {
      setMenuClass("menu click");
      setMenuItem("item show");
    } else {
      setMenuClass("menu unclick");
      setMenuItem("item hidden");
    }
    setIsMenuShown(!isMenuShown);
  };

  return (
    <div className="social-media">
      <span className="menu-icon" onClick={updateMenu}>
        {isMenuShown ? <AiOutlineClose /> : <BiMenuAltRight />}
      </span>
      <ul className="menu-item">
        {SocialItem.map((item, index) => {
          return (
            <li key={index} className={isMenuShown ? "show" : "hidden"}>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.icon && <span>{item.icon}</span>}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialMedia;
