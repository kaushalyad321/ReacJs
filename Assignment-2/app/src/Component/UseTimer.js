import React, { useEffect, useState } from "react";

const UseTimer = () => {
  const [time, setTime] = useState(1);
  const [continous, setContinous] = useState(false);

  useEffect(() => {
    let timespan;
    if(time<=0) setContinous(false) ;
    if (continous) {
      timespan = setInterval(() => {

      if(time>0){setTime((prevTime) => prevTime - 1)};
     
      }, 1000);
    } else {
      clearInterval(timespan);
    }

    return () => clearInterval(timespan);
  }, [continous]);

  const start = () => {
    setContinous(true);
  };

  const stop = () => {
    setContinous(false);
  };

  const reset = () => {
    setTime(100);
    setContinous(false);
  };

  return { time, continous, stop, start, reset };
};

export default UseTimer;
