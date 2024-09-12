import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaInfoCircle } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const Testing = () => {
  return (
    <div className="h-screen bg-gradient-to-bl from-cyan-500 to-blue-500 flex flex-col justify-between overflow-x-hidden">
      <Header title={"Patralex Hearing Test"} />
      <div className="container mx-auto flex flex-col justify-around items-center flex-grow p-10">
        <div className="flex flex-col text-center items-center text-gray-100 ">
          <FaInfoCircle size={30} className="text-white my-3" />
          <p className="tracking-wide mb-1 mt-2 text-lg">
            Watch the condition of your hearing!
          </p>
          <p className="tracking-wide text-lg">
            Tine audiometry method id used for the test
          </p>
        </div>
        <hr className="bg-white h-[0.2rem] w-full" />
        <div>
          <Link to="/test">
            <button>
              <CiCirclePlus size={180} className="text-white" />
            </button>
          </Link>
          <p className="text-center text-white tracking-wide text-lg">
            Press to start the test
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testing;
