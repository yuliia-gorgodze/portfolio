import React from "react";
import s from "../index.module.css";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t } = useTranslation();
  const links = [
    { title: t("menu.experience"), path: "#experience" },
    { title: t("menu.projects"), path: "#projects" },
    { title: t("menu.skills"), path: "#skills" },
  ];
  return (
    <ul className={s.navMenu}>
      {links?.map((el) => {
        return (
          <li key={el?.title}>
            <a className={s.navLink} href={el?.path}>
              {el?.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
