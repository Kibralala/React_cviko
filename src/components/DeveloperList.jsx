import React from "react";
import "./DeveloperList.css";

function DeveloperList({ data, handleDelete }) {
  return (
    <div className="container list">
      {data.map((item) => (
        <div key={item.id} className="item">
          <span>
            {item.name} - {item.level}
          </span>
          <button
            className="btn btn-delete"
            onClick={() => handleDelete(item.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default DeveloperList;
