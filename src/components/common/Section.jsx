import React from "react";

function Section({ title, children }) {
  return (
    <section className="section-wrapper">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}

export { Section };
