import { useState } from "react";

const AutoSuggest = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [selectedSuggestions, setSelectedSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter the suggestions based on the input value
    const filtered = suggestions.filter((word) =>
      word.toLowerCase().includes(value.toLowerCase())
    );

    // Display only the first suggestion
    setFilteredSuggestions(filtered.slice(0, 1));
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestions([...selectedSuggestions, suggestion]);
    setInputValue("");
    setFilteredSuggestions([]); // Hide suggestions after clicking
  };

  const handleDelete = (index) => {
    const updatedSuggestions = selectedSuggestions.filter(
      (suggestions, i) => i != index
    );
    setSelectedSuggestions(updatedSuggestions);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type here..."
      />
      {filteredSuggestions.map((suggestion, index) => (
        <div key={index} onClick={() => handleSuggestionClick(suggestion)}>
          {suggestion}
        </div>
      ))}

      <div>
        <h2>Selected Suggestions</h2>
        {selectedSuggestions.map((suggestion, index) => (
          <div key={index}>
            {suggestion}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSuggest;
