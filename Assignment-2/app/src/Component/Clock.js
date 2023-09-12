import React from "react";
const Clock = () => {
  const [time, setTime] = React.useState("");
     // Logic, computation to update time (which is side-effect) should put inside useEffect
  React.useEffect(() => {
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
