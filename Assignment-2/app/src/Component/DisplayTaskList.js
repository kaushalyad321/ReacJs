import React from 'react'
import Task1 from '../Component/taskComponents/Task1';
import Task2 from '../Component/taskComponents/Task2';
import Task3 from '../Component/taskComponents/Task3';
import Task4 from '../Component/taskComponents/Task4';
import Task5 from '../Component/taskComponents/Task5';
import Task6 from '../Component/taskComponents/Task6';
import Task7 from '../Component/taskComponents/Task7';
import Task8 from '../Component/taskComponents/Task8';


const DisplayTaskList = () => {
  return (
    <div>
      <div style={{fontSize:'60px',display:'flex',justifyContent:'center'}}>TASK</div>
      <ol>
       <Task1/>
       <Task2/>
       <Task3/>
       <Task4/>
       <Task5/>
       <Task6/>
       <Task7/>
       <Task8/>
       </ol>
    </div>
  )
}

export default DisplayTaskList
