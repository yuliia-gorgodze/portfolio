import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/header";
import Hero from "./components/hero";
import WorkExperience from "./components/workExperience";
import Skillset from "./components/skillset";
import Projects from "./components/projects";
import SocialLinks from "./components/socialLinks";
import Contact from "./components/contact";
import Footer from "./components/footer";

import s from "./App.module.css";

const variants = {
  hidden: { width: "0%" },
  enter: { width: "40%" },
};

const variantsGrey = {
  hidden: { width: "100%" },
  enter: { width: "60%" },
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className={s.mainContainer}>
      <div className={s.bgHero}>
        <motion.div
          transition={{ type: "linear", duration: 1, delay: 2 }}
          animate={!loading ? "enter" : "hidden"}
          className={s.imgHero}
          variants={variants}
          initial="hidden"
          exit="hidden"
        />
        <motion.div
          transition={{ type: "linear", duration: 1, delay: 2 }}
          animate={!loading ? "enter" : "hidden"}
          className={s.bgGrey}
          variants={variantsGrey}
          initial="hidden"
          exit="hidden"
        />
      </div>
      <Header loading={loading} />
      <Hero />
      <WorkExperience loading={loading} />
      <Skillset />
      <Projects />
      <SocialLinks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
