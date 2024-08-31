import React, { useRef } from "react";
import classNames from "classnames";
import { ReactComponent as Start } from "../../images/icons/star.svg";
import { motion, useInView } from "framer-motion";

import { other, skills, stars } from "./constants";

import s from "./index.module.css";
import getId from "../../helpers";

const Skillset = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    enter: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className={classNames(s.otherContainer, "container")}>
        <ul className={s.otherList}>
          {other?.map((el) => {
            return (
              <li key={getId()}>
                <span className={s.description}>{el}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div id="skills" className={classNames(s.container, "container")}>
        <div className={s.titleContainer}>
          <motion.h2
            transition={{ type: "linear", duration: 1 }}
            animate={isInView ? "enter" : "hidden"}
            className={s.title}
            variants={variants}
            initial="hidden"
            exit="hidden"
            ref={ref}
          >
            Skillset
          </motion.h2>
          <span className={s.description}>
            I am confident in 3 skills out of 4 skills on this list, which
            allows me to cope with any front-end tasks assigned, and a basic
            knowledge of Node.js allows me to better understand the
            communication between the front-end and back-end.
          </span>
        </div>
        <ul className={s.list}>
          {skills.map((el) => {
            return (
              <li className={s.item} key={el.id}>
                <div className={s.nameContainer}>
                  <div className={classNames(s.icon, el.icon)} />
                  <span className={s.name}>{el.name} </span>
                  <div>
                    {stars?.map((num) => {
                      if (num <= el.score) {
                        return <Start key={el.name + num} />;
                      }
                    })}
                  </div>
                </div>
                <span className={s.descriptionItem}>{el.description}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Skillset;
