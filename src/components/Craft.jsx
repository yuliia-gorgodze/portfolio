import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./Craft.module.css";

export default function Craft() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const items = t("craft.items", { returnObjects: true });

  return (
    <section id="craft" className={`section ${styles.section}`}>
      <div className="container">
        <p className="eyebrow">{t("craft.eyebrow")}</p>
        <h2 className="sectionTitle">{t("craft.title")}</h2>

        <ul className={styles.grid}>
          {items.map((item, index) => (
            <motion.li
              key={item.title}
              className={styles.item}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: reduce ? 0 : index * 0.06 }}
            >
              <span className={styles.num}>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.li>
          ))}
        </ul>

        <aside className={styles.range}>
          <h3>{t("craft.rangeTitle")}</h3>
          <p>{t("craft.rangeText")}</p>
        </aside>
      </div>
    </section>
  );
}
