import { useState } from "react";
import { Plus, Trash2, Edit, Save, X } from "lucide-react";
import { Button } from "./common/Button.jsx";

function Skills() {
  const [skills, setSkills] = useState([
    "JavaScript",
    "React",
    "Vanilla CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "REST APIs",
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [originalSkills, setOriginalSkills] = useState(skills);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const newSkill = input.trim();
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setInput("");
    }
  };

  const handleRemove = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleEdit = () => {
    setOriginalSkills(skills);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setSkills(originalSkills);
    setInput("");
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setIsEditing(false);
  };

  return (
    <div className="skills-section">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="form-layout">
          <div className="skills-edit-list">
            {skills.map((skill, idx) => (
              <span key={idx} className="skill-tag-editable">
                {skill}
                <button
                  type="button"
                  onClick={() => handleRemove(idx)}
                  className="skill-remove-button"
                  aria-label={`Remove ${skill}`}
                >
                  <X size={16} />
                </button>
              </span>
            ))}
          </div>

          <div className="skill-input-group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new skill"
              className="skill-input-field"
            />
            <Button
              type="button"
              onClick={handleAdd}
              variant="primary"
              icon={<Plus size={18} />}
            >
              Add
            </Button>
          </div>

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
        <div className="skills-display">
          <div className="skills-list-display">
            {skills.map((skill, idx) => (
              <span key={idx} className="skill-tag-display">
                {skill}
              </span>
            ))}
          </div>
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

export { Skills };
