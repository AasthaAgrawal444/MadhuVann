import React, { useState } from "react";

import './IUCN.css';
function IUCN(){
    return(
            <div class="all" padding-top="200px">
                <div class="headIUCN">IUCN SCALE</div>
                <div class="intro">The IUCN Red List is a global inventory that classifies species based on their risk of extinction. It divides species into nine categories, ranging from "Least Concern" (stable populations) to "Extinct" (no individuals remaining). This scale provides a critical tool for conservation efforts by highlighting species in need of immediate attention and guiding prioritization of resources. Scientists use various criteria, including population size, decline rate, and geographic distribution, to determine a species' category, making the Red List an invaluable resource for informing conservation strategies.</div>
                <div class="buttonIUCN"><button class="one">EX</button><button class="two">EW</button><button class="three">CR</button><button class="four">EN</button><button class="five">VU</button><button class="six">NT</button><button class="seven">LC</button></div>
            <div class="iucnDoc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto similique et expedita, rem eveniet, modi asperiores praesentium repudiandae assumenda dicta impedit. Labore corrupti aut, nam animi architecto itaque fugit praesentium!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel porro ipsum consectetur modi esse minus facilis ad mollitia voluptates voluptate vitae natus labore, illo voluptatibus expedita vero numquam aut doloribus.
            </div>
            </div>
            
    )

}
export default IUCN;