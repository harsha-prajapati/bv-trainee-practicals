import React, { useEffect, useState } from "react";

import Employedetail from "./Employedetail";
//employes
const Employees = () => {
  const [selectedEmployee, setSelectedEmployee] = useState();

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const employees = [
    {
      id: 1,
      name: "Vishal",
      username: "vis11",
      department: "open source",
    },
    {
      id: 2,
      name: "Shoeab",
      username: "sho21",
      department: "open source node",
    },
    {
      id: 3,
      name: "Amit",
      username: "ami31",
      department: "mobile",
    },
    {
      id: 4,
      name: "Srikanth",
      username: "sri41",
      department: "NodeJS",
    },
  ];

  return (
    <div>
      <ul>
        <h2>Employees List</h2>
        {employees.map((employee, index) => (
          <>
            <table className="table">
              <tbody>
                <tr className="table-warning">
                  <td>{employee.id}</td>
                  <td onClick={() => handleEmployeeClick(employee)}>
                    {employee.name}
                  </td>
                  <td>{employee.department}</td>
                </tr>
              </tbody>
            </table>
          </>
        ))}
        <Employedetail employee={selectedEmployee} />
      </ul>
    </div>
  );
};

export default Employees;
