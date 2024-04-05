import React, { useContext, useEffect, useState } from "react";
import "../../css/Characters.css";
import ContentClasic from "./Home component/ContentClasic";
import CardCharacter from "./Characters components/CardCharacter";
import { context } from "../../context/context";
import { MdHeight } from "react-icons/md";

function Characters() {
  // let { backgroundColor, backgroundImg } = useContext(context);
  // let [bgColor, setBgColor] = useState(null)
  // let [bgImg, setBgImg] = useState(null)

  // const handlerBackground = () => {
  //   console.log(
  //     backgroundColor.current.offsetHeight,
  //     backgroundImg.current.offsetHeight
  //   );
  //   setBgColor(backgroundColor.current.offsetHeight)
  //   setBgImg(backgroundImg.current.offsetHeight)
  // };
  // useEffect(() => {
  //   handlerBackground();
  //   window.addEventListener("resize", handlerBackground);
  //   return () => {
  //     window.removeEventListener("resize", handlerBackground);
  //   };
  // }, []);

  return (
    <ContentClasic stylebgColor={{height:"calc(100% - 280px)"}} stylebgImg={{height:"300px"}}>
      <section className="container-characters">
        <div style={{height:"280px"}}></div>
        <section
          className="characters-cards"
       
        >
          <CardCharacter />
          <CardCharacter />
          <CardCharacter />
          <CardCharacter />
          <CardCharacter />
          <CardCharacter />
        </section>
      </section>
    </ContentClasic>
  );
}

export default Characters;
