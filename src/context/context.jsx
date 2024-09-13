import React, { createContext, useMemo, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { getAxios, getAxiosMutiple, handlerRequesteInstance } from "../API/API";

export const context = createContext();
let countCharacters = 0;
let countLocations = 0;
let countEpisodes = 0;
// Date API
let requestApi = await handlerRequesteInstance();

if (requestApi.data != null) {
  let { characters, locations, episodes } = requestApi.data;
  let [charactersData, locationsData, episodesData] = await getAxiosMutiple([
    getAxios(characters),
    getAxios(locations),
    getAxios(episodes),
  ]);
  countCharacters = charactersData.data.info.count;
  countLocations = locationsData.data.info.count;
  countEpisodes = episodesData.data.info.count;
}

const loadPages= ()=> window.scroll({ top: 0, left: 0, behavior: "instant" }); 

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
    value: countCharacters,
    url: urlRouter.characters,
  },
  {
    key: "LOCATIONS",
    value: countLocations,
    url: urlRouter.locations,
  },
  {
    key: "EPISODES",
    value: countEpisodes,
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
    loadPages,
  };
  return <context.Provider value={show}>{props.children}</context.Provider>;
}
