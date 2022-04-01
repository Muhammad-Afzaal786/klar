import React, { useEffect, useState, useContext } from "react";
import CurrentTime from "../components/CurrentTime";
import "./index.css";
import { ImArrowUp } from "react-icons/im";
import TopCarousel from "../components/selectable/TopCarousel";
import { Link } from "react-router-dom";
import { UserContext } from "../components/context/UserContext";

function Selectbox() {
  const {
    cData,
    setCdata,
    list,
    setList,
    box,
    setBox,
    isColor,
    setColor,
    show,
    setShow,
  } = useContext(UserContext);


  const remove = (id)=>{
   console.log(id)
   const removeData = list.filter((elem , ind)=>{
          return ind !== id;
   }) 
   setList(removeData())
  }

  useEffect(() => {
    localStorage.getItem("setData");
  }, []);

  console.log(list, "List");
  let showData = (items) => {
    if (items === show) {
      setShow(list.length >= [2]);
    }
  };

  const addItems = (item) => {
    localStorage.setItem("setData", JSON.stringify(list));
    setList([...list, item]);
    setShow(showData);
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
    } else {
    }
  };
  return (
    <div>
      <div className="box_wrappr">
        <div className="small_box">
          <div className="text-white">
            <CurrentTime />
          </div>
        </div>
        <div className="big_box">
          <div className="main_box">
            <div className="_FB">
              <TopCarousel
                cData={cData}
                addItems={addItems}
                box={box}
                isColor={isColor}
                remove={remove}
              />
            </div>
            <div className="_SB">
              {show ? (
                <div className="img-title">
                  <Link
                    to="/select"
                    className="btn btn-light"
                    style={{ background: "none", border: "none" }}
                  >
                    <img
                      src="./images/logo.png"
                      className="img-fluid box-img"
                      alt=""
                    />
                  </Link>

                  <ImArrowUp className="top_arrow" />
                  <h1>Touch to start</h1>
                </div>
              ) : (
                <div className="time_line">
                  <ImArrowUp className="top_arrow1" />
                  <h3>Drag to tile</h3>
                  <h3>to your</h3>
                  <h3>timeline</h3>
                </div>
              )}
            </div>
            <div className="_TB"></div>
          </div>
        </div>
        <div className="small_box1"></div>
      </div>
    </div>
  );
}

export default Selectbox;
