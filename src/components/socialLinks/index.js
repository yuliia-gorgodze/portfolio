/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import s from "./index.module.css";

const SocialLinks = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.leftSide}>
          <div className={s.titleContainer}>
            <h2 className={s.title}>Social Links</h2>
            <span className={s.text}>
              We save your life and work history online.
            </span>
          </div>
          <div className={s.links}>
            <a
              className={s.link}
              href="https://www.instagram.com/mj_yuliya_/"
              target="_blank"
            >
              Instagram
            </a>

            <a
              className={s.link}
              href="https://www.linkedin.com/in/yuliia-gorgozka-9b0451200/"
              target="_blank"
            >
              Linkidin
            </a>
            <a
              className={s.link}
              href="https://github.com/yuliiagorgozka"
              target="_blank"
            >
              Git
            </a>
          </div>
        </div>
        <div className={s.rightSide} />
      </div>
    </div>
  );
};

export default SocialLinks;
