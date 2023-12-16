import React, { useState, useEffect } from "react";

const TextToSpeechToggle = ({ textToRead }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
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
      <button onClick={toggleSpeech}>
        {isSpeaking ? "Stop Speaking" : "Start Speaking"}
      </button>
    </div>
  );
};

export default TextToSpeechToggle;
