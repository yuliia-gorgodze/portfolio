import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ShaderBackground from "./ShaderBackground";
import styles from "./Hero.module.css";

const base = import.meta.env.BASE_URL;

export default function Hero() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  const fade = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      };

  const imageMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, scale: 1.03 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section className={styles.hero} aria-labelledby="hero-name">
      <ShaderBackground />
      <div className={`container ${styles.grid}`}>
        <motion.div className={styles.media} {...imageMotion}>
          <picture>
            <source
              type="image/avif"
              srcSet={`${base}media/hero-900.avif 600w, ${base}media/hero-1600.avif 1066w`}
              sizes="(max-width: 900px) min(100vw, 560px), min(42vw, 520px)"
            />
            <source
              type="image/webp"
              srcSet={`${base}media/hero-900.webp 600w, ${base}media/hero-1600.webp 1066w`}
              sizes="(max-width: 900px) min(100vw, 560px), min(42vw, 520px)"
            />
            <img
              src={`${base}media/hero-1600.jpg`}
              srcSet={`${base}media/hero-900.jpg 600w, ${base}media/hero-1600.jpg 1066w`}
              sizes="(max-width: 900px) min(100vw, 560px), min(42vw, 520px)"
              width={1078}
              height={1600}
              alt={t("hero.alt")}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </motion.div>

        <motion.div className={styles.copy} {...fade}>
          <h1 id="hero-name" className={styles.name}>
            {t("hero.name")}
          </h1>
          <p className={styles.vocation}>{t("hero.vocation")}</p>
          <p className={styles.location}>{t("hero.location")}</p>
          <p className={styles.lead}>{t("hero.lead")}</p>
          <div className={styles.ctas}>
            <a className="btn btnPrimary" href="#work">
              {t("hero.ctaPrimary")}
            </a>
            <a className="btn btnGhost" href="#contact">
              {t("hero.ctaSecondary")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
