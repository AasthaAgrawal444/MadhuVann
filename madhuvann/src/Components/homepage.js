import React from "react";
import Navbar from "../Components/homepage/Navbar";
import LetsBegin from "./homepage/LetsBegin";
import Introductory from "./homepage/Introductory";
import IUCN from "./homepage/IUCN";
import Footer from "./Footer";
import GreenRectangleWithCircles from "./homepage/Florafauna";

function Homepage() {
  return (
    <div>
      <Navbar />
      <LetsBegin />
      <Introductory />
      <GreenRectangleWithCircles />

      <IUCN />
      <Footer />
    </div>
  );
}

export default Homepage;
