/* eslint-disable react/prop-types */
import * as React from "react";
import { motion } from "framer-motion";
import s from "./index.module.css";

const variants = {
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

export const MenuItem = ({ i, toggle }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={s.navItemMob}
      variants={variants}
    >
      <a onClick={toggle} href={i.path}>
        {i.title}
      </a>
    </motion.li>
  );
};
