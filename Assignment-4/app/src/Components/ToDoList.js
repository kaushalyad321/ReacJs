import React, { useState } from "react";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [index, setIndex] = useState(0);

  const [Tasks, setTasks] = useState([]);

  const addTask = () => {
    if (inputValue.length > 0)
      setTasks((Tasks) => [...Tasks, { taskName: inputValue, taskId: index }]);
    setIndex(index + 1);
  };

  const updateTask = (taskId) => {
    let updatedTask=prompt('please update task ')
   const updatedTasks= Tasks.map((task) => {
      if(task['taskId']===taskId){
        return {...task,taskName:updatedTask}
      }
      return {...task}
    });
    setTasks(updatedTasks)
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
            <div style={{ fontSize: "25px" }}> {task.taskName}</div>
            <div>
              <button
                style={{ marginLeft: "30px" }}
                onClick={() => updateTask(task.taskId)}
              >
                Update Task
              </button>
            </div>
          </div>
        );
      })}
    </>,
  ];
}
export default ToDoList;
