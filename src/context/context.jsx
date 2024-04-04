import React, { createContext, useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { getAxios, getAxiosMutiple, handlerRequesteInstance } from "../API/API";

export const context = createContext();

// Date API
let requestApi = await handlerRequesteInstance();
let { characters, locations, episodes } = requestApi.data;


let [charactersData, locationsData, episodesData] = await getAxiosMutiple([
  getAxios(characters),
  getAxios(locations),
  getAxios(episodes),
]);

// router
let urlRouter = {
  home: "/",
  characters: "/Characters",
  locations: "/Locations",
  episodes: "/Episodes",
  contact: "/Contact",
};

// Route nav app
const url = [
  { name: "Home", href: urlRouter.home },
  { name: "Location", href: urlRouter.locations },
  { name: "Characters", href: urlRouter.characters },
  { name: "Episodes", href: urlRouter.episodes },
];
//

//date Footer.
let sections = [
  {
    key: "CHARACTERS",
    value: charactersData.data.info.count,
    url: urlRouter.characters,
  },
  {
    key: "LOCATIONS",
    value: locationsData.data.info.count,
    url: urlRouter.locations,
  },
  {
    key: "EPISODES",
    value: episodesData.data.info.count,
    url: urlRouter.episodes,
  },
  
];

let socialNetworks = [
  {
    key: "GitHub",
    value: <FaGithub />,
    url: "https://github.com/edwynG",
  },
  {
    key: "X",
    value: <FaXTwitter />,
    url: "https://twitter.com/EdwynG7",
  },
  {
    key: "Contact us",
    value: <FaHeart />,
    url: "/Contact",
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
    sections,
    urlRouter,
    requestApi,
  };
  return <context.Provider value={show}>{props.children}</context.Provider>;
}
