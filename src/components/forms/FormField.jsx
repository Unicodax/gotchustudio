export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  required = false,
  as = "input",
  placeholder,
  rows = 5,
}) {
  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;
  const Component = as;

  const baseClasses = `w-full rounded border bg-white px-4 py-3 text-ink placeholder:text-muted-light transition-colors duration-150 ${
    error ? "border-red-400" : "border-hairline focus:border-signal"
  }`;

  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-medium text-ink mb-2">
        {label}
        {required && <span className="text-signal"> *</span>}
      </label>
      <Component
        id={fieldId}
        name={name}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? rows : undefined}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={baseClasses}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        required={required}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
