import React from "react";
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col left-0 top-[35%] fixed">
      <ul className="selection:text-white selection:bg-cyan-500">
        <li
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  rounded-tr-lg bg-gradient-to-r from-black to-gray-900 hover:cursor-pointer focus:outline-none"
          }
        >
          <a
            href="https://www.linkedin.com/in/md-zahid-hussain-3811031b6/"
            className="flex justify-between items-center w-full text-white font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300   bg-gradient-to-r from-black to-gray-900 hover:cursor-pointer focus:outline-none"
          }
        >
          <a
            href="https://github.com/ZahidMdHussain"
            className="flex justify-between items-center w-full text-white font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300   bg-gradient-to-r from-black to-gray-900 hover:cursor-pointer focus:outline-none"
          }
        >
          <a
            href="mailto:zahimdhussain786@gmail.com"
            className="flex justify-between items-center w-full text-white font-semibold"
          >
            Mail <IoMdMail size={30} />
          </a>
        </li>
        <li
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  rounded-br-lg bg-gradient-to-r from-black to-gray-900 hover:cursor-pointer focus:outline-none"
          }
        >
          <a
            href="https://codepen.io/zahidinasaltair"
            className="flex justify-between items-center w-full text-white font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            Codepen <FaCodepen size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
