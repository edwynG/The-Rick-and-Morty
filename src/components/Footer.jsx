import React, { useContext } from "react";
import "../css/Footer.css";
import ItemsList from "./Footer components/ItemsList";
import { context } from "../context/context";
import { Link } from "react-router-dom";

function Footer() {
  let { requestApi,sections, socialNetworks ,serverActions,setServerActions} = useContext(context);

  if (!requestApi.status) {
    setServerActions(false)
  }

  return (
    <footer className="Footer">
      <ItemsList list={sections} />
      <div className="Footer-status">
        <Link to={"https://rickandmortyapi.com/"}>SERVER STATUS</Link>
        <span className={serverActions ? "status-true" : "status-false"}></span>
      </div>
      <div className="Footer-container_img">
        <div>
          <img
            src="https://i.pinimg.com/564x/89/90/1d/89901d0db4f147c4ce11fd97fd6d241c.jpg"
            alt="image coool"
            className="Footer-img_log"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/564x/e4/92/e5/e492e5c18a7f6d7aa650b36438b75860.jpg"
            alt="image coool"
            className="Footer-img_log"
          />
        </div>
      </div>

      <ItemsList list={socialNetworks} struct={false} />

      <div className="Footer-watermark">
        ❮❯
        <Link
          to={
            socialNetworks.find(
              (obj) => obj.key.toLocaleLowerCase() == "github"
            ).url
          }
          target="_blank"
        >
          <span>Edwyn Guzman</span>
        </Link>
        2024
      </div>
    </footer>
  );
}

export default Footer;
