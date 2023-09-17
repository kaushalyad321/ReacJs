import React from "react";
import { useEffect ,useState} from "react";
const Clock = () => {
  const [time, setTime] = useState("");
  // Logic, computation to update time (which is side-effect) should put inside useEffect
  useEffect(() => {
    // Running side-effect when component mounted (componentDidMount)
    const myInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    // Clear side-effect when component unmount (componentWillUnmount)
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
      <p>CURRENT TIME : {time}</p>
    </>
  );
};

export default Clock;
