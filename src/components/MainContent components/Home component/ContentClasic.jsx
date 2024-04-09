import React, { useContext, useEffect } from "react";
import "../../../css/ContentClasic.css";
import { context } from "../../../context/context";

function ContentClasic(props) {

  return (
    <div className="ContentClasic">
      <div className="bg_img"  style={props.stylebgImg}></div>
      {props.children}
      <div className="bg-color_md"  style={props.stylebgColor}></div>
    </div>
  );
}

export default ContentClasic;
