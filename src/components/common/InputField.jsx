function InputField({ label, name, id, className = "", ...props }) {
  const inputId = id || name;

  return (
    <div className="input-field-group">
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        className={`input-base ${className}`.trim()}
        {...props}
      />
    </div>
  );
}

export { InputField };
