import { useState } from "react";
import TextInput from "./textinput";
import Checkbox from "./checkbox";
import CheckDate from "./checkdate";
import DynamicInput from "./TextBox";

export default function TripPlanner() {
  const checkboxes = [
    { name: "Family", label: "Family" },
    { name: "Solo", label: "Solo" },
    { name: "Couple", label: "Couple" },
    { name: "Friends", label: "Friends" },
  ];

  const Guests = [
    { value: "one" },
    { value: "two" },
    { value: "three" },
    { value: "four" },
  ];

  const [formData, setFormData] = useState({
    placeOfVisit: "",
    checked: { Friends: true },
    checkInDate: new Date(),
    checkOutDate: new Date(),
    noOfGuests: "two",
  });

  const handleChange = (event) => {
    if (event.target.type === "checkbox") {
      setFormData({
        ...formData,
        checked: {
          ...formData.checked,
          [event.target.name]: event.target.checked,
        },
      });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleSelectChange = (event) => {
    setFormData({ ...formData, noOfGuests: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submmited!", formData);
  };

  return (
    <>
      <form className="travelform">
        <div className="travelDetails">
          <div>
            <TextInput
              label="City, Location"
              textValue={formData.placeOfVisit}
              onChange={handleChange}
              placeholder="Shimla"
              name="placeOfVisit"
            />
            {formData.placeOfVisit}
          </div>
          <div>
            <CheckDate
              name="checkInDate"
              value={formData.checkInDate}
              label="CheckIn Date"
              onChange={handleChange}
            />
          </div>
          <div>
            <CheckDate
              name="checkOutDate"
              value={formData.checkOutDate}
              label="CheckOut Date"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Guests</label>
            <select
              name="noOfGuests"
              value={formData.noOfGuests}
              onChange={handleSelectChange}
            >
              {Guests.map((guest) => (
                <option
                  key={guest.value}
                  value={guest.value}
                  style={
                    guest.value === formData.noOfGuests
                      ? {
                          fontWeight: "bold",
                          backgroundColor: "orange",
                          color: "white",
                        }
                      : null
                  }
                >
                  {guest.value}
                </option>
              ))}
            </select>
          </div>
          <div>
            <button
              className="travelbutton"
              type="submit"
              onSubmit={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
        <div>
          {checkboxes.map((checkbox) => (
            <Checkbox
              key={checkbox.name}
              name={checkbox.name}
              checked={formData.checked[checkbox.name]}
              onChange={handleChange}
              label={checkbox.label}
              className={formData.checked[checkbox.name] ? "preselected" : ""}
            />
          ))}
        </div>
      </form>
      <div>
        <img
          className="image"
          src="https://images.unsplash.com/photo-1528114039593-4366cc08227d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aXRhbHl8ZW58MHx8MHx8fDA%3D"
        />
        <DynamicInput
          type="text"
          label="City, Location"
          onChange={handleChange}
          value={formData.placeOfVisit}
          name="placeOfVisit"
        />
      </div>
    </>
  );
}
