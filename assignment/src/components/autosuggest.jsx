import { useState, useEffect } from "react";
import Dropdown from "./dropdown";

function AutoSuggest({ isSingle }) {
  const sArray = ["India", "Indonesia", "Itlay", "France", "Finland"];
  const [suggestions, setSuggestions] = useState(sArray);
  const [input, setInput] = useState("");
  const [selectedSuggestion, setSelectedSuggestion] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.closest(".dropdown-container") === null) {
        setShowDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showDropDown]);

  const displayDropDown = () => {
    setShowDropDown(true);
  };

  const saveOnSelect = (e) => {
    if (!isSingle) {
      setSelectedSuggestion([...selectedSuggestion, e.target.textContent]);
      setShowDropDown(false);
      setInput("");
      setSuggestions(sArray);
    } else {
      setShowDropDown(false);
      setInput(e.target.textContent);
      setSuggestions(sArray);
    }
  };

  const changeInput = (e) => {
    console.log(e.target.value);
    let value = e.target.value;
    if (value.length == 0) {
      setInput("");
      setShowDropDown(false);
      setSuggestions(sArray);
    } else {
      setInput(value);
      let newSuggestions = suggestions.filter((s) =>
        s.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(newSuggestions);
    }
  };

  const clearSuggestionItem = (suggestion) => {
    const updatedSuggestions = selectedSuggestion.filter(
      (s) => s != suggestion
    );
    setSelectedSuggestion(updatedSuggestions);
  };

  return (
    <div className="autocomplete dropdown-container">
      {selectedSuggestion.length === 0
        ? null
        : selectedSuggestion.map((s) => (
            <span key={s}>
              {s}
              <button onClick={() => clearSuggestionItem(s)}>❌</button>
            </span>
          ))}

      <input
        className="textinput"
        type="text"
        onClick={displayDropDown}
        value={input}
        onChange={changeInput}
      />
      {showDropDown ? (
        <Dropdown
          suggestions={suggestions}
          saveOnSelect={saveOnSelect}
          selectedSuggestion={selectedSuggestion}
        />
      ) : null}
    </div>
  );
}

export default AutoSuggest;
