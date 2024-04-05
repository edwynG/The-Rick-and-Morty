import React, { useContext, useEffect } from "react";
import "../../../css/ContentClasic.css";
import { context } from "../../../context/context";

function ContentClasic(props) {
  let {backgroundColor,backgroundImg} = useContext(context)
  return (
    <div className="ContentClasic">
      <div className="bg_img" ref={backgroundImg} style={props.stylebgImg}></div>
      {props.children}
      <div className="bg-color_md" ref={backgroundColor} style={props.stylebgColor}></div>
    </div>
  );
}

export default ContentClasic;
