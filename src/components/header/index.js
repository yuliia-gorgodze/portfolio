import React from "react";
import classNames from "classnames";
import s from "./index.module.css";
import Nav from "./nav";

const Header = () => {
  return (
    <header className={classNames(s.header, "container")}>
      <a className={s.logo} href="/">
        Yuliia.G
      </a>
      <div className={s.navContainer}>
        <Nav />
        <button className={s.btnContact}>Contact</button>
      </div>
    </header>
  );
};

export default Header;
