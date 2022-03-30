import React, { useEffect, useState } from "react";
import CurrentTime from "./CurrentTime";
import Data from "./Data";
import Data2 from "./Data2";
import "./sample.css";
import TopCarousel from "./selectable/TopCarousel";
import CountDown from "./selectable/countDown";
import TherapySlider from "./selectable/TherapySlider";
import Icon from "../assets/Icons/icon";
import { Link } from "react-router-dom";
function Sample() {
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
      <div className="main">
        <div className="small">
          <div className="smallCard">
            <div style={{color:"white"}}><CurrentTime/></div>
            <div className="textB">
              <p>BILLED</p>
              <h1>$302</h1>
            </div>
            <div className="textB">
              <p>CODE UTILIZATION</p>
              <h1>4.12</h1>
            </div>
            <div className="textB">
              <p>EFFICIENCY</p>
              <h1>76%</h1>
            </div>
            <div style={{ backgroundColor: "white", color: "grey" }}>
              <Icon />
            </div>
          </div>
        </div>
        <div className="big">
          <div className="big-main">
            <div className="first">
              <TopCarousel
                cData={cData}
                addItems={addItems}
                box={box}
                isColor={isColor}
              />
            </div>
            <div className="second">
              <CountDown />
            </div>
            <div className="third">
              <TherapySlider />
            </div>
          </div>
        </div>
        <div className="small">
          <div className="smallCard">
          <div style={{color:"white"}}><Link
            to="/encounter"
            className="btn btn-light d-flex justify-content-center p-0"
            
          >
            <img
              src="./images/logo.png"
              className="img-fluid  "
              alt=""
            />
          </Link></div>
            <div className="textB">
              <p>BILLED</p>
              <h1>$302</h1>
            </div>
            <div className="textB">
              <p>CODE UTILIZATION</p>
              <h1>4.12</h1>
            </div>
            <div className="textB">
              <p>EFFICIENCY</p>
              <h1>76%</h1>
            </div>
            <div style={{ backgroundColor: "white", color: "grey" }}>
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sample;
