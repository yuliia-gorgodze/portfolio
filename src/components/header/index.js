/* eslint-disable react/prop-types */
import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import Nav from "./nav";
import s from "./index.module.css";

const Header = ({ loading }) => {
  const variants = {
    hidden: { x: -200 },
    enter: { x: 0 },
  };
  const variantsNav = {
    hidden: { x: -200, opacity: 0 },
    enter: { x: 0, opacity: 1 },
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
        Yuliia.G
      </motion.span>
      <motion.div
        transition={{ type: "linear", duration: 1.1, delay: 2 }}
        animate={!loading ? "enter" : "hidden"}
        className={s.navContainer}
        variants={variantsNav}
        initial="hidden"
        exit="hidden"
      >
        <Nav loading={loading} />
        <a href="#contact" className={s.btnContact}>
          Contact
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
