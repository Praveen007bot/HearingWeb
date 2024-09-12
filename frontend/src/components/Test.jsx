import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "./Header";
import AudioPlayer from "./AudioPlayer";
import { useState } from "react";

let numsArray = [1, 2, 3, 4, 5];

const Test = () => {
  const [audioIndexPosition, setAudioIndexPosition] = useState(0);
  const [leftSideAudioPlaying, setLeftSideAudioPlaying] = useState();

  return (
    <div className="flex flex-col justify-between h-screen bg-gradient-to-bl from-cyan-500 to-blue-500 w-full bg-violet-500 bg-opacity-40 flex-grow-1">
      <Header title={"Hearing Test"} />
      <Link to="/testing">
        <IoMdClose
          size={30}
          className="relative bottom-[6.8rem] left-5 text-white"
        />
      </Link>
      <div>
        <div className="flex justify-center mb-11">
          <div>
            <img
              src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1713244163/leftSideIcon.png"
              alt="headphones-icon"
              className="h-[20rem] w-[10rem]"
            />
            {leftSideAudioPlaying && (
              <img
                src={"/src/assets/R.png"}
                alt="audio gif"
                className="size-10 translate-x-10 -translate-y-3"
              />
            )}
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dtkpydgtx/image/upload/v1713244163/rightSideIcon.png"
              className="h-[20rem] w-[10rem]"
              alt="headphones-icon"
            />
            {!leftSideAudioPlaying && (
              <img
                src={"/src/assets/R.png"}
                alt="audio gif"
                className="size-10 translate-x-24 -translate-y-3"
              />
            )}
          </div>
        </div>
        <ul className="flex justify-center">
          {numsArray.map((num, index) => (
            <li
              key={index}
              className={`bg-violet-500  ${
                audioIndexPosition === index && "bg-violet-700"
              } px-3 rounded-full text-lg text-white py-1 mx-2`}
            >
              {num}
            </li>
          ))}
        </ul>
      </div>
      <AudioPlayer
        setAudioIndexPosition={setAudioIndexPosition}
        setLeftSideAudioPlaying={setLeftSideAudioPlaying}
      />
    </div>
  );
};

export default Test;
