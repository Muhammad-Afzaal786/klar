import React from "react";
import Carousel from "react-elastic-carousel";
import Items from "./Items";
function TopCarousel(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 5 },
   
    { width: 550, itemsToShow: 8 },
    { width: 768, itemsToShow: 8 },
    { width: 992, itemsToShow: 12 },
    { width: 1440, itemsToShow: 10 },
  ];
  return (
    <>
      <div className="smallSlider">
        <Carousel breakPoints={breakPoints}>
          {props.cData.map((val, idx) => {
            return (
              <div
                className="box_div"
                onClick={() => props.addItems(val)}
                key={idx}
              >
                <img
                  src={val.img}
                  className="img-fluid"
                  alt=""
                  style={{ borderRadius: "5px" }}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div
        className="d-flex  mt-2 "
        style={{ backgroundColor: "#B0B5b7", padding: "10px 0px" }}
      >
        <Carousel breakPoints={breakPoints}>
          {props.box.map((val, idx) => {
            console.log(val);
            return (
              <div key={idx}>
                <Items
                  style={{
                    color: "white",
                    backgroundColor: val.isFill && props.isColor,
                  }}
                >
                  {val.isFill && val.name}
                </Items>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default TopCarousel;
