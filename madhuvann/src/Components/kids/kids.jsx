import React from "react";

import "./kids.css";
import Navbar from "../homepage/Navbar";
import { Link } from "react-router-dom";
import img1 from "../Assets/hq720.jpg";
import img2 from "../Assets/vid_2.jpg";
function Kids() {
  return (
    <div className="pagekids">
      <Navbar />
      <div>
        <Link to="/vid1">
          <img className="circle" src={img1} />
        </Link>
      </div>
      <div>
        <Link to="/vid2">
          <img className="circle" src={img2} />
        </Link>
      </div>{" "}
      <div>
        <Link to="/vid1">
          <img className="circle" src={img1} />
        </Link>
      </div>{" "}
      <div>
        <Link to="/vid1">
          <img className="circle" src={img1} />
        </Link>
      </div>
    </div>
  );
}

export default Kids;
