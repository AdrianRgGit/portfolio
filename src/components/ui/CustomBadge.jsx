export default function CustomBadge({ className = null, children }) {
  return (
    <div
      class={`border-theme-black w-fit rounded-full border px-4 ${className}`}
    >
      <p>{children}</p>
    </div>
  );
}
