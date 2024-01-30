export default function RSInput({
  type,
  name,
  placeholder,
  className,
  value,
  onChange,
}) {
  return (
    <>
      {type === "number" ? (
        <input
          type="number"
          placeholder={placeholder}
          className={`border p-3 outline-1 outline-blue-300 ${className}`}
          name={name}
          value={value}
          onChange={onChange}
          min={0}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={`border p-3 outline-1 outline-blue-300 ${className}`}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  );
}
