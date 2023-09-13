function TaskList({ task }) {
  return (
    <ol>
      {task.map((assignedWork) => (
        <li className="user">{assignedWork}</li>
      ))}
    </ol>
  );
}

export default TaskList;
