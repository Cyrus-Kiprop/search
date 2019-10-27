import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
// database mocking
let initialState = [
  "Wash the dishes",
  "Go to the store",
  "Learn some code",
  "Catch up with some code reviews",
  "Pair with my Micorverse pairing partner"
];

export const App = () => {
  const [task, setTask] = useState(null); // initiating the default state

  // handle adding items to the state
  const addItem = event => {
    event.preventDefault();
    if (!initialState.includes(task)) {
      console.log(task);
      initialState.splice(initialState.length - 1, 0, task);
    }
  };

  // handles user inputs
  const handleChange = event => {
    if (event) event.preventDefault();
    setTask(event.target.value);
  };

  return (
    <div className="content">
      <div className="container">
        <section className="section">
          <ul>
            {initialState.map((a, i, arr) => (
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
