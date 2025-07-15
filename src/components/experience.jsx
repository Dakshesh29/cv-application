import { useState } from "react";

function Experience() {
  const [experience, setExperience] = useState({
    company: "OpenAI",
    position: "Frontend Developer",
    startDate: "Jan 2023",
    endDate: "Present",
    description: "Developed interactive UI components and improved UX.",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [originalData, setOriginalData] = useState(experience);

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
    <div>
      <h2>Experience</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="company"
            value={experience.company}
            onChange={handleChange}
            placeholder="Company"
          />
          <input
            name="position"
            value={experience.position}
            onChange={handleChange}
            placeholder="Position"
          />
          <input
            name="startDate"
            value={experience.startDate}
            onChange={handleChange}
            placeholder="Start Date"
          />
          <input
            name="endDate"
            value={experience.endDate}
            onChange={handleChange}
            placeholder="End Date"
          />
          <textarea
            name="description"
            value={experience.description}
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
            <strong>{experience.position}</strong> at {experience.company}
          </p>
          <p>
            {experience.startDate} – {experience.endDate}
          </p>
          <p>{experience.description}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export { Experience };
