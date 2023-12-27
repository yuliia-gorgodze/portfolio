import React, { useRef } from "react";
import classnames from "classnames";
import cidt from "../../images/projects/cidt.png";
import dao from "../../images/projects/dao.png";
import omnitech from "../../images/projects/omnitech.png";
import daowallet from "../../images/projects/daowallet.png";
import { motion, useInView } from "framer-motion";
import s from "./index.module.css";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    enter: { opacity: 0.5, x: 0 },
  };

  const projectsLeft = [
    {
      name: "Consider It Done Technologies",
      img: cidt,
      text: "Marketing page",
      path: "https://consideritdone.tech/",
    },
    {
      name: "DaoSign",
      img: dao,
      text: "Marketing page",
      path: "https://daosign.org/",
    },
  ];
  const projectsRight = [
    {
      name: "OmniTech",
      img: omnitech,
      text: "We developed a product to store, index, and provide custom access to cross-chain data.",
      path: "https://omnitech.one/",
    },
    {
      name: "DAO Wallet",
      img: daowallet,
      text: "DAO Wallet is WebAssembly Web3 wallet that enables users to interact with decentralized applications (DApps) and blockchain networks seamlessly. It allows users to securely manage their cryptocurrency assets and NFT, including sending and receiving transactions.",
      path: "https://github.com/ConsiderItDone/dao-wallet",
    },
  ];

  return (
    <div id="projects" className={classnames(s.wrapperProject, "container")}>
      <div className={s.leftSide}>
        <motion.h2
          transition={{ type: "linear", duration: 1 }}
          animate={isInView ? "enter" : "hidden"}
          className="titleSection"
          variants={variants}
          initial="hidden"
          exit="hidden"
          ref={ref}
        >
          Projects
        </motion.h2>

        <span className={s.title}>
          I have completed more than 30+ projects, of which I have selected
          several of the most interesting
        </span>

        <ul className={s.project}>
          {projectsLeft.map((el) => {
            return (
              <li key={el.name} className={s.card}>
                <a
                  target="_blank"
                  href={el.path}
                  rel="noreferrer"
                  className={s.cardLink}
                >
                  <div className={s.imgContainer}>
                    <img className={s.imgProject} src={el.img} />
                  </div>
                  <div className={s.cardText}>
                    <h3 className={s.cardTitle}>{el.name}</h3>
                    <span className={s.subtitle}>{el.text}</span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.rightSide}>
        <ul className={s.project}>
          {projectsRight.map((el) => {
            return (
              <li key={el.name} className={s.card}>
                <a
                  target="_blank"
                  href={el.path}
                  rel="noreferrer"
                  className={s.cardLink}
                >
                  <div className={s.imgContainer}>
                    <img className={s.imgProject} src={el.img} />
                  </div>
                  <div className={s.cardText}>
                    <h3 className={s.cardTitle}>{el.name}</h3>
                    <span className={s.subtitle}>{el.text}</span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
