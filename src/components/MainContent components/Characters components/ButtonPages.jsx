import React from "react";

function ButtonPages({ funClick, conditionClassname, text, title = "" }) {
  return (
    <button
      type="button"
      onClick={funClick}
      className={conditionClassname}
      title={title == "" ? text : title}
    >
      {text}
    </button>
  );
}

export default ButtonPages;
