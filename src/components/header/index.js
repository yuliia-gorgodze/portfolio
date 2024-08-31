import React, { useRef } from "react";
import classNames from "classnames";
import { motion, useCycle } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useDimensions } from "../hooks/use-dimensions";

import Nav from "./nav";
import { NavMob } from "./navMob";
import { MenuToggle } from "./menu-toggle";
import LanguageSwitcher from "./languageSwitcher";

import s from "./index.module.css";

const Header = ({ loading }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const { t } = useTranslation();

  const variants = {
    hidden: { x: -300, opacity: 0 },
    enter: { x: 0, opacity: 1 },
  };

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 93vw 27px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(21px at 93vw 27px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <header className={classNames(s.header, "container")}>
      <motion.span
        transition={{ type: "linear", duration: 1, delay: 2 }}
        animate={!loading ? "enter" : "hidden"}
        className={s.logo}
        variants={variants}
        initial="hidden"
        exit="hidden"
      >
        {t("shortName")}
      </motion.span>
      <div className="flex">
        <motion.div
          transition={{ type: "linear", duration: 1.1, delay: 2 }}
          animate={!loading ? "enter" : "hidden"}
          className={s.navContainer}
          variants={variants}
          initial="hidden"
          exit="hidden"
        >
          <Nav loading={loading} />
          <a href="#contact" className={s.btnContact}>
            {t("menu.contact")}
          </a>
        </motion.div>

        <motion.nav
          animate={isOpen ? "open" : "closed"}
          className={s.mobMenu}
          ref={containerRef}
          initial={false}
          custom={height}
        >
          <motion.div className="background" variants={sidebar} />
          <NavMob toggle={toggleOpen} />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
        <LanguageSwitcher isDesktop />
      </div>
    </header>
  );
};

export default Header;
