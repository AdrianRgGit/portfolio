export default function CustomInputText({
  id = "",
  label = "Nombre",
  type = "text",
  name = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  className = "",
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
        onChange={onChange}
        className="border-theme-gray w-full rounded-md border p-2"
        required={["email", "text"].includes(type)}
      />
    </label>
  );
}
