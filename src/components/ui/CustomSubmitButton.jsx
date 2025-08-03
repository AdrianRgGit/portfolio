export default function CustomSubmitButton({ text, className = "", ...props }) {
  return (
    <button
      type="submit"
      className={`btn-hover-fill group border-theme-black flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 shadow transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(176,255,111,0.6)] ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}
