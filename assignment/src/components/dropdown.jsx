function Dropdown({ suggestions, saveOnSelect, selectedSuggestion }) {
  return (
    <div>
      {suggestions.map((s) =>
        selectedSuggestion.includes(s) ? (
          <div className="selected" key={s}>
            <button className="dropdown selected" onClick={saveOnSelect}>
              {s}
            </button>
          </div>
        ) : (
          <div key={s}>
            <button className="dropdown" onClick={saveOnSelect}>
              {s}
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default Dropdown;
