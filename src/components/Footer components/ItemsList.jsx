import React from "react";
import { Link } from "react-router-dom";

const ItemsList = ({ list, struct = true, classContainer = "footer" }) => {
  return (
    <ul className={classContainer + "-ul"}>
      {list.map((obj) => {
        return (
          <li
            className={(classContainer + "_ul-li_" + obj.key).replace(" ", "")}
          >
            <Link to={obj.url}>
              {struct ? obj.key + ": " + obj.value : obj.value}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemsList;
