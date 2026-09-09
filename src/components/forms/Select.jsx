export default function Select({ label, name, value, onChange, onBlur, options, error, required = false, placeholder }) {
  const fieldId = `field-${name}`;
  const errorId = `${fieldId}-error`;

  return (
    <div>
      <label htmlFor={fieldId} className="block text-sm font-medium text-ink mb-2">
        {label}
        {required && <span className="text-signal"> *</span>}
      </label>
      <select
        id={fieldId}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded border bg-white px-4 py-3 text-ink transition-colors duration-150 ${
          error ? "border-red-400" : "border-hairline focus:border-signal"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
