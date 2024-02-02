export default function RSSvgButton({
  onClick,
  className,
  children,
  disabled,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center items-center rounded-full p-1 hover:bg-blue-50 
        w-16 h-16 text-blue-900 transition-all shrink-0
        disabled:bg-gray-50 disabled:text-gray-400
        ${className}`}
    >
      {children}
    </button>
  );
}
