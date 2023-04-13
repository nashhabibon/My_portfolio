import { AiOutlineBehance } from "react-icons/ai";

import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";
export const SocialItem = [
  {
    id: 0,
    href: "https://www.facebook.com/NashrudinHabibon/",
    className: "iconlinks",
    icon: <GrFacebookOption />,
    title: "facebook",
  },

  {
    id: 1,
    href: "https://github.com/nashhabibon",
    className: "iconlinks",
    icon: <FiGithub />,
    title: "Github",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/nashrudin-habibon-433ab8a8/",
    className: "iconlinks",
    icon: <GrLinkedinOption />,
    title: "Linked",
  },
  {
    id: 3,
    href: "https://www.behance.net/nashrudin",
    className: "iconlinks",
    icon: <AiOutlineBehance />,
    title: "Behance",
  },
];
