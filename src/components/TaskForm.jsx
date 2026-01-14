import React, { useState } from "react";
import "./TaskForm.css";

function TaskForm({ capacity }) {
  const [tempTask, setTempTask] = useState({
    lines: "",
    time: "",
  });
  const lines = Number(tempTask.lines);
  const days = Number(tempTask.time);

  const requiredCapacity = days > 0 ? lines / days : 0;
  const isInputValid = lines > 0 && days > 0;
  const isPlanOk = isInputValid && capacity >= requiredCapacity;

  const handleTask = (event) => {
    const source = event.target.name;
    switch (source) {
      case "lines": {
        setTempTask({ ...tempTask, lines: event.target.value });
        break;
      }
      case "time": {
        setTempTask({ ...tempTask, time: event.target.value });
        break;
      }
      default:
        break;
    }
  };

  const handleConfirm = () => {
    if (isPlanOk) {
      alert("Plan approved!");
    }
  };

  return (
    <div className="task-form">
      <div className="input-group">
        <label className="label" htmlFor="lines">
          Lines of code
        </label>
        <input
          className="input"
          type="number"
          name="lines"
          id="lines"
          min="1"
          step="10"
          placeholder="total number of lines"
          onChange={handleTask}
          value={tempTask.lines}
        />
      </div>
      <div className="input-group">
        <label className="label" htmlFor="time">
          time limit (days)
        </label>
        <input
          className="input"
          type="number"
          name="time"
          id="time"
          min="1"
          step="0.5"
          placeholder="total number of days"
          onChange={handleTask}
          value={tempTask.time}
        />
      </div>
      <button
        className={isPlanOk ? "btn-ok" : "btn-fail"}
        disabled={!isPlanOk}
        onClick={handleConfirm}
      >
        Do it
      </button>
    </div>
  );
}

export default TaskForm;
