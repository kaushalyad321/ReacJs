import React from "react";
import Task from "./taskComponents/Task";

const DisplayTaskList = () => {
  const taskList = [
    <Task taskName="playing cricket" />,
    <Task taskName="Going Gym at 6 a.m" />,
    <Task taskName="Playing Chungi " />,
    <Task taskName="Watching Movie" />,
    <Task taskName="Watching Movie" />,
    <Task taskName="Learning C/C++ " />,
    <Task taskName="Play Badminton" />,
    <Task taskName="Learning React " />,
  ];
  return (
    <div>
      <div
        style={{ fontSize: "60px", display: "flex", justifyContent: "center" }}
      >
        TASK
      </div>
      <ol>
        {taskList.map((task) => {
          return <div>{task} </div>;
        })}
      </ol>
    </div>
  );
};

export default DisplayTaskList;
