export default function CustomTextArea({
  label,
  id = "custom-textarea",
  name = "",
  placeholder = "",
  className = null,
}) {
  return (
    <label className={className}>
      <span className="text-theme-gray mb-2 block">{label}</span>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className="border-theme-gray h-40 w-full rounded-md border p-2"
      />
    </label>
  );
}
