import React from "react";
import { LuEar } from "react-icons/lu";
import { AiOutlineProfile } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-violet-500 w-screen">
      <div className="container mx-auto flex justify-between px-10 py-2 text-white bg-opacity-40">
        <Link to="/testing" className="flex flex-col items-center">
          <LuEar size={28} />
          <h1 className="my-1">Testing</h1>
        </Link>
        <Link to="/profiles" className="flex flex-col items-center">
          <AiOutlineProfile size={28} />
          <h1 className="my-1">Profile</h1>
        </Link>
        <Link to="/settings" className="flex flex-col items-center">
          <IoMdSettings size={28} />
          <h1 className="my-1">Settings</h1>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
