import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "../../../css/ButtonNav.css";

const ButtonNav = ({ text, link, responsive = true,style={} }) => {
  const [active, setActive] = useState(false);

  const handlerResize = () => {
    let width = window.innerWidth;
    if ((width <= 920 )&& (width > 560)) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  if (responsive) {
    useEffect(() => {
      handlerResize();
      window.addEventListener("resize", () => handlerResize());
      return () => {
        window.removeEventListener("resize", () => handlerResize());
      };
    }, []);
  }
  let query = responsive ? "btn_nav btn_nav-responsive" : "";

  return (
    <Link to={link}>
      <button type="button" className={active ? query : "btn_nav"} title={text} style={style}>
        {active ? <FaHeart className="btn-icon" /> : text}
      </button>
    </Link>
  );
};

export default ButtonNav;
