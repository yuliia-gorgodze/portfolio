import React from "react";
import classnames from "classnames";
import s from "./index.module.css";

const jobs = [
  {
    nameCompany: "Google",
    vocation: "Interaction Designer",
    description:
      "I currently am the lead designer on the interaction design team for Google Play.",
    className: s.green,
  },
  {
    nameCompany: "Facebook",
    vocation: "Product Designer",
    description:
      "I started my design career with Dribble. I was uncharges of creating illustrations for the platform.",
    className: s.blue,
  },
  {
    nameCompany: "Dribbble",
    vocation: "Graphic Designer",
    description:
      "I started my design career with Dribbble. I was uncharged of creating illustrations for the platform.",
    className: s.pink,
  },
];

const WorkExperience = () => {
  return (
    <div className={classnames(s.workExperienceContainer, "container")}>
      <h2 className="titleSection">work experience</h2>
      <h3 className={s.title}>Companies I have worked for in the past.</h3>
      <ul className={s.workList}>
        {jobs?.map((el, i) => {
          return (
            <li className={s.workItem} key={el.nameCompany}>
              <span className={s.num}>0{i + 1}</span>
              <div className={s.nameContainer}>
                <span className={el.className}>{el.nameCompany}, </span>
                <span>{el.vocation}</span>
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
