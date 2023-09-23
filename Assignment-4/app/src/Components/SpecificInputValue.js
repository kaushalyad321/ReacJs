import React, { useState } from "react";
const SpecificInputValue = () => {
  const [inputValue, setInputValue] = useState("");
  const [massage, setMassage] = useState("");
  const handleClick = () => {
    if (inputValue === "show") {
      setMassage("well done friend your input value is correct ");
    }
  };

  let result = "";
  if (massage.length > 0) {
    result = massage;
  }

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
