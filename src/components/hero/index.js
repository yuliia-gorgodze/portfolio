import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import s from "./index.module.css";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const variants = {
    hidden: { opacity: 0, x: -50 },
    enter: { opacity: 1, x: 0 },
  };

  const variantsText = {
    hidden: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0, x: -50 },
  };

  return (
    <div className={s.heroContainer}>
      <motion.div
        transition={{ type: "linear", duration: 1.5 }}
        animate={!loading ? "enter" : "hidden"}
        className={s.imgHero}
        variants={variants}
        initial="hidden"
        exit="hidden"
      />
      <motion.div
        transition={{ type: "linear", duration: 1.5 }}
        animate={!loading ? "enter" : "hidden"}
        className={s.infoContainer}
        variants={variantsText}
        initial="hidden"
        exit="hidden"
      >
        <h1
          className={s.name}
        >{`I'm Yuliia Gorgodze. A frontend developer`}</h1>
        <span className={s.location}>based in Ukraine.</span>
        <span className={s.info}>
          {`I'm probably the most passionate programmer you'll ever work with. If you have a great project that requires amazing skills, I'm with you.`}
        </span>
      </motion.div>
    </div>
  );
};

export default Hero;
