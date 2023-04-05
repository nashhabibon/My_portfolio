import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineBehanceSquare,
  AiOutlineClose,
} from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import "./socialmedia.css";

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
      <div className="menu-icon" onClick={updateMenu}>
        <span className={isMenuShown ? "show" : "hidden"}>
          <AiOutlineFacebook />
        </span>
        <span className={isMenuShown ? "show" : "hidden"}>
          <AiOutlineInstagram />
        </span>
        <span className={isMenuShown ? "show" : "hidden"}>
          <AiOutlineGithub />
        </span>
        <span className={isMenuShown ? "show" : "hidden"}>
          <AiOutlineBehanceSquare />
        </span>
        <span className={isMenuShown ? "show" : "hidden"}>
          <AiOutlineLinkedin />
        </span>
        <span onClick={updateMenu}>
          {isMenuShown ? <AiOutlineClose /> : <BiMenuAltRight />}
        </span>
      </div>
    </div>
  );
};

export default SocialMedia;
