import React, { useState } from "react";
import "./DeveloperForm.css";

function DeveloperForm({ data, onAdd }) {
  const [newDev, setNewDev] = useState({
    id: data.length > 0 ? Math.max(...data.map((dev) => dev.id)) + 1 : 1,
    name: "",
    level: "junior",
  });

  const [valid, setValid] = useState(false);

  const validateData = (dev) => {
    if (dev.name.trim() === "" || dev.level.trim() === "") {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const resetNewDev = () => {
    const temp = {
      id: newDev.id + 1,
      name: "",
      level: "junior",
    };
    setNewDev(temp);
    setValid(false);
  };

  const handleChange = (event) => {
    const source = event.target.name;
    const val = event.target.value;
    let updatedDev;
    switch (source) {
      case "name": {
        updatedDev = { ...newDev, name: val };
        break;
      }
      case "level": {
        updatedDev = { ...newDev, level: val };
        break;
      }
      default:
        break;
    }
    setNewDev(updatedDev);
    validateData(updatedDev);
  };

  return (
    <div className="dev-form">
      <div className="name-group">
        <label className="label">Name</label>
        <input
          className="input"
          type="text"
          name="name"
          id="name"
          placeholder="developer's name"
          onChange={handleChange}
          value={newDev.name}
        />
      </div>
      <div className="radio-group">
        <label className="label">
          <input
            type="radio"
            name="level"
            onChange={handleChange}
            value="junior"
            checked={newDev.level === "junior"}
          />
          junior
        </label>
        <label>
          <input
            type="radio"
            name="level"
            onChange={handleChange}
            checked={newDev.level === "senior"}
            value="senior"
          />
          senior
        </label>
      </div>
      <button
        className="btn btn-add"
        disabled={!valid}
        onClick={() => {
          onAdd(newDev);
          resetNewDev();
        }}
      >
        Add
      </button>
    </div>
  );
}

export default DeveloperForm;
