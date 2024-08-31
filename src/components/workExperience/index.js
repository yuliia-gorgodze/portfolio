/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import classnames from "classnames";
import { motion, useInView } from "framer-motion";
import s from "./index.module.css";

const jobs = [
  {
    nameCompany: "DEU",
    vocation: "Frontend React/Next.js Developer",
    description:
      "Development of 20+ web applications using React and Next.js, enhancing user experience and performance, and receiving positive feedback from clients. I have been working with them for almost three years, from June 2020 to May 2023.",
    className: s.green,
    experience: 3.7,
    color: "#3cc74e",
  },

  {
    nameCompany: "Erbology",
    vocation: "Frontend React Developer",
    description:
      "Transformed a WordPress-based online store into a high-performance React application with a custom admin panel, improving site speed by 40% and streamlining content management for the client over a three-month project. Our cooperation continued in 2023 from February to May.",
    className: s.pink,
    experience: 0.4,
    color: "#e95d90",
  },

  {
    nameCompany: "Bozhenko",
    vocation: "Frontend Next.js Developer",
    description:
      "Engineered the front-end architecture of a flight booking platform using Next.js, optimizing performance and reducing load times by 20%, thereby improving user engagement during a four-month contract.",
    className: s.blue,
    experience: 0.3,
    color: "#609bff",
  },
  {
    nameCompany: "Go7",
    vocation: "Frontend Next.js Developer",
    description:
      "Worked with this company in 2024 four months.  Engineered the front-end architecture of a flight booking platform using Next.js.",
    className: s.green,
    experience: 0.4,
    color: "#3cc74e",
  },
];

const WorkExperience = () => {
  const ref = useRef(null);
  const experienceNumRef = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    enter: { opacity: 0.5, x: 0 },
  };

  return (
    <div
      id="experience"
      className={classnames(s.workExperienceContainer, "container")}
    >
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <motion.div
          transition={{ type: "linear", duration: 1 }}
          animate={isInView ? "enter" : "hidden"}
          className={s.titleSectionNum}
          variants={variants}
          initial="hidden"
          exit="hidden"
          ref={experienceNumRef}
        >
          4+
        </motion.div>
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
      </div>

      <h3 className={s.title}>Companies I have worked for in the past.</h3>
      <ul className={s.workList}>
        {jobs?.map((el) => {
          return (
            <li className={s.workItem} key={el.nameCompany}>
              <div>
                <span
                  className={classnames(s.num, {
                    [el.className]: el.className,
                  })}
                >
                  {el.experience}
                </span>
                <span className={s.years}>years</span>
              </div>
              <div className={s.nameContainer}>
                <span className={el.className}>{el.nameCompany}, </span>
                <span className={s.vocation}>{el.vocation}</span>
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
