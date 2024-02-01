export default function RSButton({ onClick, className, disabled, children }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-400 text-white rounded-md px-3 hover:bg-blue-300 transition-all ${className} disabled:bg-blue-100 disabled:hover:bg-blue-100`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
