import { useState } from "react";

function PersonalInfo() {
  const [formData, setFormData] = useState({
    name: "Jane Doe",
    location: "San Francisco, CA",
    phone: "123-456-7890",
    email: "janedoe@example.com",
    linkedinLink: "https://linkedin.com/in/janedoe",
    githubLink: "https://github.com/janedoe",
  });

  const [isEditing, setIsEditing] = useState(false);
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

  return (
    <div className="personal-info-section">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />

          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>LinkedIn:</label>
          <input
            type="text"
            name="linkedinLink"
            value={formData.linkedinLink}
            onChange={handleChange}
          />

          <label>GitHub:</label>
          <input
            type="text"
            name="githubLink"
            value={formData.githubLink}
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
          </div>
        </form>
      ) : (
        <div className="personal-info-display">
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Location:</strong> {formData.location}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href={formData.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.linkedinLink}
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href={formData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {formData.githubLink}
            </a>
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export { PersonalInfo };
