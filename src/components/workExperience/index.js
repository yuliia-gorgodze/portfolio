import React, { useRef } from "react";
import classnames from "classnames";
import { motion, useInView } from "framer-motion";
import s from "./index.module.css";
import { useTranslation } from "react-i18next";

const WorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { t } = useTranslation();

  const jobs = [
    {
      nameCompany: "DEU",
      vocation: "Frontend React/Next.js Developer",
      description: t("experience.deu"),
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

  const variants = {
    hidden: { opacity: 0, x: -50 },
    enter: { opacity: 1, x: 0 },
  };

  return (
    <div
      id="experience"
      className={classnames(s.workExperienceContainer, "container")}
    >
      <motion.h2
        transition={{ type: "linear", duration: 1 }}
        animate={isInView ? "enter" : "hidden"}
        className={classnames("titleSection", s.titleSection)}
        variants={variants}
        initial="hidden"
        exit="hidden"
        ref={ref}
      >
        more than <span className={s.yearsTitle}>4 years</span> of commercial
        experience
      </motion.h2>

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
