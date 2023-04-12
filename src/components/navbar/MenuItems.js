import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineContactPhone } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

export const MenuItems = [
  {
    id: 0,
    title: "Home",
    to: "home",
    className: "nav_links",
    icon: <AiOutlineHome />,
  },
  {
    id: 1,
    title: "About",
    to: "about",
    className: "nav_links",
    icon: <AiOutlineUser />,
  },
  {
    id: 2,
    title: "Skills",
    to: "skills",
    className: "nav_links",
    icon: <GiSkills />,
  },
  {
    id: 3,
    title: "Services",
    to: "services",
    className: "nav_links",
    icon: <RiServiceLine />,
  },
  {
    id: 4,
    title: "Portfolio",
    to: "portfolio",
    className: "nav_links",
    icon: <BsBriefcase />,
  },

  {
    id: 5,
    title: "Contact",
    to: "contact",
    className: "nav_links",
    icon: <MdOutlineContactPhone />,
  },
];
