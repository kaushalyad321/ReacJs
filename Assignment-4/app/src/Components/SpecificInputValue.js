import React, { useState } from "react";
const SpecificInputValue = () => {
  const [inputValue, setInputValue] = useState("");
  const[result,setResult]=useState('') ;
  const handleClick = () => {
     if(inputValue==='show'){
      setResult( <>hi friend your input value is correct</>)
     }
     else{
      setResult('') ;
     }

  };

  
  return (
    <div>
      <label for="fname">Enter Specific Word:</label>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={handleClick}>Submit</button>
      <div>{result}</div>
    </div>
  );
};

export default SpecificInputValue;
