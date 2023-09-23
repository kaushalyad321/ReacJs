import React, { useState } from "react";
const TempConverter = () => {
  const [tempCel, setTempCel] = useState(0);
  const [tempFah, setTempFah] = useState(32);
  const fohrenheitController = (e) => {
    setTempFah(e.target.value);
    setTempCel(((e.target.value - 32) * 5) / 9);
  };

  const celciusController = (e) => {
    setTempCel(e.target.value);
    setTempFah(e.target.value * +32);
  };

  return (
    <div>
      <label for="fname"> temperature in Celsius: </label>
      <input type="text" onChange={celciusController} value={tempCel} />
      <br />
      <label for="fname"> temperature in Fahrenheit: </label>
      <input type="text" onChange={fohrenheitController} value={tempFah} />
      <br />
    </div>
  );
};

export default TempConverter;
