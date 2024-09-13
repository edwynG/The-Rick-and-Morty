import React, { useContext, useEffect, useState } from "react";
import "../css/Footer.css";
import ItemsList from "./Footer components/ItemsList";
import { context } from "../context/context";
import { Link } from "react-router-dom";
import { getAxios, getAxiosMutiple, handlerRequesteInstance } from "../API/API";

function Footer() {
  let { urlRouter, socialNetworks, serverActions, setServerActions } =
    useContext(context);
  const [countCharacters, setCountCharacters] = useState(0);
  const [countLocations, setCountLocations] = useState(0);
  const [countEpisodes, setCountEpisodes] = useState(0);

  const refreshStatus = async () => {
    let res = await handlerRequesteInstance();
    if (!res.status) {
      setServerActions(false);
    }
  };

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

  useEffect(() => {
    refreshStatus();
    handlerRequesteInstance()
      .then((response) => {
        if (response.data != null) {
          let { characters, locations, episodes } = response.data;
          return getAxiosMutiple([
            getAxios(characters),
            getAxios(locations),
            getAxios(episodes),
          ]);
        }
        return null;
      })
      .then(([charactersData, locationsData, episodesData]) => {
        setCountCharacters(charactersData.data.info.count);
        setCountLocations(locationsData.data.info.count);
        setCountEpisodes(episodesData.data.info.count);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
        <Link to={"https://github.com/edwynG"} target="_blank">
          <span>Edwyn Guzman</span>
        </Link>
        2024
      </div>
    </footer>
  );
}

export default Footer;
