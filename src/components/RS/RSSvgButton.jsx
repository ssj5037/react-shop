export default function RSSvgButton({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center rounded-full p-1 hover:bg-blue-50 
        w-16 h-16 text-blue-900 transition-all shrink-0 ${className}`}
    >
      {children}
    </button>
  );
}
