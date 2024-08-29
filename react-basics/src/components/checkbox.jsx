import React from "react";

function Checkbox({ name, checked, onChange, label, className }) {
  return (
    <label className={className}>
      {label}
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
}

export default Checkbox;
