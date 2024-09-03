// import React, { useRef } from "react";
// import classnames from "classnames";
// import cidt from "../../images/projects/cidt.png";
// import dao from "../../images/projects/dao.png";
// import omnitech from "../../images/projects/omnitech.png";
// import daowallet from "../../images/projects/daowallet.png";
// import go7 from "../../images/projects/go7.png";
// import { motion, useInView } from "framer-motion";
// import s from "./index.module.css";

// const Projects = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref);

//   const variants = {
//     hidden: { opacity: 0, x: -50 },
//     enter: { opacity: 0.5, x: 0 },
//   };

//   const projectsLeft = [
//     {
//       name: "Consider It Done Technologies",
//       img: cidt,
//       text: "Marketing page",
//       path: "https://consideritdone.tech/",
//     },
//     {
//       name: "DaoSign",
//       img: dao,
//       text: "Marketing page",
//       path: "https://daosign.org/",
//     },
//   ];

//   const projectsRight = [
//     {
//       name: "OmniTech",
//       img: omnitech,
//       text: "We developed a product to store, index, and provide custom access to cross-chain data.",
//       path: "https://omnitech.one/",
//     },
//     {
//       name: "DAO Wallet",
//       img: daowallet,
//       text: "DAO Wallet is WebAssembly Web3 wallet that enables users to interact with decentralized applications (DApps) and blockchain networks seamlessly. It allows users to securely manage their cryptocurrency assets and NFT, including sending and receiving transactions.",
//       path: "https://github.com/ConsiderItDone/dao-wallet",
//     },
//   ];

//   const t = [
//     {
//       name: "Go7",
//       text: "Worked on a product for Go7. Above the platform for purchasing plane tickets. The platform is under development, so I am attaching the company’s website.",
//       path: "https://www.go7.io/company/about-go7/",
//       img: go7,
//     },
//   ];

//   return (
//     <div id="projects" className={classnames(s.wrapperProject, "container")}>
//       <div className={s.leftSide}>
//         <motion.h2
//           transition={{ type: "linear", duration: 1 }}
//           animate={isInView ? "enter" : "hidden"}
//           className="titleSection"
//           variants={variants}
//           initial="hidden"
//           exit="hidden"
//           ref={ref}
//         >
//           Projects
//         </motion.h2>

//         <span className={s.title}>
//           I have completed more than 30+ projects, of which I have selected
//           several of the most interesting
//         </span>

