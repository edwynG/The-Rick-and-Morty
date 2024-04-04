import React, { useContext } from "react";
import "../../css/Home.css";
import ButtonNav from "../AppBar components/Navbar components/ButtonNav";
import { context } from "../../context/context";
import CardSample from "./Home component/CardSample";
import { Link } from "react-router-dom";
import ContentClasic from "./Home component/ContentClasic";
import { FaGhost } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { PiTelevisionFill } from "react-icons/pi";

let config = {
  padding: "18px 70px",
  fontSize: "16px",
};

function Home() {
  let { urlRouter } = useContext(context);

  let informationCard = [
    {
      svg: <FaGhost style={{color:"#ffff"}}/>,
      title: "Characters",
      content: "You can search for your favorite characters",
      to: urlRouter.characters,
    },
    {
      svg: <IoLocationSharp/>,
      title: "Locations",
      content: "You discover the details of the locations",
      to: urlRouter.locations,
    },
    {
      svg: <PiTelevisionFill/>,
      title: "Episodes",
      content: "Read details about the episodes of the series",
      to: urlRouter.episodes,
    },
  ];

  return (
    <ContentClasic>
      <section className="Section-container">
        <section className="Home-container_details">
          <div className="details-container">
            <span>
              <p>
                Discover details you didn't know about your favorite character.
              </p>
              <h1>The Rick and Morty</h1>
              <h2>Characters</h2>
            </span>
            <ButtonNav
              text={"Let's start now"}
              link={urlRouter.characters}
              responsive={false}
              style={config}
            />
          </div>
        </section>
        <section className="Home-container_box">
          {informationCard.map((obj, i) => {
            return (
              <Link to={obj.to} key={i}>
                <CardSample content={obj} style={{ cursor: "pointer",  width:"290px", }} />;
              </Link>
            );
          })}
        </section>
      </section>
    </ContentClasic>
  );
}

export default Home;
