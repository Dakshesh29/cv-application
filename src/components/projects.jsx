import { useState } from "react";

function Projects() {
  const [project, setProject] = useState({
    title: "Resume Builder App",
    link: "https://github.com/demo/resume-builder",
    description:
      "A dynamic CV builder with live preview and edit features using React.",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [originalData, setOriginalData] = useState(project);

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
    <div>
      <h2>Project</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            value={project.title}
            onChange={handleChange}
            placeholder="Project Title"
          />
          <input
            name="link"
            value={project.link}
            onChange={handleChange}
            placeholder="Project Link"
          />
          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
            placeholder="Description"
          />

          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <p>
            <strong>{project.title}</strong>
          </p>
          <p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </p>
          <p>{project.description}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export { Projects };
