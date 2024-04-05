import React from "react";
import "../../../css/CardCharacter.css";

function CardCharacter() {
  return (
    <article className="container-card">
      <section className="card-section_img">
        <img src="https://images.pexels.com/photos/20450982/pexels-photo-20450982/free-photo-of-moda-hombre-gente-mujer.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt=""  className="card-img"/>
      </section>
      <section className="card-section_details">
        <article className="card-details_first">
          <h2 className="card-name">Name Character</h2>
          <h4 className="card-content_live">
            <span className="card-status_live"></span> live
          </h4>
        </article>
        <article className="card-details_second">
          <h5 className="card-description">Last known location:</h5>
          <p className="card-description_text">Text character</p>
        </article>
        <article className="card-details_third">
          <h5 className="card-description">First see in:</h5>
          <p className="card-description_text">Text character</p>
        </article>
      </section>
    </article>
  );
}

export default CardCharacter;
