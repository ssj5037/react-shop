export default function RSButton({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-400 text-white rounded-md px-3 ${className}`}
    >
      {children}
    </button>
  );
}
