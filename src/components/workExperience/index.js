/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import classnames from "classnames";
import { motion, useInView } from "framer-motion";
import s from "./index.module.css";

const jobs = [
  {
    nameCompany: "Erbology",
    vocation: "Frontend React Developer",
    description:
      "One-time project. It was necessary to have a ready-made online store written in WordPress, rewrite it in React and add an admin panel. Our cooperation continued in 2022 from March to July.",
    className: s.pink,
    color: "#e95d90",
  },
  {
    nameCompany: "Bozhenko",
    vocation: "Frontend Next.js Developer",
    description:
      "Worked with this company in 2023 from May to September. Completed 2 projects. Online auto parts store, company website.",
    className: s.blue,
    color: "#609bff",
  },
  {
    nameCompany: "DEU",
    vocation: "Frontend React/Next.js Developer",
    description:
      "My main job, 20+ completed projects. I have been working with them for almost three years, from 2020 to December 2023.",
    className: s.green,
    color: "#3cc74e",
  },
];

const WorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const refVocation = useRef(null);
  const isInViewVocation = useInView(ref);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    enter: { opacity: 1, x: 0 },
  };

  return (
    <div className={classnames(s.workExperienceContainer, "container")}>
      <motion.h2
        transition={{ type: "linear", duration: 1 }}
        animate={isInView ? "enter" : "hidden"}
        className="titleSection"
        variants={variants}
        initial="hidden"
        exit="hidden"
        ref={ref}
      >
        work experience
      </motion.h2>

      <h3 className={s.title}>Companies I have worked for in the past.</h3>
      <ul className={s.workList}>
        {jobs?.map((el, i) => {
          return (
            <li className={s.workItem} key={el.nameCompany}>
              <span className={s.num}>0{i + 1}</span>
              <div className={s.nameContainer}>
                <span className={el.className}>{el.nameCompany}, </span>
                <motion.span
                  transition={{ type: "linear", duration: 1, delay: i }}
                  animate={!isInViewVocation ? "enter" : "hidden"}
                  variants={{
                    hidden: { color: "inherit" },
                    enter: { color: el.color },
                  }}
                  className={s.vocation}
                  ref={refVocation}
                  initial="hidden"
                  exit="hidden"
                >
                  {el.vocation}
                </motion.span>
              </div>
              <span className={s.description}>{el.description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkExperience;
