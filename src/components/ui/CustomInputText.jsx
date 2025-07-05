export default function CustomInputText({
  id = null,
  label = "Nombre",
  type = "text",
  name = null,
  placeholder = "Tu nombre",
  value = null,
  className = null,
}) {
  return (
    <label className={className}>
      <span className="text-theme-gray mb-2 block">{label}</span>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        className="border-theme-gray w-full rounded-md border p-2"
      />
    </label>
  );
}
