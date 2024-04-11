import React, { useContext } from "react";
import "../css/AppBar.css";
import NavBar from "./AppBar components/NavBar";
import icon from "../image/icon_navbar-bg_tranparent.png";
import { Link } from "react-router-dom";
import { context } from "../context/context";

function AppBar() {
  let {url,loadPages}=useContext(context)

  return (
    <header className="Header">
      <div className="header-container">
        <div className="header-container_logo">
          <Link  to={url.find((obj)=> obj.name == 'Home').href}>
            <img src={icon} alt={document.title} title={document.title} className="header-logo"  onClick={loadPages}/>
          </Link>
        </div>
        <NavBar />
      </div>
    </header>
  );
}

export default AppBar;
