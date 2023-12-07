// import { NgoList } from "./NgoList";
import React from "react";

const NgoCard = (props) => {
  return (
    <div className="ngoList">
      <div key={props.id} className="ngoCard">
        <div className="cardtop">
          <img src={props.image} alt="ngo-img" className="ngoImage"></img>
          <h3>{props.name}</h3>
        </div>
        <div className="cardbottom">
          <div className="descript">{props.description}</div>
          <div className="desborder"></div>
          <div className="donatebut">
            <h2>Donate</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoCard;
