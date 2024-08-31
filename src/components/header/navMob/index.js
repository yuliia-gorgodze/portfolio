/* eslint-disable react/prop-types */
import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";
import s from "./index.module.css";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const NavMob = ({ toggle }) => {
  const { t } = useTranslation();

  const variantsItem = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const links = [
    { title: t("menu.experience"), path: "#experience" },
    { title: t("menu.projects"), path: "#projects" },
    { title: t("menu.skills"), path: "#skills" },
  ];

  return (
    <motion.ul className={s.navListMob} variants={variants}>
      {links.map((i) => (
        <MenuItem i={i} key={i.title} toggle={toggle} />
      ))}
      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={classNames(s.navItemMob)}
        variants={variantsItem}
      >
        <a className={s.navBtnMob} href="#contact" onClick={toggle}>
          {t("menu.contact")}
        </a>
      </motion.li>
    </motion.ul>
  );
};
