import React, { useRef } from "react";
import classNames from "classnames";
import { ReactComponent as Start } from "../../images/icons/star.svg";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

import { stars } from "./constants";

import s from "./index.module.css";
import getId from "../../helpers";

const Skillset = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const refCertifications = useRef(null);
  const isInView = useInView(ref);
  const isCertificationsInView = useInView(refCertifications);
  const skillsOther = t("skillset.skills", { returnObjects: true });
  const mainSkills = t("skillset.mainSkills", { returnObjects: true });
  console.log(mainSkills);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    enter: { opacity: 1, x: 0 },
  };

  const skills = [
    {
      icon: s.fourth,
      score: 3,
      id: getId(),
    },
    {
      icon: s.third,
      score: 5,
      id: getId(),
    },

    {
      icon: s.first,
      score: 5,
      id: getId(),
    },
    {
      icon: s.second,
      score: 5,
      id: getId(),
    },
  ];

  return (
    <>
      <div className={classNames(s.otherContainer, "container")}>
        <ul className={s.otherList}>
          {skillsOther.map((skill) => {
            console.log(skill);

            return (
              <li key={getId()}>
                <h3>{skill.title}</h3>
                <span className={s.description}>{skill.value}</span>
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
            {t("skillset.title")}
          </motion.h2>
          <span className={s.description}>{t("skillset.description")}</span>
        </div>
        <ul className={s.list}>
          {mainSkills.map((skill, i) => {
            return (
              <li className={s.item} key={skills[i].id}>
                <div className={s.nameContainer}>
                  <div className={classNames(s.icon, skills[i].icon)} />
                  <span className={s[skills[i].icon]}>{skill.title} </span>
                  <div>
                    {stars?.map((num) => {
                      if (num <= i.score) {
                        return <Start key={skill.title + num} />;
                      }
                    })}
                  </div>
                </div>
                <span className={s.descriptionItem}>{skill.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        style={{
          paddingBottom: "40px",
          maxWidth: "1440px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="container"
      >
        <motion.h2
          transition={{ type: "linear", duration: 1 }}
          animate={isCertificationsInView ? "enter" : "hidden"}
          style={{ color: "var(--white)" }}
          className={s.description}
          ref={refCertifications}
          variants={variants}
          initial="hidden"
          exit="hidden"
        >
          {t("certifications.title")}
        </motion.h2>
        <span style={{ color: "var(--greyText)" }} className={s.description}>
          {t("certifications.value")}
        </span>
      </div>
    </>
  );
};

export default Skillset;
