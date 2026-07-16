import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./SelectedWork.module.css";

export default function SelectedWork() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const featured = t("work.featured", { returnObjects: true });
  const more = t("work.more", { returnObjects: true });
  const [activeId, setActiveId] = useState(featured[0]?.id);

  const active = useMemo(
    () => featured.find((item) => item.id === activeId) || featured[0],
    [featured, activeId],
  );

  return (
    <section id="work" className={`section ${styles.section}`}>
      <div className="container">
        <p className="eyebrow">{t("work.eyebrow")}</p>
        <h2 className="sectionTitle">{t("work.title")}</h2>
        <p className="sectionLead">{t("work.subtitle")}</p>

        <div
          className={styles.navigator}
          role="tablist"
          aria-label={t("work.eyebrow")}
        >
          {featured.map((item, index) => {
            const selected = item.id === active.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`work-tab-${item.id}`}
                aria-selected={selected}
                aria-controls="work-panel"
                tabIndex={selected ? 0 : -1}
                className={`${styles.tab} ${selected ? styles.tabActive : ""}`}
                onClick={() => setActiveId(item.id)}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft")
                    return;
                  event.preventDefault();
                  const next =
                    event.key === "ArrowRight"
                      ? (index + 1) % featured.length
                      : (index - 1 + featured.length) % featured.length;
                  setActiveId(featured[next].id);
                  document
                    .getElementById(`work-tab-${featured[next].id}`)
                    ?.focus();
                }}
              >
                <span className={styles.tabIndex}>0{index + 1}</span>
                <span className={styles.tabName}>{item.name}</span>
                <span className={styles.tabDomain}>{item.domain}</span>
              </button>
            );
          })}
        </div>

        <div
          className={styles.panel}
          role="tabpanel"
          id="work-panel"
          aria-labelledby={`work-tab-${active.id}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className={styles.panelInner}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              <p className={styles.summary}>{active.summary}</p>

              <div className={styles.steps}>
                <article>
                  <h3>{t("work.problem")}</h3>
                  <p>{active.problem}</p>
                </article>
                <article>
                  <h3>{t("work.system")}</h3>
                  <p>{active.system}</p>
                </article>
                <article>
                  <h3>{t("work.outcome")}</h3>
                  <p>{active.outcome}</p>
                </article>
              </div>

              <div className={styles.stackBlock}>
                <span className={styles.stackLabel}>{t("work.stack")}</span>
                <ul className={styles.stack}>
                  {active.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.more}>
          <h3 className={styles.moreTitle}>{t("work.moreTitle")}</h3>
          <ul className={styles.moreGrid}>
            {more.map((item) => (
              <li key={item.name}>
                <p className={styles.moreName}>{item.name}</p>
                <p className={styles.moreDomain}>{item.domain}</p>
                <p className={styles.moreBlurb}>{item.blurb}</p>
                <p className={styles.moreStack}>{item.stack}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
