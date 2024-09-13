import React, { useContext, useLayoutEffect, useState } from "react";
import "../../css/Characters.css";
import ContentClasic from "./Home components/ContentClasic";
import { context } from "../../context/context";
import { FaBoxes } from "react-icons/fa";
import { BsFillBox2Fill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { getAxios } from "../../API/API";
import ButtonPages from "./Characters components/ButtonPages";
import GenericCharctersCard from "./Characters components/GenericCharctersCard";
import GenericCharacterCardSample from "./Characters components/GenericCharacterCardSample";
import NoFountCard from "./Characters components/NoFountCard";
import Loanding from "./Characters components/Loanding";
import loandingIMG from "../../image/Loandig-icon.png";

const arrayDivider = (arr, divider) => {
  let cant = Math.ceil(arr.length / divider);
  let matriz = [];
  let init = 0;
  let last = divider;
  for (let i = 0; i < cant; i++) {
    const element = arr.slice(init, last);
    matriz.push(element);
    init += divider;
    last += divider;
  }
  return matriz;
};

function Characters() {
  const { requestApi } = useContext(context);
  const [characters, setCharacters] = useState([]);
  const [typeBox, setTypeBox] = useState(false);
  const [characterNext, setCharacterNext] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [found, setFound] = useState(false);
  const [pages, setPages] = useState(0);
  const [objectAPI, setObjectAPI] = useState([]);
  const [load, setLoad] = useState(false);
  const { loadPages } = useContext(context);

  const fetchCharacters = async (name = "", type = false, divider = 8) => {
    let url = type ? name : requestApi.data.characters + "/" + name;
    setLoad(true);
    try {
      let data = await getAxios(url);
      let matriz = arrayDivider(data.data.results, divider);
      setCharacterNext(matriz);
      setObjectAPI(data.data);
      setTimeout(() => {
        setLoad(false);
        setCharacters(matriz[0]);
        setPages(0);
        setFound(true);
      }, 800);
    } catch (error) {
      setLoad(false);
      setFound(false);
    }
  };

  const Next = () => {
    if (pages == characterNext.length - 1 && objectAPI.info.next != null) {
      loadPages();
      fetchCharacters(objectAPI.info.next, true);
    }
    if (pages >= characterNext.length - 1) return;
    loadPages();
    setCharacters(characterNext[pages + 1]);
    setPages(pages + 1);
  };

  const Before = () => {
    if (pages == 0 && objectAPI.info.prev != null) {
      loadPages();
      fetchCharacters(objectAPI.info.prev, true);
    }
    if (pages <= 0) return;
    loadPages();
    setCharacters(characterNext[pages - 1]);
    setPages(pages - 1);
  };

  useLayoutEffect(() => {
    fetchCharacters();
    if (localStorage.getItem("CardType") != null) {
      setTypeBox(localStorage.getItem("CardType") == "true" ? true : false);
    }
  }, []);

  return (
    <ContentClasic
      stylebgColor={{ height: "calc(100% - 300px)" }}
      stylebgImg={{ height: "300px" }}
    >
      <section className="container-characters">
        <section className="characters-options">
          <h2 style={{ fontSize: 60, padding: 10 }} className="animation-title">
            Chatacters
          </h2>
          <div className="container-inputs">
            <label className="lable_text">
              <label>
                <input
                  type="text"
                  name="Search"
                  required
                  onChange={(e) => setInputSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && inputSearch != "") {
                      fetchCharacters("?name=" + inputSearch);
                    }
                  }}
                />
                <span className="focus_text-input">Search character</span>
              </label>
              <button
                type="button"
                className="btn_search"
                onClick={() =>
                  inputSearch != ""
                    ? fetchCharacters("?name=" + inputSearch)
                    : ""
                }
              >
                <IoSearch className="icon_search" />
              </button>
            </label>
          </div>
          <div className="container-config_card">
            <div className="container-type_card">
              <ButtonPages
                funClick={() => {
                  setTypeBox(true);
                  localStorage.setItem("CardType", true);
                }}
                text={<FaBoxes />}
                title="List"
              />

              <ButtonPages
                funClick={() => {
                  setTypeBox(false);
                  localStorage.setItem("CardType", false);
                }}
                text={<BsFillBox2Fill />}
                title="Box"
              />
            </div>
          </div>
          <div className="search_details"></div>
        </section>
        <section className="container-content">
          {load && (
            <span className="loanding_character">
              <Loanding image={loandingIMG} />
            </span>
          )}
          <div className="characters-cards">
            {!typeBox && found && !load && (
              <GenericCharctersCard characters={characters} />
            )}
            {typeBox && found && !load && (
              <GenericCharacterCardSample characters={characters} />
            )}
            {!found && !load && <NoFountCard />}
          </div>

          {found && !load && (
            <div className="container-btn_characters">
              <ButtonPages
                conditionClassname={
                  pages == 0 && objectAPI.info.prev == null
                    ? "btn_disabled"
                    : ""
                }
                text={"Preview"}
                funClick={Before}
              />
              <ButtonPages
                conditionClassname={
                  pages == characterNext.length - 1 &&
                  objectAPI.info.next == null
                    ? "btn_disabled"
                    : ""
                }
                text={"Next"}
                funClick={Next}
              />
            </div>
          )}
        </section>
      </section>
    </ContentClasic>
  );
}

export default Characters;
