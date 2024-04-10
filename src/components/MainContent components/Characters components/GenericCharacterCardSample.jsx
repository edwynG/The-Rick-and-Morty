import React from "react";
import CardSample from "../Home component/CardSample"


function GenericCharacterCardSample({ characters }) {
  return (
    <>
      {characters.map((card) => {
        return (
          <CardSample
            style={{ maxWidth: 320 ,flexGrow:1}}
            key={card.id}
            content={{
              title: card.name,
              content: card.origin.name,
              svg: (
                <>
                  <img src={card.image} title={card.image} />
                </>
              ),
            }}
          />
        );
      })}
    </>
  );
}

export default GenericCharacterCardSample;
