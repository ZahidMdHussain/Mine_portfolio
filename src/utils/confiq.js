import projectImg1 from "../assets/img/portfolio/img1.jpg";
import projectImg2 from "../assets/img/portfolio/img2.jpg";
import projectImg3 from "../assets/img/portfolio/img3.jpg";
import projectImg4 from "../assets/img/portfolio/img4.jpg";
import projectImg5 from "../assets/img/portfolio/img5.jpg";
import projectImg6 from "../assets/img/portfolio/img6.jpg";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import react from "../assets/img/react.png";
import tailwind from "../assets/img/tailwind.png";
import bootstrap from "../assets/img/bootstrap.png";
import node from "../assets/img/node.png";
import github from "../assets/img/github.png";
import {
  FaHome,
  FaUser,
  FaPhotoVideo,
  FaCode,
  FaHandshake,
} from "react-icons/fa";

export const navigation = [
  {
    id: "home-01",
    name: "home",
    logos: <FaHome />,
  },
  {
    id: "about-02",
    name: "about",
    logos: <FaUser />,
  },
  {
    id: "portfolio-01",
    name: "portfolio",
    logos: <FaPhotoVideo />,
  },
  {
    id: "skills-01",
    name: "skills",
    logos: <FaCode />,
  },
  {
    id: "contact-01",
    name: "contact",
    logos: <FaHandshake />,
  },
];

export const portfolioData = [
  {
    id: 1,
    imgURL: projectImg1,
    bio: "Food ordering App to your doorstep from thousands of amazing local and national restaurants.",
    live: "https://late-nightbyt.netlify.app",
    code: "https://github.com/ZahidMdHussain/road-to-Reactjs-2023/tree/master/Final-Project",
  },
  {
    id: 2,
    imgURL: projectImg2,
    bio: "Video Streaming App, Find your favourite one and stream uninterrupted.",
    live: "https://silver-fox-d4d523.netlify.app",
    code: "https://github.com/ZahidMdHussain/road-to-Reactjs-2023/tree/master/video-streamimg-app",
  },
  {
    id: 3,
    imgURL: projectImg3,
    bio: "Keeper App, A React project to store important note into keeper.",
    live: "https://keepit-keeper.netlify.app/",
    code: "https://github.com/ZahidMdHussain/LearningReact/tree/master/keeper-app",
  },
  {
    id: 4,
    imgURL: projectImg4,
    bio: "Todo's App, A React project to pin point our daily do's.",
    live: "https://list-here.netlify.app/",
    code: "https://github.com/ZahidMdHussain/LearningReact/tree/master/to-dos",
  },
  {
    id: 5,
    imgURL: projectImg5,
    bio: "Expense Tracker App, A JavaScript project to keep a tracker on your earning",
    live: "https://track-yourexpence.netlify.app/",
    code: "https://github.com/ZahidMdHussain/Javascript-CreatedProjects/tree/master/Expense%20Tracker",
  },
  {
    id: 6,
    imgURL: projectImg6,
    bio: "iBlog is online blogging portal, Its a place where good ideas find you.",
    live: "https://myiblog.000webhostapp.com/",
    code: "https://github.com/ZahidMdHussain/iBlog",
  },
];

export const skills = [
  {
    id: 1,
    imgURL: html,
    text: "HTML",
    color: "shadow-[#e96228]",
    style: "md:hover:shadow-[#e96228]",
  },
  {
    id: 2,
    imgURL: css,
    text: "CSS",
    color: "shadow-[#2862e9]",
    style: "md:hover:shadow-[#2862e9]",
  },
  {
    id: 3,
    imgURL: javascript,
    text: "JAVASCRIPT",
    color: "shadow-[#efd81d]",
    style: "md:hover:shadow-[#efd81d]",
  },
  {
    id: 4,
    imgURL: react,
    text: "REACT JS",
    color: "shadow-[#5ed3f3]",
    style: "md:hover:shadow-[#5ed3f3]",
  },
  {
    id: 5,
    imgURL: tailwind,
    text: "TAILWIND",
    color: "shadow-[#07b0ce]",
    style: "md:hover:shadow-[#07b0ce]",
  },
  {
    id: 6,
    imgURL: bootstrap,
    text: "BOOTSTRAP",
    color: "shadow-[#7710f1]",
    style: "md:hover:shadow-[#7710f1]",
  },
  {
    id: 7,
    imgURL: node,
    text: "NODE JS",
    color: "shadow-[#85b557]",
    style: "md:hover:shadow-[#85b557]",
  },
  {
    id: 8,
    imgURL: github,
    text: "GIT",
    color: "shadow-gray-500",
    style: "md:hover:shadow-gray-500",
  },
];
