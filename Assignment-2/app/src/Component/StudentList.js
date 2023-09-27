import React, { useState, useMemo } from "react";

const StudentList = () => {
  const [newStudent, setNewStudent] = useState("");
  const [updatedName, setUpdatedName] = useState("");
  const [studentNameList, setStudentNameList] = useState([
    "Kaushal Kumar Yadav",
    "Mohan Kumar Yadav",
    "Sohan Kumar Yadav",
    "Pappu Kumar Yadav",
    "Nannu Kumar Yadav",
    "Kakku Kumar Yadav",
    "Tattu Kumar Yadav",
  ]);

  const addNewstudent = () => {
    if (newStudent.length > 0) setUpdatedName(newStudent);
  };
  const updatedList = useMemo(() => {
    if (updatedName.length > 0)
      setStudentNameList([...studentNameList, updatedName]);
  }, [updatedName]);

  return (
    <div>
      <ol>
        {studentNameList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
      Enter Student Name :{" "}
      <input
        placeholder="input student name"
        onChange={(e) => setNewStudent(e.target.value)}
      />
      <button onClick={addNewstudent}>Add New Student</button>
    </div>
  );
};

export default StudentList;
