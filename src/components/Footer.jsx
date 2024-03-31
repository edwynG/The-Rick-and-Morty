import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import ItemsList from "./Footer components/ItemsList";

let sections = [
  {
    key: "CHARACTERS",
    value: 0,
    url: "/",
  },
  {
    key: "LOCATIONS",
    value: 0,
    url: "/",
  },
  {
    key: "EPISODES",
    value: 0,
    url: "/",
  },
];

let socialNetworks = [
  {
    key: "GitHub",
    value: <FaGithub />,
    url: "/",
  },
  {
    key: "X",
    value: <FaXTwitter />,
    url: "/",
  },
  {
    key: "Contact us",
    value: <FaHeart />,
    url: "/",
  },
];

function Footer() {
  return (
    <footer className="Footer">
      <ItemsList list={sections} />
      <div>
        SERVER STATUS <span>°</span>
      </div>
      <div>
        <Link to={"/"}>
          <img src="/#" alt="image coool" />
        </Link>
        <Link to={"/"}>
          <img src="/#" alt="image coool" />
        </Link>
      </div>

      <ItemsList list={socialNetworks} struct={false} />

      <div>log-marca de agua</div>
    </footer>
  );
}

export default Footer;
