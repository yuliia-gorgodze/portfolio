import React from "react";
import classNames from "classnames";
import s from "./index.module.css";

const skills = [
  {
    name: "Product Design",
    description:
      "Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.",
    icon: s.first,
  },
  {
    name: "Visual Design",
    description:
      "My experience at dribbble has helped me learn to develop the eye for design. Colors, typography, layout and the whole package.",
    icon: s.second,
  },
  {
    name: "Motion Design",
    description:
      "I started my design journey with motion design in my college days. Motion is something that really fascinates me because of the flexibility of story telling. ",
    icon: s.third,
  },
  {
    name: "Photography",
    description:
      "Clicking pictures really brings out the creative in me. Phtography really makes you look and percieve things in a different way.",
    icon: s.fourth,
  },
];

const Skillset = () => {
  return (
    <div className={classNames(s.container, "container")}>
      <div className={s.titleContainer}>
        <h2 className={s.title}>Skillset</h2>
        <span className={s.description}>
          With skills in over 4 different fields of design, I am the perfect
          person to hire when it comes to a full fledged project. Whatever your
          needs are, I can pretty much take on any challenge.
        </span>
      </div>
      <ul className={s.list}>
        {skills.map((el) => {
          return (
            <li className={s.item} key={el.name}>
              <div className={classNames(s.icon, el.icon)} />
              <span className={s.name}>{el.name}</span>
              <span className={s.descriptionItem}>{el.description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skillset;
