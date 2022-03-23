import React from "react";
import Data from "../Data";
import Carousel from "react-elastic-carousel";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const breakPoints = [
 { width: 1, itemsToShow: 1 },
 { width: 550, itemsToShow: 1 },
 { width: 768, itemsToShow: 1 },
 { width: 1200, itemsToShow: 1 },
];
function TherapySlider() {
 return (
  <div className="scrolldiv mt-2" style={{ cursor: "pointer" }}>
   <Carousel breakPoints={breakPoints}>
    {Data.map((val, idx) => {
     return (
      <div key={idx} sliderPara_div>
       <div className="d-flex justify-content-between align-items-center mx-3">
       <GoArrowLeft style={{fontSize:"3rem", color:"#BF9200"}}/>
        <h2 className="text-center">{val.title}</h2>
        <GoArrowRight style={{fontSize:"3rem", color:"#BF9200"}}/>
       </div>
       <p className="paraTexts">{val.para}</p>
      </div>
     );
    })}
   </Carousel>
  </div>
 );
}

export default TherapySlider;
