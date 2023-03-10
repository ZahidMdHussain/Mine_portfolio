import React from "react";
import { portfolioData } from "../utils/confiq";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24 pb-8 md:pt-0 md:pb-0"
    >
      <div className="flex flex-col justify-center mx-auto max-w-screen-lg text-white w-full h-full px-4">
        <div className="my-8 py-1">
          <h1 className="text-4xl w-fit font-bold border-b-4 border-gray-600">
            Portfolio
          </h1>
          <p className="py-6">Check out some of my work right here.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-8 md:px-0">
          {portfolioData.map((item) => {
            return (
              <div
                key={item.id}
                className="shadow-md shadow-gray-700 rounded-lg hover:shadow-lg hover:shadow-gray-600 hover:scale-105 duration-300"
              >
                <img
                  className="rounded-md grayscale-[20%] hover:grayscale-0 duration-200"
                  src={item.imgURL}
                  alt="projectImg"
                />
                <div className="py-2 flex justify-evenly">
                  <button className="border-2 border-gray-600 p-2 rounded-lg hover:bg-slate-100 hover:text-black duration-300">
                    <a
                      className="outline-none"
                      href={item.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="border-2 border-gray-600 p-2 rounded-lg hover:bg-green-300 hover:border-green-300 hover:text-black duration-300">
                    <a
                      className="outline-none"
                      href={item.code}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
