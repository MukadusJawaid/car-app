import { CgWebsite } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";
import { ImGithub, ImInstagram, ImLinkedin } from "react-icons/im";
import { MdWeb } from "react-icons/md";
import { ImBehance2 } from "react-icons/im";
export const navData = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Cars",
    route: "/cars",
  },
  {
    label: "Do You Know",
    route: "/doYouKnow",
  },

  {
    label: "Blogs",
    route: "/blogs",
  },
  {
    label: "About Us",
    route: "/about",
  },
];

export const socialLinks = [
  {
    // label: "LinkeDin",
    icon: <ImLinkedin />,
    route: "https://www.linkedin.com/in/mukadusjawaid",
  },
  {
    // label: "Behance",
    icon: <ImBehance2 />,
    route: "https://www.behance.net/mukadusjawaid",
  },
  ,
  {
    // label: "Portfolio",
    icon: <MdWeb />,
    route: "https://mukadusjawaidsportfolio.web.app/",
  },
  {
    // label: "Github",
    icon: <ImGithub />,
    route: "https://github.com/MukadusJawaid",
  },
  {
    // label: "Instagram",
    icon: <ImInstagram />,
    route: "https://www.instagram.com/graphica_gallery/",
  },
];
export const pages = ["/login", "/signup"];
