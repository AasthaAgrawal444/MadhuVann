import React from "react";
import Navbar from "./homepage/Navbar";
import LetsBegin from "./homepage/LetsBegin";
import Introductory from "./homepage/Introductory";
import IUCN from "./homepage/IUCN";
import Florafauna from "./Florafauna";


function Homepage() {
  return (
    
    <div>
      <Navbar />
      <LetsBegin />
      <Introductory />


      <IUCN/>
      <Florafauna/>
      
    </div>
  );
}

export default Homepage;