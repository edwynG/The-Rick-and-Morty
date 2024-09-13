import React from "react";
import "../../../css/CardCharacter.css";
let life = [
  { status: "dead", class: "bg-dead" },
  { status: "alive", class: "bg-live" },
  { status: "unknown", class: "bg-null" },
];
function CardCharacter({data}) {
  return (
    <article className="container-card">
      <section className="card-section_img">
        <img src={data.image} className="card-img " />
      </section>
      <section className="card-section_details">
        <article className="card-details_first">
          <h2 className="card-name">{data.name}</h2>
          <h4 className="card-content_live">
            <span
              className={
                "card-status_live " +
                life.find((obj) => obj.status == data.status.toLowerCase()).class
              }
            ></span>{" "}
            {data.status} - {data.species}
          </h4>
        </article>
        <article className="card-details_second">
          <h5 className="card-description">Last known location:</h5>
          <p className="card-description_text">{data.location.name}</p>
        </article>
        <article className="card-details_third">
          <h5 className="card-description">First see in:</h5>
          <p className="card-description_text">{data.origin.name}</p>
        </article>
      </section>
    </article>
  );
}

export default CardCharacter;
