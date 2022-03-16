import React, { useEffect, useState } from "react";
import CurrentTime from "./CurrentTime";
import Carousel from "react-elastic-carousel";
import Data from "./Data";
//import Item from "./Item";
import Items from "./Items";
import TherapySlider from "./TherapySlider";
import CountDown from "./countDown";
//import InputBox from "./inputBox";
import { AiOutlineContainer } from "react-icons/ai";
import { IoMdDocument } from "react-icons/io";
import { Link } from "react-router-dom";
import Data2 from "./Data2";

const breakPoints = [
 { width: 1, itemsToShow: 6 },
 { width: 550, itemsToShow: 8},
 { width: 768, itemsToShow: 8},
 { width: 1200, itemsToShow: 8},
];
function SelectTest() {
 const [cData, setCdata] = useState(Data);
 const [list, setList] = useState([]);
 const [box, setBox] = useState(Data2);

 const [isColor, setColor] = useState(false);
 console.log(box);

 useEffect(() => {
  setList(list);
 }, [list]);

 const addItems = (item) => {
  setList([...list, item]);
  setCdata(cData);
  setColor(true);
  setColor("#002628");
  let sameData = list.includes(item);
  if (!sameData) {
   list.push(item);
   for (let i = 0; i < box.length; i++) {
    if (box[i].isFill === false) {
     box[i] = item;
     setBox(box);
     break;
    }
   }
  }
  console.log(box);

  //   setList([...list, item]);
  //   console.log(list.find((curItem) => curItem.id === item.id));
  //   //console.log(item)
  //   console.log(list);
  //   setCdata(cData);
  //   console.log(item);
  //   setColor(color)
 };

 return (
  <div>
   <div className="container-fluid">
    <div className="row">
     <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 colDiv4 ">
      <CurrentTime />

      <div className="cardsItems">
       <div className="boxtText">
        <p>BILLED</p>
        <h1>$302</h1>
       </div>
       <div className="boxtText">
        <p>CODE UTILIZATION</p>
        <h1>4.12</h1>
       </div>
       <div className="boxtText">
        <p>EFFICIENCY</p>
        <h1>76%</h1>
       </div>
       <div className="boxtText">
        <AiOutlineContainer style={{ fontSize: "6rem" }} />
       </div>
      </div>
     </div>
     <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 my-2" style={{ background: "white", padding: "0px" }}>
      <div className="smallSlider">
       <Carousel breakPoints={breakPoints}>
        {cData.map((val, idx) => {
         return (
          <div className="box_div" onClick={() => addItems(val)} key={idx}>
           <img src={val.img} className="img-fluid" alt="" style={{ borderRadius: "10px" }} />
          </div>
         );
        })}
       </Carousel>
      </div>
      <div className="d-flex  mt-2 " style={{ backgroundColor: "#bbbbbb", padding: "10px 0px" }}>
       <Carousel breakPoints={breakPoints}>
        {box.map((val, idx) => {
         console.log(val);
         return (
          <div key={idx}>
           <Items style={{ color: "white", backgroundColor: val.isFill && isColor }}>{val.isFill && val.name}</Items>
          </div>
         );
        })}
       </Carousel>

       {/* {show && <Items>1</Items>}
       {second && <Items>2</Items>}
       {third && <Items>3</Items>}
       <Items>4</Items>
       <Items className="emptyBox1">6</Items>
       <Items className="emptyBox1">5</Items>

       <Items className="emptyBox">7</Items>
       <Items className="emptyBox">8</Items>
       <Items className="emptyBox">9</Items> */}
      </div>

      <div className="countDown_div">
       <h1>
        <CountDown />
       </h1>
      </div>
      <div>
       <TherapySlider />
      </div>
     </div>
     <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 colDiv4">
      <Link
       to="/encounter"
       className="btn btn-light d-flex justify-content-center p-0"
       style={{ background: "none", border: "none" }}
      >
       <img src="./images/Logo_black.png" className="img-fluid img_btn w-75 " alt="" />
      </Link>
      <div>
       <div className="boxtText">
        <p>CURRENT </p>
        <h1>NmRE</h1>
       </div>
       <div className="boxtText">
        <p>CHARGE RATE</p>
        <h1>$343</h1>
       </div>
       <div className="boxtText">
        <p>EFFICIENCY</p>
        <h1>76%</h1>
       </div>
       <div className="boxtText">
        <IoMdDocument style={{ fontSize: "6rem" }} />
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default SelectTest;
