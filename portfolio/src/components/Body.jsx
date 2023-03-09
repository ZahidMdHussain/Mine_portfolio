import React from "react";
import profile from "../assets/img/profile.png";
import { BiRightArrowAlt } from "react-icons/bi";

const Body = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from from-black via-black to-gray-800 pt-[20%] md:pt-0"
    >
      <div className="flex max-w-screen-lg mx-auto flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full text-white">
          <h2 className="text-5xl font-bold md:font-extrabold md:text-7xl">
            I'm a Frontend Developer
          </h2>
          <p className="py-4 max-w-md text-gray-500 font-semibold">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>
          <div className="group flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-2 w-fit rounded-md hover: cursor-pointer">
            <button className="font-semibold">Portfolio</button>
            <span className="pl-2 group-hover:rotate-90 duration-300">
              <BiRightArrowAlt size={20} />
            </span>
          </div>
        </div>
        <div>
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
