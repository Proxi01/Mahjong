import React from "react";
import s from "./Card.module.scss";
import classnames from "classnames";

const Card = ({ puzzle, isHidden, handleClick, ableToSelect }) => {
  return (
    <div
      className={s.card}
      onClick={() => {
        ableToSelect && isHidden && handleClick(puzzle);
      }}
    >
      <p
        className={classnames({
          [s.hidden]: isHidden,
        })}
      >
        {puzzle.value}
      </p>
    </div>
  );
};

export default Card;
