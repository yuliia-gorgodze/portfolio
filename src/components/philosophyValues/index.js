import React from "react";
import s from "./index.module.css";

const PhilosophyValues = () => {
  return (
    <div className={s.philosophyValuesContainer}>
      <div className={s.leftSide}>
        <div>
          <h2 className={s.title}>Philosophy & values</h2>
          <span>
            I think everyone wants the same thing - relationship with humanity,
            peace with the metaphysical, and experience with the universe. I try
            to grasp these things with my values: authenticity, creativity, &
            hospitality.
          </span>
        </div>
        <button className={s.moreBtn} type="button">
          More about me
        </button>
      </div>
      <div className={s.rightSide} />
    </div>
  );
};

export default PhilosophyValues;
