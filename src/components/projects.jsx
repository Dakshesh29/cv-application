import { useState } from "react";
import { Edit, Save, X } from "lucide-react";
import { InputField } from "./common/InputField.jsx";
import { TextareaField } from "./common/TextareaField.jsx";
import { Button } from "./common/Button.jsx";

function Projects() {
  const [project, setProject] = useState({
    title: "Resume Builder App",
    link: "https://github.com/demo/resume-builder",
    description:
      "Developed a dynamic CV builder with live preview and edit features using React. Implemented responsive design for optimal viewing on various devices.",
  });

  const [originalData, setOriginalData] = useState(project);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    setOriginalData(project);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setProject(originalData);
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="project-section">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="form-layout">
          <InputField
            label="Project Title"
            name="title"
            value={project.title}
            onChange={handleChange}
            placeholder="e.g., My Awesome Project"
          />
          <InputField
            label="Project Link"
            name="link"
            value={project.link}
            onChange={handleChange}
            placeholder="e.g., https://github.com/your-username/your-project"
            type="url"
          />
          <TextareaField
            label="Description"
            name="description"
            value={project.description}
            onChange={handleChange}
            placeholder="Brief description of your project..."
          />

          <div className="form-actions">
            <Button type="submit" variant="primary" icon={<Save size={18} />}>
              Save
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={handleCancel}
              icon={<X size={18} />}
            >
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <div className="project-display">
          <p className="project-title-text">{project.title}</p>
          <p className="project-link-text">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-style"
            >
              {project.link}
            </a>
          </p>
          <p className="project-description">{project.description}</p>

          <div className="display-actions">
            <Button
              onClick={handleEdit}
              variant="secondary"
              icon={<Edit size={18} />}
            >
              Edit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export { Projects };
