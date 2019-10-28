import React, { useState, useEffect } from "react";


import 'bulma/css/bulma.css'

// some data
const data = 
  [
	{
		"ID": "1",
		"Name": "Senpai",
		"Gender": "1",
		"Class": "32",
		"Club": "0",
		"Persona": "1",

	},
	{
		"ID": "2",
		"Name": "Yui Rio",
		"Gender": "0",
		"Class": "11",
		"Club": "0",
		"Persona": "5",
	
	
	},
	{
		"ID": "3",
		"Name": "Yuna Hina",
		"Gender": "0",
		"Class": "12",
		"Club": "0",
		"Persona": "6",
	
	
	},
	{
		"ID": "4",
		"Name": "Koharu Hinata",
		"Gender": "0",
		"Class": "21",
		"Club": "0",
		"Persona": "6",
	
	},
	{
		"ID": "5",
		"Name": "Mei Mio",
		"Gender": "0",
		"Class": "22",
		"Club": "0",
		"Persona": "6",
		
	},
	{
		"ID": "6",
		"Name": "Saki Miyu",
		"Gender": "0",
		"Class": "31",
		"Club": "0",
		"Persona": "6",
	
	},
	{
		"ID": "7",
		"Name": "Kokona Haruka",
		"Gender": "0",
		"Class": "32",
		"Club": "0",
		"Persona": "6",
	
	},
	{
		"ID": "8",
		"Name": "Haruto Yuto",
		"Gender": "1",
		"Class": "11",
		"Club": "0",
		"Persona": "2",
	
	},
	{
		"ID": "9",
		"Name": "Sota Yuki",
		"Gender": "1",
		"Class": "12",
		"Club": "0",
		"Persona": "2",
	
	},
	{
		"ID": "10",
		"Name": "Hayato Haruki",
		"Gender": "1",
		"Class": "21",
		"Club": "0",
		"Persona": "2",
	
	},
	{
		"ID": "11",
		"Name": "Ryusei Koki",
		"Gender": "1",
		"Class": "22",
		"Club": "0",
		"Persona": "2",
	
	},
	{
		"ID": "12",
		"Name": "Sora Sosuke",
		"Gender": "1",
		"Class": "31",
		"Club": "0",
		"Persona": "2",
	
	},
	{
		"ID": "13",
		"Name": "Riku Soma",
		"Gender": "1",
		"Class": "32",
		"Club": "0",
		"Persona": "2",
	
	},
	{
		"ID": "14",
		"Name": "Pippi Osu",
		"Gender": "0",
		"Class": "32",
		"Club": "11",
		"Persona": "1",
	
	},
	{
		"ID": "15",
		"Name": "Ryuto Ippongo",
		"Gender": "1",
		"Class": "32",
		"Club": "11",
		"Persona": "1",
		
	},
	{
		"ID": "16",
		"Name": "Midori Gurin",
		"Gender": "0",
		"Class": "11",
		"Club": "11",
		"Persona": "6",
		
	}
  ]


// database mocking
let initialState = [
  "Wash the dishes",
  "Go to the store",
  "Learn some code",
  "Catch up with some code reviews",
  "Pair with my Micorverse pairing partner"
];
​
export const App = () => {
  const [tasks, setTasks] = useState(initialState); // overall state

  const [task, setTask] = useState('') // individual task
​
  // add Items to the main Task state
  const addItem = event => {
    const todos = tasks.slice(); // making  copy of the array
    console.log(todos);
    setTasks([...todos, task ]);
  };
​
  // handles the user inputs
  const handleChange = event => {
   if(event) event.preventDefault();
   setTask(event.target.value); // sets the task state with keyed values
  };
​
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