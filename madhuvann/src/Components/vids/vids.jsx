import React from "react";
import video from "../Assets/livedownloading.com-fire-engulfs-skull-dark-2-versions-stock-footage-video-100-royalty-free-1101795561-shutterstock.mp4";

import "./vids.css";
function Vids() {
  return (
    <div className="page">
      <div className="page-div">
        <div className="image top">
          <div class="embed-responsive embed-responsive-1by1">
            {/* <iframe
              width="250px"
              height="250px"
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/vEfHE7X4vvA?si=4fNudPTrNPJx54pm?autoplay=1&rel=0&enable_js=1"
              allow="autoplay"
            ></iframe> */}
            <video width="250px" height="250px" muted autoPlay>
              <source src={video} type="video/mp4" autoPlay />
            </video>
          </div>
        </div>
        <div className="flex">
          <video
            className="image left"
            width="250px"
            height="250px"
            muted
            autoPlay
          >
            <source src={video} type="video/mp4" autoPlay />
          </video>
          <div className="square" />
          <video
            className="image right"
            width="250px"
            height="250px"
            muted
            autoPlay
          >
            <source src={video} type="video/mp4" autoPlay />
          </video>
        </div>
        <video
          className="image bottom"
          width="250px"
          height="250px"
          muted
          autoPlay
        >
          <source src={video} type="video/mp4" autoPlay />
        </video>
      </div>
    </div>
  );
}

export default Vids;
