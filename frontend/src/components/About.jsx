import React from "react";
import Header from "./Header";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="h-screen bg-gradient-to-bl from-cyan-500 to-blue-500 w-full bg-violet-500 bg-opacity-40">
      <Header title={"About"} />
      <Link to="/settings">
        <IoMdClose
          size={30}
          className="relative bottom-12 left-[20rem] text-white"
        />
      </Link>
      <div className="flex flex-col items-center mt-[5rem] max-w-[40rem] mx-auto p-5">
        <img
          src="https://icon-library.com/images/ear-icon-png/ear-icon-png-0.jpg"
          alt="app icon"
          className="w-[10rem] md:w-[15rem] my-5"
        />
        <h1 className="text-stone-200 tracking-wider text-2xl md:text-3xl mb-3 md:mb-5">
          Hearing Test Web App
        </h1>
        <p className="text-center text-slate-800 text-md md:text-lg">
          It is hard to realize that you have problems with your hearing.
          Regular monitoring of your hearing with the help of our application
          can assess the level of yourhearing and reduce the anxiety you feel
          thinking about its condition.
        </p>
      </div>
    </div>
  );
};

export default About;
