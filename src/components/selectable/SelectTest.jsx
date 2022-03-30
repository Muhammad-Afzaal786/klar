import React, { useEffect, useState } from "react";
import CurrentTime from "../CurrentTime";
import "./select.css";
import Data from "../Data";
//import Item from "./Item";
import MobileScree from "./MobileScree";

import TherapySlider from "./TherapySlider";
import CountDown from "./countDown";
import TopCarousel from "./TopCarousel";
import { Link } from "react-router-dom";
import Data2 from "../Data2";

import Icon from "../../assets/Icons/icon";
import Document from "../../assets/Icons/Document";

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
  };

  return (
    <>
      <MobileScree
        cData={cData}
        addItems={addItems}
        box={box}
        isColor={isColor}
      />
      {/* =========  Large Screen ===== */}

      <div className="select_wrappr ">
        <div className="select_clm">
          <div className="text-white">
            <CurrentTime />
          </div>

          <div className="boxtText mt-2">
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
          <div
            className="boxtText"
            style={{ backgroundColor: "white", color: "grey" }}
          >
            <Icon />
          </div>
        </div>
        <div className="select_big_clm">
          <div
            style={{ background: "white", padding: "0px" }}
            className="topCaro"
          >
            <TopCarousel
              cData={cData}
              addItems={addItems}
              box={box}
              isColor={isColor}
            />
          </div>
          <div className="countDown_div">
            <CountDown />
          </div>

          <div className="thrapy">
            <TherapySlider />
          </div>
        </div>

        <div className="select_clm">
          <Link
            to="/encounter"
            className="btn btn-light d-flex justify-content-center p-0"
            style={{ background: "none", border: "none" }}
          >
            <img
              src="./images/logo.png"
              className="img-fluid select-img "
              alt=""
            />
          </Link>
          <div className="boxtText mt-0">
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
          <div className="boxtText" style={{ backgroundColor: "white" }}>
            <Document />
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectTest;
