import React from "react";
import maintenance from "../../../image/maintenance.gif";
import "../../../css/Maintenance.css";

function Maintenance() {
  return (
    <div className="container">
      <div className="container-title">
        <h1 className="title">Oops! Under Maintenance.</h1>
        <h4 className="subtitle">We are working to give you a better experience.</h4>
      </div>
      <div className="container-img_maintenance">
        <img src={maintenance} className="img_maintenance" />
      </div>
    </div>
  );
}

export default Maintenance;
