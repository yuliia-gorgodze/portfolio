import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import s from "./index.module.css";
import { useTranslation } from "react-i18next";

const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { t } = useTranslation();

  const variants = {
    hidden: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 },
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.leftSide}>
          <div className={s.titleContainer}>
            <motion.h2
              transition={{ type: "linear", duration: 1 }}
              animate={isInView ? "enter" : "hidden"}
              variants={variants}
              className={s.title}
              initial="hidden"
              exit="hidden"
              ref={ref}
              href="/"
            >
              {t("socialLinks.title")}
            </motion.h2>
            <span className={s.text}>{t("socialLinks.description")}</span>
          </div>
          <div className={s.links}>
            <a
              className={s.link}
              href="https://www.instagram.com/mj_yuliya_/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              className={s.link}
              href="https://www.linkedin.com/in/yuliia-gorgozka-9b0451200/"
              target="_blank"
              rel="noreferrer"
            >
              Linkidin
            </a>
            <a
              className={s.link}
              href="https://github.com/yuliia-gorgodze"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className={s.rightSide} />
      </div>
    </div>
  );
};

export default SocialLinks;
