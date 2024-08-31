import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ENGLISH_LANGUAGE, UKRAINE_LANGUAGE } from "../../../constants";

import s from "./index.module.css";
import classNames from "classnames";

const LanguageSwitcher = (props) => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 3 },
  };

  const transitionBtn = { type: "spring", stiffness: 500, damping: 50 };

  return (
    <div
      className={classNames([
        s.languageSwitcher,
        { isDesktop: props.isDesktop },
        { isMobile: props.isMobile },
      ])}
    >
      {i18n.language === ENGLISH_LANGUAGE ? (
        <motion.button
          exit="hidden"
          key="ukButton"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transitionBtn}
          className={s.languageButton}
          onClick={() => changeLanguage(UKRAINE_LANGUAGE)}
        >
          <span className={s.langName}>{ENGLISH_LANGUAGE}</span>
        </motion.button>
      ) : (
        <motion.button
          exit="hidden"
          key="enButton"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={transitionBtn}
          className={s.languageButton}
          onClick={() => changeLanguage(ENGLISH_LANGUAGE)}
        >
          <span className={s.langName}>{UKRAINE_LANGUAGE}</span>
        </motion.button>
      )}
    </div>
  );
};

export default LanguageSwitcher;
