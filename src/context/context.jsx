import React, { createContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

export const context = createContext();
const loadPages = () => window.scroll({ top: 0, left: 0, behavior: "instant" });

// router
const dom = "/";
let urlRouter = {
  home: dom,
  characters: dom + "Characters",
  locations: dom + "Locations",
  episodes: dom + "Episodes",
  contact: dom + "Contact",
};

// Route nav app
const url = [
  { name: "Home", href: urlRouter.home },
  { name: "Location", href: urlRouter.locations },
  { name: "Characters", href: urlRouter.characters },
  { name: "Episodes", href: urlRouter.episodes },
];
//

let socialNetworks = [
  {
    key: "GitHub",
    value: <FaGithub />,
    url: "https://github.com/edwynG/The-Rick-and-Morty.git",
  },
  {
    key: "X",
    value: <FaXTwitter />,
    url: "https://twitter.com/EdwynG7",
  },
  {
    key: "Contact us",
    value: <FaHeart />,
    url: urlRouter.contact,
  },
];
//

export function ContextProvider(props) {
  const [serverActions, setServerActions] = useState(true);

  let show = {
    serverActions,
    setServerActions,
    url,
    socialNetworks,
    urlRouter,
    loadPages,
    dom,
  };
  return <context.Provider value={show}>{props.children}</context.Provider>;
}
