import React from "react";
import "../../../css/ContentClasic.css";

function ContentClasic(props) {
  return (
    <div className="ContentClasic">
      <div className="bg_img"></div>
      {props.children}
      <div className="bg-color_md"></div>
    </div>
  );
}

export default ContentClasic;
