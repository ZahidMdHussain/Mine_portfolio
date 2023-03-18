import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div
      name="contact"
      className="md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24 pb-8 md:pt-0 md:pb-0"
    >
      <div className="flex justify-center mx-auto max-w-screen-lg flex-col text-white w-full h-full px-4 selection:text-white selection:bg-cyan-500">
        <div className="my-2 py-1 w-fit">
          <h1 className="text-4xl w-fit font-bold border-b-4 border-cyan-600">
            Contact
          </h1>
          <p className="mt-2 mb-4 text-cyan-400">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/9b0643fa-8394-484a-b940-f27bb0caf512"
            method="POST"
            className="flex flex-col mx-4 w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Your Name.."
              className="p-2 bg-transparent border border-white text-white rounded-md focus:outline-none focus:border-cyan-500"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Your Email.."
              className="p-2 my-4 bg-transparent border border-white text-white rounded-md focus:outline-none focus:border-cyan-500"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              rows="10"
              value={msg}
              placeholder="Your Message.."
              className="p-2 bg-transparent border border-white text-white
              rounded-md focus:outline-none resize-none focus:border-cyan-500"
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 my-8 mx-auto flex items-center rounded-md duration-300 font-semibold hover:font-bold hover:text-blue-900 focus:outline-none"
            >
              Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
