import React, { useState, useEffect } from "react";

export const List = ({ tasks, onDelete }) => {
  const [filter, setFilter] = useState(tasks);

  useEffect(() => {
    setFilter([...tasks]);
  }, [tasks]);

  //handle filter
  const handleSearch = e => {
    e.preventDefault();
    // some code
    let currentList = tasks;
    let newList = [];

    // currentList = tasks;
    newList = currentList.filter(item =>
      item.toLowerCase().includes(e.target.value.toLowerCase())
    );

    console.log(newList);
    //   update the filter state
    setFilter([...newList]);
  };

  return (
    <>
      <input
        type="text"
        className="imput"
        placeholder="search..."
        onChange={handleSearch}
      />
      <ul>
        {filter.map((a, i, arr) => (
          <li key={i}>
            {" "}
            {a}
            &nbsp;
            <span className="delete" onClick={() => onDelete(a)} />
          </li>
        ))}
      </ul>
    </>
  );
};
