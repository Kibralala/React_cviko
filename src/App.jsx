import { useState } from "react";
import "./App.css";

import DeveloperForm from "./components/DeveloperForm";
import DeveloperList from "./components/DeveloperList";
import TaskForm from "./components/TaskForm";

function App() {
  const [listOfDevelopers, setListOfDevelopers] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  const capacity = listOfDevelopers.reduce((sum, dev) => {
    if (dev.level === "junior") {
      return sum + 100;
    }
    if (dev.level === "senior") {
      return sum + 200;
    }
    return sum;
  }, 0);

  const numberOfJuniors = listOfDevelopers.filter(
    (dev) => dev.level === "junior",
  ).length;
  const numberOfSeniors = listOfDevelopers.filter(
    (dev) => dev.level === "senior",
  ).length;

  const handleDelete = (idToDel) => {
    const temp = listOfDevelopers.filter((dev) => dev.id !== idToDel);
    setListOfDevelopers(temp);
  };

  const handleAdd = (devToAdd) => {
    setListOfDevelopers([...listOfDevelopers, devToAdd]);
  };

  return (
    <div className="app-root">
      <div className="page-container">
        <h2>Your app for handling projects</h2>
        <div className="page-toggler">
          <button
            name="list-of-developers"
            className={`toggler-btn ${activeTab === 1 ? "active" : ""}`}
            onClick={() => setActiveTab(1)}
          >
            List of programmers
          </button>
          <button
            name="planning-tasks"
            className={`toggler-btn ${activeTab === 2 ? "active" : ""}`}
            onClick={() => setActiveTab(2)}
          >
            Form for planning tasks
          </button>
        </div>
        {activeTab === 1 && (
          <>
            <h3>Your team</h3>
            <DeveloperList
              data={listOfDevelopers}
              handleDelete={handleDelete}
            />
            <DeveloperForm data={listOfDevelopers} onAdd={handleAdd} />
          </>
        )}
        {activeTab === 2 && (
          <>
            <h3 className="task-title">Your task</h3>
            <div className="task-instructions">
              <p>
                Enter the total number of code lines and the number of days
                needed for your project.
                <br></br>
                If the plan is feasible, the button will turn green and you can
                approve it. If not, the button will remain red and disabled,
                indicating that you need to add more developers or adjust the
                project requirements.
              </p>
            </div>
            <div className="team-stats">
              <p>
                You currently have{" "}
                <strong>{numberOfJuniors} junior developers</strong> and{" "}
                <strong>{numberOfSeniors} senior developers</strong>.
              </p>
              <p>
                Your team capacity is <strong>{capacity} lines of code</strong>{" "}
                per day.
              </p>
            </div>
            <TaskForm capacity={capacity} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
