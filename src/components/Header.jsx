import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../theme";
import styles from "./Header.module.css";

const LINKS = [
  { key: "work", href: "#work" },
  { key: "ai", href: "#ai" },
  { key: "craft", href: "#craft" },
  { key: "experience", href: "#experience" },
  { key: "contact", href: "#contact" },
];

const ease = [0.22, 1, 0.36, 1];

export default function Header() {
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const setLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    document.documentElement.lang = lng;
  };

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
          open ? styles.menuOpen : ""
        }`}
      >
        <div className={`container ${styles.inner}`}>
          <a className={styles.brand} href="#main">
            {t("shortName")}
          </a>

          <nav className={styles.desktop} aria-label="Primary">
            {LINKS.filter((link) => link.key !== "contact").map((link) => (
              <a key={link.key} href={link.href}>
                {t(`menu.${link.key}`)}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <div className={styles.lang} role="group" aria-label="Language">
              <button
                type="button"
                className={i18n.language === "en" ? styles.activeLang : ""}
                aria-pressed={i18n.language === "en"}
                aria-label={t("a11y.langEn")}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                type="button"
                className={i18n.language === "uk" ? styles.activeLang : ""}
                aria-pressed={i18n.language === "uk"}
                aria-label={t("a11y.langUk")}
                onClick={() => setLang("uk")}
              >
                UK
              </button>
            </div>

            <button
              type="button"
              className={styles.theme}
              aria-pressed={isDark}
              aria-label={isDark ? t("a11y.themeLight") : t("a11y.themeDark")}
              onClick={toggleTheme}
            >
              <span className={styles.themeIcon} aria-hidden="true">
                {isDark ? (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="1.75"
                    />
                    <path
                      d="M12 2v2.2M12 19.8V22M4.2 12H2M22 12h-2.2M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="square"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                    <path
                      d="M18.5 13.2A7.2 7.2 0 0 1 10.8 5.5 7.5 7.5 0 1 0 18.5 13.2Z"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </button>

            <button
              type="button"
              className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t("a11y.menuClose") : t("a11y.menuOpen")}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            className={styles.mobile}
            aria-hidden={false}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.28, ease }}
          >
            <motion.div
              className={styles.mobilePanel}
              initial={reduce ? false : { y: "-8%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduce ? undefined : { y: "-4%", opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.4, ease }}
            >
              {LINKS.map((link, index) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={() => setOpen(false)}
                  initial={reduce ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: 8 }}
                  transition={{
                    duration: reduce ? 0 : 0.38,
                    delay: reduce ? 0 : 0.06 + index * 0.055,
                    ease,
                  }}
                >
                  <span className={styles.mobileIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.mobileLabel}>
                    {t(`menu.${link.key}`)}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
