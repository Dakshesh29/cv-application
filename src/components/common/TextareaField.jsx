function TextareaField({ label, name, id, className = "", ...props }) {
  const textareaId = id || name;

  return (
    <div className="textarea-field-group">
      {label && (
        <label htmlFor={textareaId} className="input-label">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        className={`textarea-base ${className}`.trim()}
        {...props}
      ></textarea>
    </div>
  );
}

export { TextareaField };
