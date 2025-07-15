import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState(["JavaScript", "React", "Tailwind CSS"]);
  const [isEditing, setIsEditing] = useState(false);
  const [originalSkills, setOriginalSkills] = useState(skills);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      setSkills([...skills, input.trim()]);
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
    setIsEditing(false);
  };

  return (
    <div>
      <h2>Skills</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <ul>
            {skills.map((skill, idx) => (
              <li key={idx}>
                {skill}{" "}
                <button type="button" onClick={() => handleRemove(idx)}>
                  x
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a skill"
          />
          <button type="button" onClick={handleAdd}>
            Add
          </button>
          <br />
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <ul>
            {skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export { Skills };
