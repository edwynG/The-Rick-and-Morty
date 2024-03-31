import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../css/NavBar.css";
import ButtonNav from "./Navbar components/ButtonNav";
import { context } from "../../context/context";

function NavBar() {
  let { url } = useContext(context);

  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        {url.map((obj) => (
          <li key={obj.name} className={"nav-ul_li " + "nav-li_" + obj.name}>
            <Link key={obj.name} to={obj.href}>
              {obj.name}
            </Link>
          </li>
        ))}
        {<ButtonNav text={"CONTACT US"} link={"/Contact"} />}
      </ul>
    </nav>
  );
}

export default NavBar;
