import React, { useState } from "react";
import pic1 from '../Assets/pic1.jpg';
import pic2 from '../Assets/pic2.jpg';
import pic3 from '../Assets/pic3.jpg';

import './Introductory.css';
function Introductory(){
    return(
        <div class="introAll">
            <div class="iOne " >
                <div class="imagePart"><div class="pic1" ><img src={pic1} ></img></div></div>
                <div class="textPart"></div>
            </div>
            <div class="iTwo ">
            <div class="textPart"></div>
                <div class="imagePart"><div class="pic2" ><img src={pic2} ></img></div></div>
               
            </div>
            <div class="iThree ">
                <div class="imagePart"><div class="pic3" ><img src={pic3} ></img></div></div>
               <div class="textPart"></div>
            </div>
    </div> 
    
   
        

        )

    }
    export default Introductory;