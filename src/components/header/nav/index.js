import React from "react";
import s from "../index.module.css";

const links = [
  { title: "Experience", path: "/experience" },
  { title: "Projects", path: "/projects" },
  { title: "Skills", path: "/skills" },
];

const Nav = () => {
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
