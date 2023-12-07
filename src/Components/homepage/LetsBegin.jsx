import React, { useState } from "react";

import './LetsBegin.css';
function LetsBegin(){
    return(
        
        <div class='parent flex-parent' width="100%" height="22rem" background-color="white">
            <div class='child1 flex-child'  width="2500px" background-color="red">
                <p id="part1">Journey through Pixels,<br></br>      Not Miles</p>
                <p id="part2">Embark on a virtual expedition through our immersive virtual zoo to witness the beauty and diversity of animals, plants, and extinct animals from all over the world. 
It is only a click away!</p>
            </div>
            <div class='child2 flex-child'  background-color="blue">
                <div class="first">Explore all kinds of fauna</div>
                <div class="second">Witness the greenery</div>
                <div class="third">see them come to life</div>
                <button class="letsbegin">Let's Begin</button>
            </div>
        </div>
        
    )

}
export default LetsBegin;