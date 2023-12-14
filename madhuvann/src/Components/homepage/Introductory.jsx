import React, { useState } from "react";
import pic1 from '../Assets/pic1.jpg';
import pic2 from '../Assets/pic2.jpg';
import pic3 from '../Assets/pic3.jpg';

import './Introductory.css';
function Introductory(){
    return(
        <div class="introAll">
            <div class="iOne " >
                <div class="imagePart"><div  height="4rem"><img class="pic1" src={pic1} ></img></div></div>
                <div class="textPart">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio maxime dolorem ducimus recusandae tenetur eligendi qui aut autem ipsam delectus modi, quos voluptas consequatur libero, praesentium facere, sequi dolore?</div>
            </div>
            <div class="iTwo ">
            <div class="textPart">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium, maiores quasi sint accusantium quis reiciendis! Rerum facilis officia tempora inventore numquam vero aperiam hic. Fuga quos labore voluptatibus praesentium.</div>
                <div class="imagePart"><div  height="4rem"><img class="pic2" src={pic2} ></img></div></div>
               
            </div>
            <div class="iThree ">
                <div class="imagePart"><div  height="4rem"><img class="pic3" src={pic3} ></img></div></div>
               <div class="textPart">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet eius soluta, quam asperiores enim nobis quasi quibusdam repellendus ab voluptas beatae delectus incidunt non doloribus maiores! Dolore, inventore voluptatem?</div>
            </div>
    </div> 
    
   
        

        )

    }
    export default Introductory;