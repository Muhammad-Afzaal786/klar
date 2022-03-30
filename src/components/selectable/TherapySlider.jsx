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
      <div key={idx} className="sliderPara_div">
       <div className="d-flex justify-content-between align-items-center">
       <GoArrowLeft className="lRight_icon" />
        <h1 className="text-center">{val.title}</h1>
        <GoArrowRight className="lRight_icon" />
       </div>
      <div className="init">
      <p className="paraTexts">{val.para}</p>
      </div>
      </div>
     );
    })}
   </Carousel>
  </div>
 );
}

export default TherapySlider;
