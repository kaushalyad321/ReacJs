import React, { useState, useMemo } from "react";

const EmployeeSalary = () => {
  const [id, setId] = useState(0);
  const [salary, setsalary] = useState(0);
  const [EmployeeData, setEmployeeData] = useState([
    { Name: "Sohan Kumar Yadav", Salary: 200000, ID: 0 },
    { Name: "Neeraj Kumar Yadav", Salary: 100000, ID: 1 },
    { Name: "Rishav Kumar Yadav", Salary: 800000, ID: 2 },
    { Name: "Nitish Kumar Yadav", Salary: 400000, ID: 3 },
    { Name: "Tatan Kumar Yadav", Salary: 300000, ID: 4 },
  ]);

  let totalSum = 0;

  const updatedData = () => {
    const updatedSalary = EmployeeData.map((employee) => {
      if (employee.ID === parseInt(id)) {
        return { ...employee, Salary: salary };
      } else {
        return employee;
      }
    });
    setEmployeeData(updatedSalary);
  };
  const averageSalary = useMemo(() => {
    EmployeeData.map((data) => {
      totalSum += parseInt(data.Salary);
    });
    return totalSum / EmployeeData.length;
  }, [EmployeeData]);

  const updatedSalaryList = EmployeeData.map((employee, index) => {
    return (
      <div key={index}>
        <span>{employee.ID}</span>
        <span style={{ marginLeft: "25px" }}>{employee.Name}</span>
        <span style={{ marginLeft: "40px" }}>{employee.Salary}</span>
      </div>
    );
  });

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "260px",
          }}
        >
          <div>ID</div>
          <div>Employee_Name</div>
          <div>Salary</div>
        </div>
        <hr></hr>
        <div>{updatedSalaryList}</div>
        <hr></hr>
        <input
          placeholder="Enter ID"
          onChange={(e) => setId(e.target.value)}
        ></input>
        <input
          placeholder="Enter Salary"
          onChange={(e) => setsalary(e.target.value)}
        ></input>
        <button
          onClick={() => {
            updatedData();
          }}
        >
          Update Salary
        </button>
        <div>Average Salary of All Employee is :{averageSalary}</div>
      </div>
    </>
  );
};

export default EmployeeSalary;
