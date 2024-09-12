import React, { useState, useEffect } from "react";

const Test = () => {
  const [audioIndex, setAudioIndex] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [volume, setVolume] = useState(0.2);

  const audioFiles = [
    "file1.wav",
    "file2.wav",
    "file3.wav",
    "file4.wav",
    "file5.wav",
  ]; // replace with your actual file paths

  const audio = new Audio(audioFiles[audioIndex]);
  audio.volume = volume;

  const handleStart = () => {
    setStartTime(Date.now());
    audio.play();
    const interval = setInterval(() => {
      setVolume((prevVolume) => {
        if (prevVolume < 1) {
          return prevVolume + 0.2;
        } else {
          clearInterval(interval);
          return prevVolume;
        }
      });
    }, 2000);
  };

  const handleListen = () => {
    setEndTime(Date.now());
    audio.pause();
    if (audioIndex < audioFiles.length - 1) {
      setAudioIndex((prevIndex) => prevIndex + 1);
      setVolume(0.2);
      setStartTime(null);
      setEndTime(null);
    }
  };

  useEffect(() => {
    if (audioIndex !== 0) {
      handleStart();
    }
  }, [audioIndex]);

  return (
    <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleListen}>I heard it</button>
      {endTime && startTime && <p>Time taken: {endTime - startTime} ms</p>}
    </div>
  );
};

export default Test;
