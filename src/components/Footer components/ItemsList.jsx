import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../context/context";

const ItemsList = ({ list, struct = true, classContainer = "Footer" }) => {
  const {loadPages} = useContext(context)
  return (
    <ul className={classContainer + "-ul"}>
      {list.map((obj) => {
        return (
          <li
            key={obj.key}
            className={(classContainer + "_ul-li_" + obj.key).replace(" ", "")}
            onClick={struct? loadPages : null}
          >
            <Link to={obj.url} target={struct ? "":"_blank"}>
              {struct ? obj.key + ": " + obj.value : obj.value}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemsList;
