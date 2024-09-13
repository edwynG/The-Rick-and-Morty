import React from "react";
import CardCharacter from "./CardCharacter";

function GenericCharctersCard({characters}) {
  return (
    <>
      {characters.map((obj) => {
        return (
          <CardCharacter
            key={obj.id}
            data={obj}
          />
        );
      })}
    </>
  );
}

export default GenericCharctersCard;
