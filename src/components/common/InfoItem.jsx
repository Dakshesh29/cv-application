import React from "react";

function InfoItem({ icon, text }) {
  return (
    <div className="info-item">
      <span className="info-icon">{icon}</span>
      <span className="info-text">{text}</span>
    </div>
  );
}

export { InfoItem };
