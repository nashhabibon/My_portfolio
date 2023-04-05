import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.innerWidth <= 768) {
      setIsScrolled(false);
    } else {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar-container">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="navbar-logo"
          onClick={scrollToTop}
        >
          <img src={Logo} alt="" className="logo"></img>
        </Link>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <Link
                key={item.id}
                to={item.to}
                activeClass="active"
                smooth
                spy
                className={item.className}
              >
                {item.title && <span className="nav-title">{item.title}</span>}
                {item.icon && <span className="nav-icon">{item.icon}</span>}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
