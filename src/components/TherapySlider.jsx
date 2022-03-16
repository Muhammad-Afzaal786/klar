import React from "react";
import Data from "./Data";
import Carousel from "react-elastic-carousel";
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from "react-icons/bs";
const breakPoints = [
 { width: 1, itemsToShow: 1 },
 { width: 550, itemsToShow: 1 },
 { width: 768, itemsToShow: 1 },
 { width: 1200, itemsToShow: 1 },
];
function TherapySlider() {
 return (
  <div className="scrolldiv mt-4" style={{ cursor: "pointer" }}>
   <Carousel breakPoints={breakPoints}>
    {Data.map((val, idx) => {
     return (
      <div key={idx} sliderPara_div>
       <div className="d-flex justify-content-between align-items-center mx-3">
        <BsFillArrowLeftSquareFill style={{ fontSize: "2rem", color: "#bab24a" }} />
        <h2 className="text-center">{val.title}</h2>
        <BsFillArrowRightSquareFill style={{ fontSize: "2rem", color: "#bab24a" }} />
       </div>
       <p style={{fontSize:"13px"}}>{val.para}</p>
      </div>
     );
    })}
   </Carousel>
  </div>
 );
}

export default TherapySlider;
