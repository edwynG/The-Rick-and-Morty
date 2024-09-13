import React from "react";
import "../../../css/Loanding.css";

function Loanding({ image }) {
  return (
    <div className="Loanding-container">
      <img src={image} />
    </div>
  );
}

export default Loanding;
