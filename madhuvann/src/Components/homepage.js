import React from "react";
import Navbar from "../Components/homepage/Navbar";
import LetsBegin from "./homepage/LetsBegin";
import Introductory from "./homepage/Introductory";
import IUCN from "./homepage/IUCN";
import Florafauna from "./homepage/Florafauna";
function Homepage() {
  return (
    <div>
      <Navbar />
      <LetsBegin />
      <Introductory />
      <Florafauna />
      <IUCN />
    </div>
  );
}

export default Homepage;
