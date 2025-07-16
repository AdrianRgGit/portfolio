export default function CustomBadge({ children }) {
  return (
    <div class="border-theme-black w-fit rounded-full border px-4">
      <p>{children}</p>
    </div>
  );
}
