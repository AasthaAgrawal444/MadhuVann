import React, { useState } from "react";
import intro from "../Assets/intro.png";
import "./Introductory.css";

function Introductory() {
  return (
    <div style={{ textAlign: "center" }}>
      <img style={{ maxWidth: "98.5vw", paddingTop: "1rem" }} src={intro} />
    </div>
    // <div class="introAll">
    //   <div class="iOne ">
    //     <div class="imagePart">
    //       <div class="pic1">
    //         <img src={pic1}></img>
    //       </div>
    //     </div>
    //     <div class="textPart"></div>
    //   </div>
    //   <div class="iTwo ">
    //     <div class="textPart-left"></div>
    //     <div class="imagePart-right">
    //       <div class="pic2">
    //         <img src={pic2}></img>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="iThree ">
    //     <div class="imagePart">
    //       <div class="pic3">
    //         <img src={pic3}></img>
    //       </div>
    //     </div>
    //     <div class="textPart"></div>
    //   </div>
    // </div>
  );
}
export default Introductory;
