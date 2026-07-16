import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>{t("footer.copy")}</p>
      </div>
    </footer>
  );
}
