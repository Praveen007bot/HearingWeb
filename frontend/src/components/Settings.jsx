import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { IoMdMail } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="h-screen bg-gradient-to-bl from-cyan-500 to-blue-500 flex flex-col justify-between overflow-x-hidden">
      <Header title={"Settings"} />
      <div className="container mx-auto flex flex-col flex-grow p-10">
        <Link className="flex items-center p-2 py-4 border-b-2 text-white">
          <IoMdMail size={35} className="mx-2" />
          <p className="text-lg">Contact us</p>
        </Link>
        <Link
          to="/settings/about"
          className="flex items-center p-2 py-4 border-b-2 text-white"
        >
          <FaInfoCircle size={35} className="mx-2" />
          <p className="text-lg">About Applicaion</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
