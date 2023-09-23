import React,{useState} from "react";

const DropDownMenu = () => {
    const[option,setOption]=useState('') ;
    let result='' ;
    if(option.length>0){
        result= <p>You have selected {option} color from the option</p>
    }
 
    return(
    <div>
      <form>
        <select onClick={(e)=>{setOption(e.target.value)}}>
          <option value="" selected disabled>
            Select a Color
          </option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red" style={{}}>
            Red
          </option>
          <option value="yellow" style={{ backgroundColor: "yellow" }}>Yellow</option>
         </select>
      </form>
      {
        result
      }
    </div>
  );
};

export default DropDownMenu;
