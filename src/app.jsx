import { PersonalInfo } from "./components/personalinfo.jsx";
import { Education } from "./components/education.jsx";
import { Experience } from "./components/experience.jsx";
import { Projects } from "./components/projects.jsx";
import { Skills } from "./components/skills.jsx";

function App() {
  return (
    <div className="cv-container">
      <div className="section">
        <PersonalInfo />
      </div>
      <div className="section">
        <Education />
      </div>
      <div className="section">
        <Experience />
      </div>
      <div className="section">
        <Projects />
      </div>
      <div className="section">
        <Skills />
      </div>
    </div>
  );
}

export default App;
