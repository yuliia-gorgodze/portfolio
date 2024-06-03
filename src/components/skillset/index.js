import React, { useRef } from "react";
import classNames from "classnames";
import { ReactComponent as Start } from "../../images/icons/star.svg";
import { motion, useInView } from "framer-motion";
import s from "./index.module.css";

const skills = [
  {
    name: "Node.js",
    description:
      "There is basic knowledge. I personally developed a commercial project, an application for monitoring production processes using React and Node.js.",
    icon: s.fourth,
    score: 3,
  },
  {
    name: "Next.js",
    description:
      "Confident knowledge of Next.js, last year 10+ projects implemented with it.",
    icon: s.third,
    score: 5,
  },

  {
    name: "JS/TS",
    description:
      "Three years of experience. I also have experience working on projects with VanillaJS.",
    icon: s.first,
    score: 5,
  },
  {
    name: "React",
    description: "Strong knowledge of React, more than 25 completed projects.",
    icon: s.second,
    score: 5,
  },
];

const other = [
  "Figma",
  "Slack",
  "Jira",
  "Trello",
  "Git",
  "-",
  "Tailwind CSS",
  "Bootstrap",
  "Antd",
  "MaterialUI",
  "-",
  "Anijs",
  "ThreeJs",
  "Framer Motion",
  "StoryBook",
  "-",
  "SWR",
  "Web3",
  "GraphQl",
  "Redux",
  "ReactRouter",
  "ReactHookForm",
  "MongoDB",
  "Firebase",
  "Stripe",
  "Postman",
  "-",
  "ReactNative",
  "JavaScript",
  "TypeScript",
  "NodeJs",
  "HTML5",
  "CSS/SCSS",
  "-",
  "popover",
  "i18next",
  "moment",
  "Lodash",
  "-",
  "Jest",
  "ApostropheCMS",
];

const Skillset = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    enter: { opacity: 1, x: 0 },
  };
  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      <div className={classNames(s.otherContainer, "container")}>
        <ul className={s.otherList}>
          {other?.map((el) => {
            return (
              <li key={el}>
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
              <li className={s.item} key={el.name}>
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
