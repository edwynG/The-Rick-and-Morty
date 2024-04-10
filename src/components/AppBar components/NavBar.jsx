import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/NavBar.css";
import ButtonNav from "./Navbar components/ButtonNav";
import { context } from "../../context/context";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  let { url } = useContext(context);
  const [responsive, setResponsive] = useState(false);
  const [close, setClose] = useState(false);

  const handlerResposive = () => {
    let width = window.innerWidth;
    if (width <= 560) {
      setResponsive(true);
    } else {
      setResponsive(false);
      setClose(false);
    }
  };

  const handlerClickOpen = () => {
    setClose(!close);
  };

  const handlerClickClose = () => {
    setClose(!close);
    
  };

  useEffect(() => {
    handlerResposive();
    window.addEventListener("resize", handlerResposive);

    return () => {
      window.removeEventListener("resize", handlerResposive);
    };
  }, []);

  return (
    <nav className="nav-container">
      {responsive ? (
        <>
          <div className="container-icon_open-responsive">
            <GiHamburgerMenu
              className="icon_open-responsive"
              onClick={handlerClickOpen}
            />
          </div>
        </>
      ) : (
        ""
      )}
      <ul
        className={
          close
            ? "nav-ul responsive-ul nav-ul_responsive"
            : "nav-ul responsive-ul "
        }
      >
        {responsive ? (
          <>
            <div className="container-icon_close-responsive">
              <IoCloseSharp
                onClick={handlerClickClose}
                className="icon_close-responsive"
              />
            </div>
          </>
        ) : (
          ""
        )}
        {url.map((obj) => (
          <li key={obj.name} className={"nav-ul_li " + "nav-li_" + obj.name}>
            <Link
              key={obj.name}
              to={obj.href}
              onClick={responsive ? handlerClickClose : null}
            >
              {obj.name}
            </Link>
          </li>
        ))}

        <span onClick={responsive ? handlerClickClose : null}>
          {
            <ButtonNav
              text={"CONTACT US"}
              link={"/Contact"}
              style={
                responsive ? { backgroundColor: "var(--color_hover)" } : {}
              }
            />
          }
        </span>
      </ul>
    </nav>
  );
}

export default NavBar;
