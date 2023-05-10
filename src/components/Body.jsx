import React from "react";
import profile from "../assets/img/profile.jpg";
import { BiRightArrowAlt } from "react-icons/bi";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { Link } from "react-scroll";

const Body = () => {
  return (
    <div
      name="home"
      className="md:h-screen w-full bg-gradient-to-b from from-black via-black to-gray-800 pt-24 pb-8 md:pt-0 md:pb-0"
    >
      <div className="flex max-w-screen-lg flex-col-reverse mx-auto items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col md:w-2/3 justify-center h-full text-white selection:text-white selection:bg-cyan-50">
          <h2 className="text-2xl font-bold md:font-extrabold md:text-3xl my-4">
            Hey,
          </h2>
          <h2 className="text-4xl font-bold md:font-extrabold md:text-6xl tracking-wide mb-4">
            I'm Muhammad <br /> Zahid Hussain
          </h2>
          <p className="py-4 max-w-md text-cyan-500 font-semibold">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product.
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
        <div className="mb-4">
          <img
            className="w-[200px] h-[250px]  md:w-[300px] md:h-[350px] object-fill ring-2 ring-offset-4 md:ring-offset-8 ring-cyan-500  ring-offset-black  shadow-[1px_1px_15px_10px_rgba(0,188,212,0.7)] rounded-tl-lg rounded-br-lg rounded-tr-3xl rounded-bl-3xl box"
            src={profile}
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
