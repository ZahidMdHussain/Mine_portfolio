import React from "react";
import profile from "../assets/img/profile.png";
import { BiRightArrowAlt } from "react-icons/bi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { Link } from "react-scroll";

const Body = () => {
  return (
    <div
      name="home"
      className="md:h-screen w-full bg-gradient-to-b from from-black via-black to-gray-800 pt-24 pb-8 md:pt-0 md:pb-0"
    >
      <div className="flex max-w-screen-lg mx-auto flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full text-white selection:text-white selection:bg-cyan-500">
          <h2 className="text-5xl font-bold md:font-extrabold md:text-7xl">
            I'm a Frontend Developer
          </h2>
          <p className="py-4 max-w-md text-cyan-500 font-semibold">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>
          <div className="flex items-center gap-8">
            <Link
              to="contact"
              smooth
              duration={500}
              className="group flex items-center bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-400 px-6 py-3 my-2 w-fit rounded-md hover: cursor-pointer hover:shadow-md hover:shadow-cyan-800 duration-300"
            >
              <button className="font-semibold focus:outline-none">
                Hire Me
              </button>
              <span className="pl-2 group-hover:rotate-90 duration-300">
                <BiRightArrowAlt size={20} />
              </span>
            </Link>

            <a
              href="/resume.pdf"
              download={true}
              className="flex items-center bg-gradient-to-r from-blue-400 to-cyan-500 px-6 py-3 my-2 w-fit rounded-md hover: cursor-pointer hover:shadow-md hover:shadow-cyan-800 duration-300"
            >
              <button className="font-semibold focus:outline-none">
                Resume
              </button>
              <span className="pl-2 animate-bounce duration-300">
                <HiOutlineDocumentDownload size={20} />
              </span>
            </a>
          </div>
        </div>
        <div className="my-2">
          <img
            className="w-[250px]  md:w-[450px] rounded-lg"
            src={profile}
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
