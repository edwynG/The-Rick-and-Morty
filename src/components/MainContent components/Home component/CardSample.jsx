import React from "react";
import "../../../css/CardSample.css";

function CardSample({ content , style={}}) {
  return (
    <div className="card-container" key={content.title} style={style}>
      <div>{content.svg}</div>
      <h4>{content.title}</h4>
      <p>{content.content}</p>
    </div>
  );
}

export default CardSample;
