function Button({
  children,
  variant = "primary",
  icon = null,
  className = "",
  ...props
}) {
  const baseClass = "button-base";
  const variantClass =
    {
      primary: "button-primary",
      secondary: "button-secondary",
      danger: "button-danger",
    }[variant] || "button-primary";

  const combinedClassName = `${baseClass} ${variantClass} ${className}`.trim();

  return (
    <button className={combinedClassName} {...props}>
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
}

export { Button };
