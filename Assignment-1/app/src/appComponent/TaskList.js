
function TaskList({task}){
        return (
           <ol>
            {
              task.map((user) => (
              <li className="user">{user}</li>
            ))
            }
            </ol>
    
        );
      
      };

export default TaskList 