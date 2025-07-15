import { useState } from "react";

function Education() {
  const [formData, setFormData] = useState({
    institution: "University of Example",
    location: "Example City",
    degree: "B.Tech in Computer Science",
    dateRange: "2019 - 2023",
    cgpa: "8.5",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [originalData, setOriginalData] = useState(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setOriginalData(formData);
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(originalData);
    setIsEditing(false);
  };

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!isVisible) {
    return (
      <div className="education-section">
        <button onClick={handleToggleVisibility}>Add Education Section</button>
      </div>
    );
  }

  return (
    <div className="education-section">
      <h2>Education</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>Institution</label>
          <input
            type="text"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
          />

          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />

          <label>Degree</label>
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
          />

          <label>Date Range</label>
          <input
            type="text"
            name="dateRange"
            value={formData.dateRange}
            onChange={handleChange}
          />

          <label>CGPA</label>
          <input
            type="text"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleChange}
          />

          <div style={{ marginTop: "1rem" }}>
            <button type="submit">Save</button>
            <button
              type="button"
              onClick={handleCancel}
              style={{ marginLeft: "0.5rem" }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleToggleVisibility}
              style={{ marginLeft: "0.5rem" }}
            >
              Remove Section
            </button>
          </div>
        </form>
      ) : (
        <div className="education-display">
          <p>
            <strong>Institution:</strong> {formData.institution}
          </p>
          <p>
            <strong>Location:</strong> {formData.location}
          </p>
          <p>
            <strong>Degree:</strong> {formData.degree}
          </p>
          <p>
            <strong>Date Range:</strong> {formData.dateRange}
          </p>
          <p>
            <strong>CGPA:</strong> {formData.cgpa}
          </p>

          <button onClick={handleEdit}>Edit</button>
          <button
            onClick={handleToggleVisibility}
            style={{ marginLeft: "0.5rem" }}
          >
            Remove Section
          </button>
        </div>
      )}
    </div>
  );
}

export { Education };
