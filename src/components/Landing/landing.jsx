import React from "react";
import { Link } from "react-router-dom";
import CurrentTime from "../CurrentTime";
import {useDispatch,useSelector} from "react-redux"
import "./index.css";


function landing() {
  const dispatch = useDispatch();
  const {val} = useSelector(state => state.custom)
  const inc = ()=>{
    dispatch({
      type:"increament",
    })
  };
  return (
    <>
      <div className="main_wrappr">
        
        <div className="small_clm">
          <div className="text-white">
            <CurrentTime />
          </div>
        </div>
        <div className="big_clm">
        <div>
          <h1>{val}</h1>
          <button onClick={inc}>add</button>
        </div>
          <input type="text" className="input_div" placeholder="username" />
          <input type="password" className="input_div" placeholder="password" />
          <Link
            to="/progress"
            className="btn btn-light"
            style={{ background: "none", border: "none" }}
          >
            <img
              src="./images/logo.png"
              className="img-fluid klar-img"
              alt=""
            />
          </Link>
        </div>
        <div className="small_clm"></div>
      </div>
    </>
  );
}

export default landing;
