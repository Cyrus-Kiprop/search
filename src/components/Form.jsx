import React, { useState, useEffect } from "react";
import { List } from "./List";

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
    event.preventDefault();
    const todos = tasks.slice(); // making  copy of the array

    setTasks([...todos, task]);
    console.log(tasks);
  };

  // onDelete
  const onDelete = item => {
    console.log("clicked");
    const data = tasks.slice();
    data.map((a, i) => {
      if (a === item) {
        data.splice(i, 1); //mutative
      }
      return true;
    });
    setTasks([...data]);
  };

  return (
    <div className="content">
      <div className="container">
        <section className="section">
          <List tasks={tasks} onDelete={onDelete} />
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
