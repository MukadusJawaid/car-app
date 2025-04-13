import { ImBehance2, ImGithub, ImInstagram, ImLinkedin } from "react-icons/im";
import { MdWeb } from "react-icons/md";
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
    label: "Blogs",
    route: "/blogs",
  },
  {
    label: "About Me",
    route: "/about",
  },
  {
    label: "Do You Know",
    route: "/doYouKnow",
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
