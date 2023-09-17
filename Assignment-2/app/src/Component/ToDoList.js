import React, { useState } from "react";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [Tasks, setTasks] = useState([]);

  const addTask = () => {
    if (inputValue.length > 0) setTasks([...Tasks, inputValue]);
  };

  const removeTask = (Task) => {
    let updatedTask = Tasks.filter((el) => el !== Task);
    setTasks(updatedTask);
  };

  return [
    <>
      <p>
        <input
          placeholder="Enter your task"
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <button onClick={() => addTask()}>Add Task</button>
      </p>

      {Tasks.map((task, index) => {
        return (
          <div key={index} style={{ display: "flex", width: "450px" }}>
            <div>
              <input type="checkbox"></input>
            </div>
            <div style={{ fontSize: "25px" }}> {task}</div>
            <div>
              <button
                style={{ marginLeft: "30px" }}
                onClick={() => removeTask(task)}
              >
                Remove Task
              </button>
            </div>
          </div>
        );
      })}
    </>,
  ];
}
export default ToDoList;
