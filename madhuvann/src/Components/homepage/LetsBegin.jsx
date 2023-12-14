import React, { useState } from "react";
import photo1 from '../Assets/photo1.jpg';
import photo2 from '../Assets/photo2.jpg';
import { Link } from "react-router-dom";

import './LetsBegin.css';
function LetsBegin(){
    return(
        
        <div class='parent flex-parent' width="100%" height="22rem" background-color="white">
            <div class='child1 flex-child'  width="2500px" background-color="red">
                <p id="part1">Journey through Pixels, <br/> Not Miles</p>
                <p id="part2">Embark on a virtual expedition through our immersive virtual zoo to witness the beauty and diversity of animals, plants, and extinct animals from all over the world. 
                It is only a click away!</p>
                <div class="number">
                <p>50+ fauna specimen</p>
                <p>100+ flora specimen</p>
                </div>
                
            </div>
            <div class='child2 flex-child'  >
                
                <div class="first">
                    <div class="photo"> <img src={photo1} width="400px"></img></div>
                    <div class="text">Explore all kinds of fauna</div>
                </div>
                <div class="second">
                <div class="text">Witness the greenery</div>
                <div class="photo"> <img width="400px" src={photo2}></img></div>
                
                </div>
                
                <div class="third">
                <div class="photo"><img src={photo1} width="400px"></img></div>
                <div class="text">see them come to life</div>
                
                </div>
                
                <div class="letsButton">
                   <Link to='/FloraFaunaCards'> <button class="letsbegin">Let's Begin</button></Link>
                    </div>
            </div>
        </div>
        
    )

}
export default LetsBegin;