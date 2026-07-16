import { useTranslation } from "react-i18next";
import ShaderBackground from "./ShaderBackground";
import styles from "./Contact.module.css";

const LINKS = [
  { label: "Telegram", href: "https://t.me/MJ_Yuliia" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yuliia-volodina-9b0451200/" },
  { label: "GitHub", href: "https://github.com/yuliia-Volodina" },
  { label: "Instagram", href: "https://www.instagram.com/mj_yuliya_/" },
];

const base = import.meta.env.BASE_URL;

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className={`section ${styles.section}`}>
      <ShaderBackground />
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <p className="eyebrow">{t("contact.eyebrow")}</p>
          <h2 className={styles.title}>{t("contact.title")}</h2>
          <p className={styles.lead}>{t("contact.lead")}</p>
          <div className={styles.ctas}>
            <a className="btn btnPrimary" href="https://t.me/MJ_Yuliia" target="_blank" rel="noreferrer">
              {t("contact.cta")}
            </a>
            <a
              className="btn btnGhost"
              href="https://www.linkedin.com/in/yuliia-volodina-9b0451200/"
              target="_blank"
              rel="noreferrer"
            >
              {t("contact.mail")}
            </a>
          </div>
        </div>

        <div className={styles.side}>
          <picture>
            <source type="image/avif" srcSet={`${base}media/me.avif`} />
            <source type="image/webp" srcSet={`${base}media/me.webp`} />
            <img
              src={`${base}media/me.jpg`}
              width={800}
              height={612}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div>
            <p className={styles.linksTitle}>{t("contact.linksTitle")}</p>
            <ul className={styles.links}>
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
