import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
function Slider() {
  const STEP = 15;
  const MIN = 15;
  const MAX = 75;
  const [values, setValues] = useState([30]);
  return (
    <div className="px-4">
      <h2 className="apointment_div">
        My next appointment is <span className="apointment_div2 mx-2">{values}</span>
        <small className="min">min</small>
      </h2>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => {
          console.log(values);
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#0fb9b1", "#ecf0f1", "white"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "22px",
              width: "22px",
              borderRadius: "50px",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "10px",
                width: "5px",
                backgroundColor: isDragged ? "white" : "white",
              }}
            />
          </div>
        )}
      />
      <div className="d-flex justify-content-between" style={{ color: "grey" }}>
        <span className="min_range">20min</span>
        <span className="min_range">75min</span>
      </div>
    </div>
  );
}

export default Slider;
