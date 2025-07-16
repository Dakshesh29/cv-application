import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  Edit,
  Save,
  X,
} from "lucide-react";

import { InputField } from "./common/InputField.jsx";
import { Button } from "./common/Button.jsx";
import { InfoItem } from "./common/InfoItem.jsx";

function PersonalInfo() {
  const [formData, setFormData] = useState({
    name: "Jack Denial",
    location: "San Francisco, CA",
    phone: "123-456-7890",
    email: "jackdenial@example.com",
    linkedinLink: "https://linkedin.com/in/jackdenial",
    githubLink: "https://github.com/jackdenial",
  });

  const [originalData, setOriginalData] = useState(formData);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    setOriginalData(formData);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData(originalData);
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="personal-info-section">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="form-layout">
          <InputField
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            label="Location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
          />
          <InputField
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="LinkedIn URL"
            name="linkedinLink"
            type="url"
            value={formData.linkedinLink}
            onChange={handleChange}
          />
          <InputField
            label="GitHub URL"
            name="githubLink"
            type="url"
            value={formData.githubLink}
            onChange={handleChange}
          />

          <div className="form-actions">
            <Button type="submit" variant="primary" icon={<Save size={18} />}>
              Save
            </Button>
            <Button
              type="button"
              variant="secondary"
              icon={<X size={18} />}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <div className="personal-info-display">
          <p className="personal-info-name">{formData.name}</p>

          <InfoItem icon={<MapPin size={18} />} text={formData.location} />
          <InfoItem icon={<Phone size={18} />} text={formData.phone} />
          <InfoItem
            icon={<Mail size={18} />}
            text={
              <a href={`mailto:${formData.email}`} className="link-style">
                {formData.email}
              </a>
            }
          />
          <InfoItem
            icon={<Linkedin size={18} />}
            text={
              <a
                href={formData.linkedinLink}
                className="link-style"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.linkedinLink}
              </a>
            }
          />
          <InfoItem
            icon={<Github size={18} />}
            text={
              <a
                href={formData.githubLink}
                className="link-style"
                target="_blank"
                rel="noopener noreferrer"
              >
                {formData.githubLink}
              </a>
            }
          />

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

export { PersonalInfo };
