import React, { useEffect, useRef } from "react";
import video from "../Assets/The Jungle Book Hindi _ Mowgli Story _ Opening Song _ Jungle Jungle Baat Chali Hai.mp4";
import "./vid1.css";

function Vid2() {
  const vid1Ref = useRef(null);
  const vid2Ref = useRef(null);
  const vid3Ref = useRef(null);
  const vid4Ref = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      vid1Ref.current.play();
      vid2Ref.current.play();
      vid3Ref.current.play();
      vid4Ref.current.play();
    };

    const clickmeButton = document.getElementById("clickme");

    if (clickmeButton) {
      clickmeButton.addEventListener("click", handleClick);

      // Cleanup the event listener when the component unmounts
      return () => {
        clickmeButton.removeEventListener("click", handleClick);
      };
    }
  }, []); // Empty dependency array ensures useEffect runs only once after the initial render

  return (
    <div className="page">
      <div className="page-div">
        <div className="image top kid">
          <div className="embed-responsive embed-responsive-1by1">
            <video width="250px" height="250px" id="vid1" ref={vid1Ref}>
              <source src={video} type="video/mp4" autoPlay />
            </video>
          </div>
        </div>
        <div className="flex">
          <video
            className="image left kid"
            width="250px"
            height="250px"
            id="vid2"
            ref={vid2Ref}
          >
            <source src={video} type="video/mp4" autoPlay />
          </video>
          <div className="square" />
          <video
            className="image right kid"
            width="250px"
            height="250px"
            id="vid3"
            ref={vid3Ref}
          >
            <source src={video} type="video/mp4" autoPlay />
          </video>
        </div>
        <div className="bot_div">
          <video
            className="image below kid"
            width="250px"
            height="250px"
            id="vid4"
            ref={vid4Ref}
          >
            <source src={video} type="video/mp4" autoPlay />
          </video>
        </div>
      </div>

      <button id="clickme">click me</button>
    </div>
  );
}

export default Vid2;
