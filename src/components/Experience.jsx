import { useTranslation } from "react-i18next";
import styles from "./Experience.module.css";

export default function Experience() {
  const { t } = useTranslation();
  const items = t("experience.items", { returnObjects: true });
  const side = t("experience.side", { returnObjects: true });

  return (
    <section id="experience" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.intro}>
          <p className="eyebrow">{t("experience.eyebrow")}</p>
          <h2 className="sectionTitle">{t("experience.title")}</h2>
          <p className="sectionLead">{t("experience.intro")}</p>
        </div>

        <ol className={styles.timeline}>
          {items.map((item) => (
            <li key={`${item.context}-${item.period}`}>
              <p className={styles.period}>{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <p className={styles.context}>{item.context}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.side}>
          {side.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
