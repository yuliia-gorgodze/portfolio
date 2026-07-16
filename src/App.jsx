import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import Craft from "./components/Craft";
import AiWork from "./components/AiWork";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { i18n, t } = useTranslation();

  return (
    <div className={`${i18n.language}-language`}>
      <a className="skipLink" href="#main">
        {t("a11y.skip")}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <SelectedWork />
        <AiWork />
        <Craft />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