//         <ul className={s.project}>
//           {projectsLeft.map((el) => {
//             return (
//               <li key={el.name} className={s.card}>
//                 <a
//                   target="_blank"
//                   href={el.path}
//                   rel="noreferrer"
//                   className={s.cardLink}
//                 >
//                   <div className={s.imgContainer}>
//                     <img className={s.imgProject} src={el.img} />
//                   </div>
//                   <div className={s.cardText}>
//                     <h3 className={s.cardTitle}>{el.name}</h3>
//                     <span className={s.subtitle}>{el.text}</span>
//                   </div>
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//       <div className={s.rightSide}>
//         <ul className={s.project}>
//           {projectsRight.map((el) => {
//             return (
//               <li key={el.name} className={s.card}>
//                 <a
//                   target="_blank"
//                   href={el.path}
//                   rel="noreferrer"
//                   className={s.cardLink}
//                 >
//                   <div className={s.imgContainer}>
//                     <img className={s.imgProject} src={el.img} />
//                   </div>
//                   <div className={s.cardText}>
//                     <h3 className={s.cardTitle}>{el.name}</h3>
//                     <span className={s.subtitle}>{el.text}</span>
//                   </div>
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//       <div className={s.rightSide}>
//         <ul className={s.project}>
//           {t.map((el) => {
//             return (
//               <li key={el.name} className={s.card}>
//                 <a
//                   target="_blank"
//                   href={el.path}
//                   rel="noreferrer"
//                   className={s.cardLink}
//                 >
//                   <div className={s.imgContainer}>
//                     <img className={s.imgProject} src={el.img} />
//                   </div>
//                   <div className={s.cardText}>
//                     <h3 className={s.cardTitle}>{el.name}</h3>
//                     <span className={s.subtitle}>{el.text}</span>
//                   </div>
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projects = t("projects", {
    returnObjects: true,
  });
  const projectData = [
    {
      title: "IoT Smart Home",
      description:
        "Developed a React application for a smart home system, integrating with devices installed around the house. Utilized Firebase for real-time push notifications to alert users of device status changes, enhancing home security and automation.",
    },
    {
      title: "Continent",
      description:
        "Developed a marketing page for a trading market using Vanilla JavaScript. Integrated APIs to fetch real-time data from market exchanges, providing users with up-to-date information on trading options.",
    },
    {
      title: "Gardens",
      description:
        "Created a responsive website for a landscaping company based in England using React. Focused on delivering a user-friendly interface to showcase the company’s services effectively.",
      link: "http://gardens247.co.uk/",
    },
    {
      title: "Axelar Wrapper",
      description:
        "Contributed to the development of a secure integration wrapper for the Axelar Network using AssemblyScript. The wrapper supports cross-chain token transfers.",
      link: "https://github.com/ConsiderItDone/axelar-wrapper",
    },
    {
      title: "DAO Wallet",
      description:
        "Participated in the development of WebAssembly Web3 wallet, which allows users to interact with decentralized applications (DApps) and allows users to securely manage their cryptocurrency assets and NFT, including sending and receiving transactions.",
      link: "https://github.com/ConsiderItDone/dao-wallet",
    },
    {
      title: "OmniTech",
      description:
        "Took part in the development of the application a platform to store, index, and provide custom access to cross-chain data. Focused on user interface design.",
      link: "https://omnitech.one/",
    },
    {
      title: "Consider It Done Technologies",
      description:
        "Designed and implemented a marketing page, utilizing modern UI/UX principles to boost user engagement.",
      link: "https://consideritdone.tech/",
    },
    {
      title: "DaoSign",
      description: `Participated in the development of a decentralized platform for agreements featuring cryptographic proofs-of-signature, specifically designed for DAOs. Over a period of two years, I contributed to various components, including both the main application and the marketing page. The DAOsign application was built using Next.js and React for the frontend, which facilitated seamless user interactions. It incorporated GraphQL for efficient data handling and urql as a client, providing a robust API communication framework. Key features included the use of Framer Motion for animations and IPFS for secure, decentralized file storage. Security and user authentication were enhanced with Metamask and WalletConnect integrations. The marketing page, which aimed to boost user engagement, was also built using React and Next.js, focusing on modern UI/UX principles.`,
    },
  ];

  return (
    <section className="projects-section container">
      <h2 style={{ marginBottom: "20px" }}>{t("general.projects")}</h2>
      <ul className="projects-list">
        {projects.map((project, index) => {
          console.log(projectData[index].link);

          return (
            <li key={index} className="project-item">
              <strong>{project.title}:</strong> {project.description}
              {projectData[index].link && (
                <a
                  href={projectData[index].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {projectData[index].link}
                </a>
              )}
            </li>
          );
        })}
      </ul>
      <div className="doa-links">
        <a
          href="https://testnet.daosign.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test Application
        </a>
        <a href="https://daosign.org" target="_blank" rel="noopener noreferrer">
          Marketing Page
        </a>
        <a
          href="https://github.com/DAOsign"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github DAOsign
        </a>
      </div>
      <span style={{ color: "var(--greyPink)", display: "block" }}>
        {t("general.note")}
      </span>
      <span
        style={{
          color: "var(--greyText)",
          display: "block",
          width: "fit-content",
          marginTop: "30px",
        }}
      >
        {t("general.ps")}
      </span>
    </section>
  );
};

export default Projects;
