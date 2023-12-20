import React from "react";
import "./Videos.css";
import VideoCard from "./VideoCard";
import VideosList from "./VideosList";
import Navbar from "../homepage/Navbar";

const Videos = () => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/seSCa5k7ICM?si=hse5kZ4zAKZpd-JQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="cocards">
        {VideosList.map((VideoList) => (
          <VideoCard
            key={VideoList.id}
            image={VideoList.image}
            url={VideoList.url}
            name={VideoList.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Videos;
