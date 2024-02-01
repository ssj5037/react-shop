export default function RSInput({
  type,
  name,
  placeholder,
  className,
  value,
  onChange,
  required,
  accept,
}) {
  return (
    <>
      <input
        type={type}
        accept={accept}
        min={0}
        placeholder={placeholder}
        className={`border p-3 outline-1 outline-blue-300 ${className}`}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
}
