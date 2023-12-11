import "./hologram.css";
import React from "react";

const Image = require("../Assets/PngItem_450632.png");

function Holo() {
  return (
    <div>
      <div className="image top">
        <img src={Image} alt="animal" />
      </div>
      <div className="flex">
        <div className="image left">
          <img src={Image} alt="animal" />
        </div>
        <div className="square" />
        <div className="image right">
          <img src={Image} alt="animal" />
        </div>
      </div>
      <div className="image bottom">
        <img src={Image} alt="animal" />
      </div>
    </div>
  );
}
export default Holo;
