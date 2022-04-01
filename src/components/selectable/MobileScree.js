import React from "react";
import CurrentTime from "../CurrentTime";
import CountDown from "./countDown";
import TopCarousel from "./TopCarousel";
import Document from "../../assets/Icons/Document2";
import Icon from "../../assets/Icons/icon2";
import TherapySlider from "./TherapySlider";
import { Link } from "react-router-dom";
function MobileScree(props) {
  return (
    <>
      <div className="d-block d-sm-none  MM-wrapper">
        <div className="mobile_wrapper">
          <div className="_DT">
            <CurrentTime />
          </div>
          <div className="_CT">
            <CountDown />
          </div>
          <div className="_K">
           <Link to="/encounter">
           <img src="./images/logo.png" className="img-fluid  " alt="" />
           </Link>
          </div>
        </div>





       <div className="detailCards">
       <div className="locl-data my-1">
          <div className="_LD1">
            <p>BILLED</p>
            <h1>$302</h1>
          </div>
          <div className="_LD2">
            <p>CODE UTILIZATION</p>
            <h1>4.12</h1>
          </div>
          <div className="_LD3">
            <p>EFFICIENCY</p>
            <h1>76%</h1>
          </div>
        </div>
        <div className="locl-data">
          <div className="_LD1">
            <p>BILLED</p>
            <h1>$302</h1>
          </div>
          <div className="_LD2">
            <p>CODE UTILIZATION</p>
            <h1>4.23</h1>
          </div>
          <div className="_LD3">
            <p>EFFICIENCY</p>
            <h1>76%</h1>
          </div>
        </div>
       </div>




        <div className="-Crousl_D">
          <TopCarousel
            cData={props.cData}
            addItems={props.addItems}
            box={props.box}
            isColor={props.isColor}
          />
        </div>





        <div className="drag_wrapper my-1">
          <div className="part_drag0">
            <Icon />
          </div>
          <div className="part_drag">
            <Document className="text-white" />
          </div>
        </div>


        <div className="docsSlider">
          <TherapySlider />
        </div>
      </div>
    </>
  );
}

export default MobileScree;
