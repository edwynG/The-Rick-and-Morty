import React from "react";
import { Link } from "react-router-dom";

const ItemsList = ({ list, struct = true, classContainer = "Footer" }) => {
  return (
    <ul className={classContainer + "-ul"}>
      {list.map((obj) => {
        return (
          <li
            key={obj.key}
            className={(classContainer + "_ul-li_" + obj.key).replace(" ", "")}
          >
            <Link to={obj.url} target={struct? "":"_blank"}>
              {struct ? obj.key + ": " + obj.value : obj.value}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemsList;
