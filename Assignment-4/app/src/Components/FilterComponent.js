import React, { useState, useEffect } from "react";

const FilterComponent = () => {
  const filterArray = [
    "abandon",
    "axe",
    "april",
    "abrahm",
    "annu",
    "awkward",
    "password",
    "dirty",
    "uber",
    "wrong",
    "right",
    "honey",
    "key",
    "Book",
    "name",
    "pappu",
    "kaushal",
    "bullet",
    "bat",
    "cat",
    "donkey",
    "elephant",
    "fan",
    "gut",
    "hen",
    "iron",
    "jug",
    "king",
    "lion",
    "mango",
    "narrow",
    "orange",
    "parrot",
    "queen",
    "ray",
    "song",
    "time",
    "unit",
    "van",
    "watch",
    "x-ray",
    "yacht",
    "zoom",
  ];

  const [inputValue, setInputValue] = useState("");
  let filteredList = [];
  if (inputValue.length > 0)
    filteredList = filterArray.filter((list) =>
      list.toLowerCase().includes(inputValue.toLowerCase())
    );

  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        ></input>
        <button>search</button>
      </div>

      <div>
        <filtered Search query></filtered>
        {filteredList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
};

export default FilterComponent;
