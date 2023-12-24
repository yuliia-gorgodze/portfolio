import Header from "./components/header";
import Hero from "./components/hero";
import WorkExperience from "./components/workExperience";
import s from "./App.module.css";
import PhilosophyValues from "./components/philosophyValues";
import Skillset from "./components/skillset";

function App() {
  return (
    <div className={s.mainContainer}>
      <div className={s.bgHero}>
        <div className={s.bgBlack} />
        <div className={s.bgGrey} />
      </div>
      <Header />
      <Hero />
      <WorkExperience />
      <PhilosophyValues />
      <Skillset />
    </div>
  );
}

export default App;
