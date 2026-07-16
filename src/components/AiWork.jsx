import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./AiWork.module.css";

export default function AiWork() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const items = t("ai.items", { returnObjects: true });

  return (
    <section id="ai" className={`section ${styles.section}`}>
      <div className="container">
        <p className="eyebrow">{t("ai.eyebrow")}</p>
        <h2 className="sectionTitle">{t("ai.title")}</h2>
        <p className="sectionLead">{t("ai.subtitle")}</p>

        <ul className={styles.list}>
          {items.map((item, index) => (
            <motion.li
              key={item.name}
              className={styles.item}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: reduce ? 0 : index * 0.05 }}
            >
              <div className={styles.head}>
                <h3>{item.name}</h3>
                <p className={styles.domain}>{item.domain}</p>
              </div>
              <p className={styles.summary}>{item.summary}</p>
              <p className={styles.role}>{item.role}</p>
              <ul className={styles.stack}>
                {item.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
