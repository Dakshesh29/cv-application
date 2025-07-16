import { useState } from "react";
import { Plus, Trash2, Edit, Save, X } from "lucide-react";
import { InputField } from "./common/InputField.jsx";
import { Button } from "./common/Button.jsx";

function Education() {
  const [formData, setFormData] = useState({
    institution: "University of Example",
    location: "Example City",
    degree: "B.Tech in Computer Science",
    dateRange: "2019 - 2023",
    cgpa: "8.5",
  });

  const [originalData, setOriginalData] = useState(formData);
  const [isEditing, setIsEditing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    setIsVisible((prev) => !prev);
  };

  if (!isVisible) {
    return (
      <div className="education-section education-hidden">
        <Button
          onClick={handleToggleVisibility}
          variant="primary"
          icon={<Plus size={18} />}
        >
          Add Education Section
        </Button>
      </div>
    );
  }

  return (
    <div className="education-section">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="form-layout">
          <InputField
            label="Institution"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
          />
          <InputField
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <InputField
            label="Degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
          />
          <InputField
            label="Date Range"
            name="dateRange"
            value={formData.dateRange}
            onChange={handleChange}
          />
          <InputField
            label="CGPA"
            name="cgpa"
            value={formData.cgpa}
            onChange={handleChange}
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
            <Button
              type="button"
              variant="danger"
              onClick={handleToggleVisibility}
              icon={<Trash2 size={18} />}
            >
              Remove Section
            </Button>
          </div>
        </form>
      ) : (
        <div className="education-display">
          <p className="education-degree-institution">
            {formData.degree} from {formData.institution}
          </p>
          <p className="education-location-date">
            {formData.location} | {formData.dateRange}
          </p>
          <p className="education-cgpa">CGPA: {formData.cgpa}</p>

          <div className="display-actions">
            <Button
              onClick={handleEdit}
              variant="secondary"
              icon={<Edit size={18} />}
            >
              Edit
            </Button>
            <Button
              onClick={handleToggleVisibility}
              variant="danger"
              icon={<Trash2 size={18} />}
            >
              Remove Section
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export { Education };
