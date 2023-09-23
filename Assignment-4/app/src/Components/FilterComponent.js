import React, { useState, useEffect } from "react";

const FilterComponent = () => {
  const filterArray = [
    "a",
    "abx",
    "apr",
    "ab",
    "anm",
    "awq",
    "pst",
    "drt",
    "uytr",
    "wqer",
    "rewt",
    "hjsj",
    "kiu",
    "qwert",
    "name",
    "pappu",
    "kaushal",
    "b",
    "ba",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
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
