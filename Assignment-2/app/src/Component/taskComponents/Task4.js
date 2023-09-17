import React, { useCallback, useState } from "react";

const Task4 = () => {
  const [complete, setComplete] = useState(false);
  const [buttonValue, setButtonValue] = useState("Complete");
  const update = useCallback(() => {
    setButtonValue("Completed");
  }, [complete]);

  return (
    <div>
      <li>
        <span>Watching Movie </span>
        <button
          onClick={() => {
            setComplete(true);
            update();
          }}
          style={{ marginLeft: "20px" }}
        >
          {buttonValue}
        </button>
      </li>
    </div>
  );
};

export default Task4;
