import React from "react";

import './IUCN.css';

const extinct = ()=>{
    document.getElementById('iucnDoc').innerHTML="A taxon is Extinct when there is no reasonable doubt that the last individual has died. A taxon is presumed Extinct when exhaustive surveys in known and/or expected habitat, at appropriate times  throughout its historic range have failed to record an individual. Surveys should be over a time frame appropriate to the taxon life cycle and life form.";
    document.getElementById('iucnHead').innerHTML="Extinct ";
    // document.getElementByClassName('.EX').classList.add("pressed");
    //       setTimeout(function(){
    //         document.getElementsByClassName('EX').classList.remove("pressed");
    //          }, 300); 
   
}
const extinctInWild = ()=>{
    document.getElementById('iucnDoc').innerHTML="A taxon is Extinct in the Wild when it is known only to survive in cultivation, in captivity or as a naturalized population (or populations) well outside the past range. A taxon is presumed Extinct in the Wild when exhaustive surveys in known and/or expected habitat, at appropriate times (diurnal, seasonal, annual), throughout its historic range have failed to record an individual. Surveys should be over a time frame appropriate to the taxon’s life cycle and life form. ";
    document.getElementById('iucnHead').innerHTML="Extinct In Wild";
}
const criticallyEndangered= ()=>{
    document.getElementById('iucnDoc').innerHTML="A taxon is Critically Endangered when the best available evidence indicates that it meets any of the criteria A to E for Critically Endangered , and it is therefore considered to be facing an extremely high risk of extinction in the wild.";
    document.getElementById('iucnHead').innerHTML="Critically Endangered";
}
const endangered = ()=>{
    document.getElementById('iucnDoc').innerHTML="A taxon is Endangered when the best available evidence indicates that it meets any of the criteria A to E for Endangered, and it is therefore considered to be facing  a very high risk of extinction in the wild.";
    document.getElementById('iucnHead').innerHTML="Endangered";
}
const vulnerable = ()=>{
    document.getElementById('iucnDoc').innerHTML="A taxon is Vulnerable when the best available evidence indicates that it meets any of the criteria A to E for Vulnerable , and it is therefore considered to be facing a high risk of extinction in the wild.";
    document.getElementById('iucnHead').innerHTML="Vulnerable";
}
const nearThreatened = ()=>{
    document.getElementById('iucnDoc').innerHTML="A taxon is Near Threatened when it has been evaluated against the criteria but does not  qualify for Critically Endangered, Endangered or Vulnerable now, but is close to qualifying for or is likely to qualify for a threatened category in the near future.";
    document.getElementById('iucnHead').innerHTML="Near threatened";
}
const leastConcern = ()=>{
    document.getElementById('iucnDoc').innerHTML="A taxon is Least Concern when it has been evaluated against the criteria and does not qualify for Critically Endangered, Endangered, Vulnerable or Near Threatened. Widespread and abundant taxa are included in this category";
    document.getElementById('iucnHead').innerHTML="Least Concern";
}

// document.querySelector(".amb").addEventListener("click",function(){
//         var content=this.innerHTML;
//         buttonAnimation(content);

// });
// function buttonAnimation(content){
//     var activeButton=document.querySelector("."+content);
//         activeButton.classList.add("pressed");
//         setTimeout(function(){
//              activeButton.classList.remove("pressed");
//         }, 300); 
// }

// document.querySelectorAll(".buttonIUCN").addEventListener("click",function (){
      
//     var content=this.innerHTML;
    
//     buttonAnimation(content);
//     });
// function buttonAnimation(evemt)
// {
//         var activeButton=document.querySelector("."+evemt);
//         activeButton.classList.add("pressed");
//         setTimeout(function(){
//              activeButton.classList.remove("pressed");
//         }, 300); 
        
        
// }

function IUCN(){
    return(
            <div class="all" padding-top="200px">
                <div class="headIUCN">IUCN SCALE</div>
                <div class="intro">The IUCN Red List is a global inventory that classifies species based on their risk of extinction. It divides species into nine categories, ranging from "Least Concern" (stable populations) to "Extinct" (no individuals remaining). This scale provides a critical tool for conservation efforts by highlighting species in need of immediate attention and guiding prioritization of resources. Scientists use various criteria, including population size, decline rate, and geographic distribution, to determine a species' category, making the Red List an invaluable resource for informing conservation strategies.</div>
                <div class="buttonIUCN">
                    <button class="EX amb" onClick={extinct} >EX</button>
                    <button class="EW amb" onClick={extinctInWild}>EW</button>
                    <button class="CR amb" onClick={criticallyEndangered}>CR</button>
                    <button class="EN amb" onClick={endangered}>EN</button>
                    <button class="VU amb" onClick={vulnerable}>VU</button>
                    <button class="NT amb" onClick={nearThreatened}>NT</button>
                    <button class="LC amb" onClick={leastConcern}>LC</button>
                    </div>
            <div class="iucnBlock">
            <p id="iucnHead">Extinct In Wild</p>
            <p id="iucnDoc">
            A taxon is Extinct when there is no reasonable doubt that the last individual has died. A taxon is presumed Extinct when exhaustive surveys in known and/or expected habitat,
at appropriate times (diurnal, seasonal, annual), throughout its historic range have failed
to record an individual. Surveys should be over a time frame appropriate to the taxon’s
life cycle and life form.
            </p>
            </div>
            
            </div>
            
    )

}
export default IUCN;