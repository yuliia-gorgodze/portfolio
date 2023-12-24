import React from "react";
import s from "./index.module.css";

const Hero = () => {
  return (
    <div className={s.heroContainer}>
      <div className={s.imgHero} />
      <div className={s.infoContainer}>
        <h1 className={s.name}>{`I'm Yuliia Gorgodze.A frontend developer`}</h1>
        <span className={s.location}>based in Italy.</span>
        <span className={s.info}>
          {`I'm probably the most passionate designer you will ever get to work
          with. If you have a great project that needs some amazing skills, I'm
          your guy.`}
        </span>
      </div>
    </div>
  );
};

export default Hero;
