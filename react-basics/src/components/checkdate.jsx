function CheckDate({ name, value, label, onChange }) {
  return (
    <label className="label">
      {label}
      <input type="date" name={name} value={value} onChange={onChange} />
    </label>
  );
}

export default CheckDate;
