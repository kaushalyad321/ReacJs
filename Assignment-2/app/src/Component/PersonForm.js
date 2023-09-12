import { useState } from "react";
function PersonForm() {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [age, setAge] = useState('');
    const [obj,setObj] =useState({First_Name :"",Last_Name : "",Age :""})
const submitValue = () => {
        setObj({...obj,First_Name:fName,Last_Name:lName,Age:age}) ;    
}

return(
    <>
    <p>firstName is : {obj['First_Name']}</p>
    <p>lastName is : {obj['Last_Name']}</p>
    <p>Age is :{obj['Age']}</p>
    <input type="text" placeholder="First Name" onChange={e => setfName(e.target.value)} />
    <input type="text" placeholder="Last Name" onChange={e => setlName(e.target.value)} />
    <input type="text" placeholder="Age" onChange={e => setAge(e.target.value)} />
    <button onClick={submitValue}>Submit</button>
    </>
    ) ;
}

   
export default PersonForm ;