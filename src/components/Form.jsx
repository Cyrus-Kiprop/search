import React, { useState, useEffect } from "react";
let initialState = [
  "Wash the dishes",
  "Go to the store",
  "Learn some code",
  "Catch up with some code reviews",
  "Pair with my Micorverse pairing partner"
];

export const Form = () => {
  //states
  const [tasks, setTasks] = useState(initialState);

  const [task, setTask] = useState("");

  //   some handler functions
  const handleChange = event => {
    if (event) event.preventDefault();
    setTask(event.target.value);
  };

  const addItem = event => {
    if (event) event.preventDefault();
    let data = tasks.slice(); // a copy of the state
    setTasks([...data, task]);
  };

  return (
    <div className="content">
      <div className="container">
        <section className="section">
          <ul>
            {tasks.map((a, i, arr) => (
              <li key={i}> {a}</li>
            ))}
          </ul>
        </section>
        <hr />
        <section className="section">
          <form className="form" id="addItemForm">
            <input
              type="text"
              className="input"
              id="addInput"
              placeholder="Something that needs to be done..."
              onChange={handleChange}
            />
            <button className="button is-info" onClick={addItem}>
              Add Item
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
