import { PersonalInfo } from "./components/personalinfo.jsx";
import { Education } from "./components/education.jsx";
import { Experience } from "./components/experience.jsx";
import { Projects } from "./components/projects.jsx";
import { Skills } from "./components/skills.jsx";

function App() {
  return (
    <>
      <PersonalInfo />
      <Education />
      <Experience />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
