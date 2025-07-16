import { useState } from "react";
import { Edit, Save, X } from "lucide-react";
import { InputField } from "./common/InputField.jsx";
import { TextareaField } from "./common/TextareaField.jsx";
import { Button } from "./common/Button.jsx";

function Experience() {
  const [experience, setExperience] = useState({
    company: "OpenAI",
    position: "Frontend Developer",
    startDate: "Jan 2023",
    endDate: "Present",
    description:
      "Developed interactive UI components and improved UX for various web applications. Collaborated with cross-functional teams to deliver high-quality software solutions.",
  });

  const [originalData, setOriginalData] = useState(experience);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    setOriginalData(experience);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setExperience(originalData);
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="experience-section">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="form-layout">
          <InputField
            label="Company"
            name="company"
            value={experience.company}
            onChange={handleChange}
            placeholder="Company Name"
          />
          <InputField
            label="Position"
            name="position"
            value={experience.position}
            onChange={handleChange}
            placeholder="Your Position"
          />
          <InputField
            label="Start Date"
            name="startDate"
            value={experience.startDate}
            onChange={handleChange}
            placeholder="e.g., Jan 2023"
          />
          <InputField
            label="End Date"
            name="endDate"
            value={experience.endDate}
            onChange={handleChange}
            placeholder="e.g., Present or Dec 2024"
          />
          <TextareaField
            label="Description"
            name="description"
            value={experience.description}
            onChange={handleChange}
            placeholder="Key responsibilities and achievements..."
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
        <div className="experience-display">
          <p className="experience-position-company">
            {experience.position} at {experience.company}
          </p>
          <p className="experience-date">
            {experience.startDate} – {experience.endDate}
          </p>
          <p className="experience-description">{experience.description}</p>

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

export { Experience };
