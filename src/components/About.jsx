import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="md:h-screen w-full bg-gradient-to-b from-gray-800 via-black to-black pt-24 pb-8 md:pt-0 md:pb-0"
    >
      <div className="flex justify-center mx-auto max-w-screen-lg flex-col text-white w-full h-full px-4 selection:text-white selection:bg-cyan-500">
        <div className="my-2 py-1 w-fit">
          <h1 className="text-4xl w-fit font-bold border-b-4 border-cyan-500">
            About
          </h1>
          <h3 className="my-2 text-cyan-400">
            Here you will find more information about me and what I do ?
          </h3>
        </div>
        <p className="md:text-xl">
          I am Md. Zahid Hussain , a 26 years old Frontend Web developer living
          in Kolkata, India. I am a Computer Science Engineer, currently working
          in one of the{" "}
          <em className="bg-cyan-500 text-black font-semibold">MNC's.</em>
        </p>
        <br />
        <p className="md:text-xl ">
          I ❤️ building the Front-end design and functionality of Websites and
          Web Applications that leads to the success of the overall product.
          Check out some of my work in the{" "}
          <em className="bg-cyan-500 text-black font-semibold">Portfolio</em>{" "}
          section. I also like sharing content related to the stuff that I have
          learned over the year in Web Development so it can help other Dev.
          Feel free to Connect or Follow me on my{" "}
          <em className="bg-cyan-500 text-black font-semibold">Linkedin</em>{" "}
          where I post useful content related to Web Development and
          Programming.
        </p>
        <br />
        <p className="md:text-xl">
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to contact me.
        </p>
      </div>
    </div>
  );
};

export default About;
