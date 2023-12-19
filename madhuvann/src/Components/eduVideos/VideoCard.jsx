// import { NgoList } from "./NgoList";
import React from "react";

const VideosCard = (props) => {
  return (
    <div className="videoList">
      <div key={props.id} className="videoCard">
        <div className="cardtops">
        <a href={props.url}>
          <img src={props.image} alt="video-img" className="videoImage"></img>
        </a>
        </div>
        <div className="cardbots">
         <h1>{props.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default VideosCard;
