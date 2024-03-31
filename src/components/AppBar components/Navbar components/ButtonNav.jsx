import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "../../../css/ButtonNav.css";

const ButtonNav = ({ text, link }) => {
  const [active, setActive] = useState(true);

  const handlerResize = () => {
    let width = window.innerWidth;
    if ( width <= 770) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  window.addEventListener("resize", () => handlerResize());
  useEffect(() => {
    handlerResize();
    window.addEventListener("resize", () => handlerResize());
    return () => {
      window.removeEventListener("resize", () => handlerResize());
    };
  }, []);

  return (
    <Link to={link}>
      <button type="button" className="btn_nav" title={text}>
        {active ? <FaHeart className="btn-icon" /> : text}
      </button>
    </Link>
  );
};

export default ButtonNav;
