import React from "react";
import "../App.css";

function Stepper() {
  return (
    <div>
      <div className="row mt-3 mb-4">
        <div className="circle-container">
          <div className="circle active "></div>
          <div className="circle "></div>
          <div className="circle "></div>
          <div className="circle "></div>
          <div className="circle "></div>
          <div className="circle "></div>
          <div className="circle "></div>
        </div>
      </div>
    </div>
  );
}

export default Stepper;
