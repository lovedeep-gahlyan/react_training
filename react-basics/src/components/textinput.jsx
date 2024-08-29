export default function TextInput({
  label,
  textValue,
  onChange,
  placeholder,
  name,
}) {
  return (
    <label className="label">
      {label}
      <input
        name={name}
        type="text"
        onChange={onChange}
        value={textValue}
        placeholder={placeholder}
      />
    </label>
  );
}
