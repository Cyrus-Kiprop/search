import React from "react";

export const List = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((a, i, arr) => (
        <li key={i}>
          {" "}
          {a}
          &nbsp;
          <span className="delete" onClick={() => onDelete(a)} />
        </li>
      ))}
    </ul>
  );
};
