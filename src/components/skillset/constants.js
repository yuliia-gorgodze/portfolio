import getId from "../../helpers";
import s from "./index.module.css";

export const stars = [1, 2, 3, 4, 5];

export const skills = [
  {
    name: "Node.js",
    description:
      "There is basic knowledge. I personally developed a commercial project, an application for monitoring production processes using React and Node.js.",
    icon: s.fourth,
    score: 3,
    id: getId(),
  },
  {
    name: "Next.js",
    description:
      "Confident knowledge of Next.js, last year 10+ projects implemented with it.",
    icon: s.third,
    score: 5,
    id: getId(),
  },

  {
    name: "JS/TS",
    description:
      "Three years of experience. I also have experience working on projects with VanillaJS.",
    icon: s.first,
    score: 5,
    id: getId(),
  },
  {
    name: "React",
    description: "Strong knowledge of React, more than 25 completed projects.",
    icon: s.second,
    score: 5,
    id: getId(),
  },
];

export const other = [
  "Figma",
  "Slack",
  "Jira",
  "Trello",
  "Git",
  "-",
  "Tailwind CSS",
  "Bootstrap",
  "Antd",
  "MaterialUI",
  "-",
  "Anijs",
  "ThreeJs",
  "Framer Motion",
  "StoryBook",
  "-",
  "SWR",
  "Web3",
  "GraphQl",
  "Redux",
  "ReactRouter",
  "ReactHookForm",
  "MongoDB",
  "Firebase",
  "Stripe",
  "Postman",
  "-",
  "ReactNative",
  "JavaScript",
  "TypeScript",
  "NodeJs",
  "HTML5",
  "CSS/SCSS",
  "-",
  "popover",
  "i18next",
  "moment",
  "Lodash",
  "-",
  "Jest",
  "ApostropheCMS",
];
