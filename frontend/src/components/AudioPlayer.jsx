import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const leftSideAudioFiles = [
  "/src/assets/250 L.wav",
  "/src/assets/500 L.wav",
  // "/src/assets/1000 L.wav",
  "/src/assets/2000 L.wav",
  "/src/assets/4000 L.wav",
];
const rightSideAudioFiles = [
  "/src/assets/250 R.wav",
  "/src/assets/500 R.wav",
  // "/src/assets/1000 R.wav",
  "/src/assets/2000 R.wav",
  "/src/assets/4000 R.wav",
];

let leftSideHearingResults = {
  "250hz": 0,
  "500hz": 0,
  "1000hz": 0,
  "2000hz": 0,
  // "4000hz": 0,
};
let rightSideHearingResults = {
  "250hz": 0,
  "500hz": 0,
  "1000hz": 0,
  "2000hz": 0,
  // "4000hz": 0,
};
function AudioPlayer({ setAudioIndexPosition, setLeftSideAudioPlaying }) {
  const [leftSideTest, setLeftSideTest] = useState(true);
  const [audioIndex, setAudioIndex] = useState(0);
  const [volume, setVolume] = useState(0.2);
  let intervalRef = useRef();
  let startTime = useRef(null);
  const audioRef = useRef(null);
  let frequency = useRef(250);
  const navigate = useNavigate();

  useEffect(() => {
    setAudioIndexPosition(audioIndex);
    setLeftSideAudioPlaying(leftSideTest);
    audioRef.current = leftSideTest
      ? new Audio(leftSideAudioFiles[audioIndex])
      : new Audio(rightSideAudioFiles[audioIndex]);
    if (!leftSideTest || audioIndex > 0) {
      handleStart();
    }
  }, [leftSideTest, audioIndex]);

  const handleStart = () => {
    audioRef.current.load();
    intervalRef.current = setInterval(() => {
      startTime.current = Date.now();
      setVolume((prevVolume) => {
        if (prevVolume < 1) {
          audioRef.current.play();
          audioRef.current.volume = prevVolume;
          return prevVolume + 0.2;
        }
        handleStop();
      });
    }, 2000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    audioRef.current.pause();
    const endTime = Date.now();
    const timeTaken = endTime - startTime.current;

    const resultsToUpdate = leftSideTest
      ? leftSideHearingResults
      : rightSideHearingResults;

    // Update the results for the current frequency
    resultsToUpdate[`${frequency.current}hz`] = timeTaken;

    // Double the frequency after stopping
    frequency.current *= 2;

    if (audioIndex < leftSideAudioFiles.length - 1) {
      setAudioIndex((prevIndex) => prevIndex + 1);
    } else {
      setLeftSideTest(!leftSideTest);
      setAudioIndex(0);
      frequency.current = 250;
      const url = new URL(audioRef.current.src);
      const pathname = url.pathname;
      const filename = pathname.split("/").pop();
      console.log(filename);
      if (filename === "4000%20R.wav") {
        alert("test is Completed");

        navigate("/testCompleteForm", {
          state: { leftSideHearingResults, rightSideHearingResults },
        });
        frequency.current = 250;
        setLeftSideTest(!leftSideTest);
        setAudioIndex(0);
      }
    }
    setVolume(0.2);
  };

  return (
    <div className="bg-violet-500 py-5 flex justify-center">
      <button
        type="button"
        className="bg-gradient-to-tr from-sky-400 to-blue-500 px-4 rounded-lg py-1 text-xl text-white mr-5"
        onClick={handleStart}
      >
        Start
      </button>
      <button
        type="button"
        className="bg-gradient-to-tr from-pink-600 to-violet-400 px-4 rounded-lg py-1 text-xl text-white"
        onClick={handleStop}
      >
        I Heard it
      </button>
    </div>
  );
}

AudioPlayer.propTypes = {
  setAudioIndexPosition: PropTypes.func,
  setLeftSideAudioPlaying: PropTypes.func,
};

export default AudioPlayer;
