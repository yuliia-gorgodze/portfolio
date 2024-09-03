import React, { useRef } from "react";
import classnames from "classnames";
import { motion, useInView } from "framer-motion";
import s from "./index.module.css";
import { useTranslation } from "react-i18next";
import getId from "../../helpers/index";

const WorkExperience = () => {
  const ref = useRef(null);
  const refProf = useRef();
  const refOther = useRef();
  const isOtherInView = useInView(refOther);
  const isInView = useInView(ref);
  const isProfInView = useInView(refProf);
  const { t } = useTranslation();

  const jobs = [
    {
      nameCompany: "DEU",
      vocation: "Frontend React/Next.js Developer",
      description: t("experience.deu.description", { returnObjects: true }),
      className: s.green,
      experience: t("experience.deu.fromTo"),
      color: "#3cc74e",
      id: getId(),
    },

    {
      nameCompany: "Erbology",
      vocation: "Frontend React Developer",
      description: t("experience.erbology.description", {
        returnObjects: true,
      }),
      className: s.pink,
      experience: t("experience.erbology.fromTo"),
      color: "#e95d90",
      id: getId(),
    },

    {
      nameCompany: "Bozhenko",
      vocation: "Frontend Next.js Developer",
      description: t("experience.bozhenko.description", {
        returnObjects: true,
      }),
      className: s.blue,
      experience: t("experience.bozhenko.fromTo"),
      color: "#609bff",
      id: getId(),
    },
    {
      nameCompany: "Go7",
      vocation: "Frontend Next.js Developer",
      description: t("experience.go7.description", {
        returnObjects: true,
      }),
      className: s.green,
      experience: t("experience.go7.fromTo"),
      color: "#3cc74e",
      id: getId(),
    },
  ];

  const jobsOther = t("experience.additionalExperience", {
    returnObjects: true,
  });

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
        {t("general.moreThen")}
        <span className={s.yearsTitle}>4 {t("general.years")}</span>
        {t("experience.commercialExperience")}
      </motion.h2>

      <h3 className={s.title}>{t("experience.title")}</h3>
      <ul className={s.workList}>
        {jobs?.map((el) => {
          return (
            <li className={s.workItem} key={el.nameCompany}>
              <span className={s.vocation}>{el.experience}</span>
              <div className={s.nameContainer}>
                <span className={el.className}>{el.nameCompany}, </span>
                <span
                  className={classnames({
                    [el.className]: el.className,
                  })}
                >
                  {el.vocation}
                </span>
              </div>
              <ul className={s.description}>
                {el.description.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      <motion.h3
        transition={{ type: "linear", duration: 1 }}
        className={classnames(s.title, s.otherTitle)}
        animate={isOtherInView ? "enter" : "hidden"}
        variants={variants}
        initial="hidden"
        exit="hidden"
        ref={refOther}
      >
        {t("experience.titleOther")}
      </motion.h3>
      <ul className={s.workListOther}>
        {jobsOther?.map((el, i) => {
          return (
            <li className={s.workItem} key={el.nameCompany}>
              <div className={s.nameContainer}>
                <span
                  className={classnames({
                    [jobs[i].className]: jobs[i].className,
                  })}
                >
                  {el.title}
                </span>
              </div>
              <span className={s.otherDescription}>{el.description}</span>
            </li>
          );
        })}
      </ul>
      <div className={s.professionalSummary}>
        <motion.h2
          transition={{ type: "linear", duration: 1 }}
          animate={isProfInView ? "enter" : "hidden"}
          className={classnames(
            "titleSection",
            s.title,
            s.summaryDescriptionTitle,
          )}
          variants={variants}
          initial="hidden"
          exit="hidden"
          ref={refProf}
        >
          {t("experience.professional")} <span>{t("experience.summary")}</span>
        </motion.h2>
        <span>{t("experience.summaryDescription")}</span>
      </div>
    </div>
  );
};

export default WorkExperience;
