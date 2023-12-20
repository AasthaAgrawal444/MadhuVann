import React, { useState, useEffect } from "react";
import pause from "../Assets/pause.png";
import play from "../Assets/play.png";
import resume from "../Assets/media-end.png";

const TextToSpeechToggle = ({ textToRead }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [utterance, setUtterance] = useState(null);

  const createNewUtterance = () => {
    const newUtterance = new SpeechSynthesisUtterance(textToRead);
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find((voice) => voice.name.includes("Zira"));
    newUtterance.voice = naturalVoice || voices[0];
    return newUtterance;
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setUtterance(null); // Reset the utterance instance
    } else {
      const newUtterance = createNewUtterance();
      window.speechSynthesis.speak(newUtterance);
      setUtterance(newUtterance);
    }

    setIsSpeaking(!isSpeaking);
  };

  const togglePause = () => {
    if (isPaused) {
      window.speechSynthesis.pause();
      // setUtterance(null); // Reset the utterance instance
    } else {
      //   const newUtterance = createNewUtterance();
      //   window.speechSynthesis.speak(newUtterance);
      //  setUtterance(newUtterance);
      window.speechSynthesis.resume();
    }

    setIsPaused(!isPaused);
  };

  const Pause = ({ onPlayerClick }) => {
    return (
      <div>
        <button
          onClick={onPlayerClick}
          style={{
            backgroundColor: "#97b18e",
            color: "black",
            width: "7rem",
            height: "4rem",
            borderRadius: "8px 8px 8px 8px",
            borderColor: "#97b18e",
            marginBottom: "1rem",
          }}
        >
          <img src={pause} />
        </button>
      </div>
    );
  };

  const Play = ({ onPlayerClick }) => {
    return (
      <div>
        <button
          onClick={onPlayerClick}
          style={{
            color: "black",
            width: "7rem",
            height: "4rem",
            borderRadius: "8px 8px 8px 8px",
            backgroundColor: "#97b18e",
            borderColor: "#97b18e",
            marginBottom: "1rem",
          }}
        >
          <img src={play} />
        </button>
      </div>
    );
  };

  const Stop = ({ onPlayerClick }) => {
    return (
      <div>
        <button
          onClick={onPlayerClick}
          style={{
            color: "black",
            width: "7rem",
            height: "4rem",
            borderRadius: "8px 8px 8px 8px",
            backgroundColor: "#97b18e",
            borderColor: "#97b18e",
            marginBottom: "1rem",
          }}
        >
          <img src={resume} />
        </button>
      </div>
    );
  };

  const Resume = ({ onPlayerClick }) => {
    return (
      <div>
        <button
          onClick={onPlayerClick}
          style={{
            color: "black",
            width: "7rem",
            height: "4rem",
            borderRadius: "8px 8px 8px 8px",
            backgroundColor: "#97b18e",
            borderColor: "#97b18e",
            marginBottom: "1rem",
          }}
        >
          Resume
        </button>
      </div>
    );
  };

  useEffect(() => {
    return () => {
      if (utterance) {
        window.speechSynthesis.cancel();
      }
    };
  }, [utterance]);

  useEffect(() => {
    console.log("Text to read:", textToRead);
  }, [textToRead]);

  useEffect(() => {
    console.log("Is speaking:", isSpeaking);
  }, [isSpeaking]);

  return (
    <div className="containerbutton">
      <div className="player">
        {isSpeaking ? (
          <Stop onPlayerClick={toggleSpeech} />
        ) : (
          <Play onPlayerClick={toggleSpeech} />
        )}

        {isSpeaking &&
          (isPaused ? (
            <Pause onPlayerClick={togglePause} />
          ) : (
            <Resume onPlayerClick={togglePause} />
          ))}
      </div>

      {/* <button onClick={toggleSpeech}>
        {isSpeaking ? "Stop Speaking" : "Start Speaking"}
      </button> */}

      {/* {isSpeaking && (
        <button onClick={togglePause}>{isPaused ? "Pause" : "Resume"}</button>
      )} */}
    </div>
  );
};

export default TextToSpeechToggle;
