import React from "react";
import "../../../css/CardSample.css";

function CardSample({ content , style={} , extra="", hover=""}) {
  return (
    <div className={"card-container " + hover} key={content.title} style={style}>
      <div style={{fill:"inherit"}}>{content.svg}</div>
      <h4  style={{color:"inherit"}}>{content.title}</h4>
      <p  style={{color:"inherit"}}>{content.content}</p>
      <>{extra}</>

    </div>
  );
}

export default CardSample;
