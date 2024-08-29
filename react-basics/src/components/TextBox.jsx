const DynamicInput = ({ type, label, value, onChange, name }) => {
  let inputComponent;

  if (type === "text") {
    inputComponent = (
      <input type={type} value={value} onChange={onChange} name={name} />
    );
  } else if (type === "checkbox") {
    inputComponent = (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  } else if (type === "date") {
    inputComponent = <input type={type} value={value} onChange={onChange} />;
  } else {
    inputComponent = <input type={type} value={value} onChange={onChange} />;
  }

  return (
    <div style={{ margin: "10px" }}>
      <label>{label}</label>
      {inputComponent}
    </div>
  );
};

export default DynamicInput;
