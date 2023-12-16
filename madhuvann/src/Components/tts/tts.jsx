import React, { useState, useEffect } from "react";

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
      <svg
        className="player-button"
        viewBox="0 0 60 60"
        onClick={onPlayerClick}
      >
        <polygon points="0,0 15,0 15,60 0,60" />
        <polygon points="25,0 40,0 40,60 25,60" />
      </svg>
    );
  };

  const Play = ({ onPlayerClick }) => {
    return (
      <svg
        className="player-button"
        viewBox="0 0 60 60"
        onClick={onPlayerClick}
      >
        <polygon points="0,0 50,30 0,60" />
      </svg>
    );
  };

  const Stop = ({ onPlayerClick }) => {
    return (
      <svg
        className="player-button"
        viewBox="0 0 60 60"
        onClick={onPlayerClick}
      >
        <rect x="10" y="10" width="60" height="60" />
      </svg>
    );
  };

  const Resume = ({ onPlayerClick }) => {
    return (
      <svg
        className="player-button"
        viewBox="0 0 60 60"
        onClick={onPlayerClick}
      >
        <polygon points="0,0 15,0 15,60 0,60" />
        <polygon points="25,0 60,30 25,60" />
      </svg>
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
    <div>
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
