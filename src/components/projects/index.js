import React from "react";
import classnames from "classnames";
import cidt from "../../images/projects/cidt.png";
import dao from "../../images/projects/dao.png";
import erbology from "../../images/projects/erbology.png";
import ticket from "../../images/projects/ticket.png";
import s from "./index.module.css";

const Projects = () => {
  const projects = [
    { name: "Consider It Done Technologies", img: cidt },
    { name: "DaoSign marketing page", img: dao },
    { name: "Erbology", img: erbology },
    { name: "TicketLife", img: ticket },
  ];
  return (
    <div className={classnames(s.wrapperProject, "container")}>
      <div className={s.leftSide}>
        <h2 className={s.title}>These are favorite projects</h2>
        <span>These are the projects that I remember the most</span>
      </div>
      <div className={s.rightSide}>
        <ul className={s.project}>
          {projects.map((el) => {
            return (
              <li key={el.name}>
                <div className={s.imgContainer}>
                  <img className={s.imgProject} src={el.img} />
                </div>
                <div>
                  <h3>{el.name}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
