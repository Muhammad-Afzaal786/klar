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
 { width: 1, itemsToShow: 4 },
 { width: 550, itemsToShow: 8 },
 { width: 768, itemsToShow: 8 },
 { width: 1200, itemsToShow: 8 },
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
  setColor("#006266");
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
    <div className="row" style={{ height: "100vh" }}>
     <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 colDiv4" style={{ height: "auto" }}>
      <CurrentTime />

      <div className="mt-2">
       <div style={{ backgroundColor: "grey", textAlign: "center", margin: "5px 0px", padding: "10px" }}>
        <p>BILLED</p>
        <h1>$302</h1>
       </div>
       <div style={{ backgroundColor: "grey", textAlign: "center", margin: "15px 0px", padding: "10px" }}>
        <p>CODE UTILIZATION</p>
        <h1>4.12</h1>
       </div>
       <div style={{ backgroundColor: "grey", textAlign: "center", margin: "5px 0px", padding: "10px" }}>
        <p>EFFICIENCY</p>
        <h1>76%</h1>
       </div>
       <div
        style={{ backgroundColor: "grey", textAlign: "center", margin: "15px 0px", padding: "10px", color: "white" }}
       >
        <AiOutlineContainer style={{ fontSize: "6rem" }} />
       </div>
      </div>
     </div>
     <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 my-2" style={{ background: "white" }}>
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
      <div className="d-flex  mt-2 ">
       <Carousel breakPoints={breakPoints}>
        {box.map((val, idx) => {
         console.log(val);
         return (
          <div key={idx}>
           <Items style={{ color: "white", backgroundColor:val.isFill && isColor }}>{val.isFill && val.name}</Items>
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
     <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 colDiv4" style={{ height: "auto" }}>
      <Link
       to="/encounter"
       className="btn btn-light d-flex justify-content-center"
       style={{ background: "none", border: "none" }}
      >
       <img src="./images/Logo_black.png" className="img-fluid img_btn w-100 " alt="" />
      </Link>
      <div className="mt-2">
       <div style={{ backgroundColor: "grey", textAlign: "center", margin: "5px 0px", padding: "10px" }}>
        <p>CURRENT CODE</p>
        <h1>NmRE</h1>
       </div>
       <div style={{ backgroundColor: "grey", textAlign: "center", margin: "15px 0px", padding: "10px" }}>
        <p>CHARGE RATE</p>
        <h1>$343</h1>
       </div>
       <div
        style={{ backgroundColor: "grey", textAlign: "center", margin: "15px 0px", padding: "10px", color: "white" }}
       >
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
