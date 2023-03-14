import React from "react";
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full bg-gray-800 text-white">
      <div className="max-w-screen-lg py-4 px-8 flex flex-col justify-between gap-2 items-center mx-auto md:flex-row selection:text-white selection:bg-cyan-500">
        <div className="text-sm font-semibold">
          <p>Made with ❤️ in India</p>
        </div>
        <div className="text-center my-2">
          <div className="">
            <h1 className="text-3xl font-medium md:text-4xl font-sign text-cyan-500 ">
              Zahid
            </h1>
          </div>
          <div className="md:hidden">
            <ul className="flex gap-2 justify-center items-center">
              <li>
                <a
                  href="https://www.linkedin.com/in/md-zahid-hussain-3811031b6/"
                  className="w-fit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ZahidMdHussain"
                  className="w-fit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={20} />
                </a>
              </li>
              <li>
                <a href="mailto:foo@gmail.com" className="w-fit">
                  <IoMdMail size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/zahidinasaltair"
                  className="w-fit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaCodepen size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold ">No &copy; copyright issues.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
