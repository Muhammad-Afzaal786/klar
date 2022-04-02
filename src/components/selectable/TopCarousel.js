import React, { useContext } from "react";
import Carousel from "react-elastic-carousel";
import Items from "./Items";
import { UserContext } from "../../components/context/UserContext";

function TopCarousel(props) {
  const {
  
    list,
    setList
  } = useContext(UserContext);

  const breakPoints = [
    { width: 1, itemsToShow: 5 },

    { width: 550, itemsToShow: 8 },
    { width: 768, itemsToShow: 8 },
    { width: 992, itemsToShow: 12 },
    { width: 1440, itemsToShow: 10 },
  ];

  const remove = (id) => {
    alert("Any Error in Unselect box Filtering")
    console.log(id);
    const removeData = list.filter((elem, ind) => {
      return ind !== id;
    });
    setList(removeData);
  };

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
            return (
              <div key={idx}>
                <Items
                  style={{
                    color: "white",
                    backgroundColor: val.isFill && props.isColor,
                  }}
                  
                >
                  <span  onClick={() =>remove(val.id)}>
                    {val.isFill && val.name}
                  </span>
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
