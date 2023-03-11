import React from "react";
import { skills } from "../utils/confiq";

const Skills = () => {
  return (
    <div
      name="about"
      className="md:h-screen w-full bg-gradient-to-b from-gray-800 via-black to-black pt-24 pb-8 md:pt-0 md:pb-0"
    >
      <div className="flex justify-center mx-auto max-w-screen-lg flex-col text-white w-full h-full px-4">
        <div className="my-8 py-1">
          <h1 className="text-4xl font-bold border-b-4 border-gray-600 w-fit">
            Skills
          </h1>
          <p className="py-6">These are the technologies I've worked with.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-8 md:px-0">
          {skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className={`flex justify-start items-center shadow-lg ${skill.color} md:shadow-md ${skill.style} duration-500 ease-in-out rounded-lg p-2 hover:cursor-pointer group`}
              >
                <div className="">
                  <img className="w-20" src={skill.imgURL} alt={skill.text} />
                </div>
                <div className="text-2xl font-bold text-center w-[70%] md:w-0 overflow-hidden group-hover:w-[70%] group-hover-h-full duration-500 ease-in-out whitespace-nowrap ">
                  <p>{skill.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
