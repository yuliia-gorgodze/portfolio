/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import classNames from "classnames";
import { motion, useCycle } from "framer-motion";
import Nav from "./nav";
import { useDimensions } from "../hooks/use-dimensions";
import s from "./index.module.css";
import { NavMob } from "./navMob";
import { MenuToggle } from "./menu-toggle";

const Header = ({ loading }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const variants = {
    hidden: { x: -300 },
    enter: { x: 0 },
  };
  const variantsNav = {
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
        {/* <a href="#contact" className={s.btnContact}>
          Contact
        </a> */}
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
    </header>
  );
};

export default Header;
