import { PersonalInfo } from "./components/PersonalInfo.jsx";
import { Education } from "./components/Education.jsx";
import { Experience } from "./components/Experience.jsx";
import { Projects } from "./components/Projects.jsx";
import { Skills } from "./components/Skills.jsx";
import { Section } from "./components/common/Section.jsx";

import "./styles.css";

export default function App() {
  return (
    <div className="app-container">
      <main className="cv-content-wrapper">
        <h1 className="app-title">Resume Builder</h1>

        <Section title="Personal Information">
          <PersonalInfo />
        </Section>

        <Section title="Education">
          <Education />
        </Section>

        <Section title="Experience">
          <Experience />
        </Section>

        <Section title="Projects">
          <Projects />
        </Section>

        <Section title="Skills">
          <Skills />
        </Section>
      </main>
    </div>
  );
}
