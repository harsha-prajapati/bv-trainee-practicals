import classes from "./EmployeesList.module.css";
import React from "react";
import EmployeeCard from "../../UI/EmployeeCard";
import Employee from "./EmployeeDetails";

const EMPLOYEES = [
  {
    id: "B1",
    name: "Pavan",
    age: 24,
    department: "React.Js",
  },
  {
    id: "B2",
    name: "Babu",
    age: 24,
    department: "React.Js",
  },
  {
    id: "B3",
    name: "Bharath",
    age: 23,
    department: "React.Js",
  },
  {
    id: "B4",
    name: "Srikanth",
    age: 22,
    department: "Node.Js",
  },
  {
    id: "B5",
    name: "Venkat",
    age: 21,
    department: "Node.Js",
  },
  {
    id: "B6",
    name: "Siva",
    age: 21,
    department: "Node.Js",
  },
  {
    id: "B7",
    name: "Leela",
    age: 24,
    department: "React.Js",
  },
];


const EmployeeDetails = (props) => {
  const empList = EMPLOYEES.map((emp) => (
    <Employee key={emp.id} data={emp}></Employee>
  ));
  return (
    <section className={classes.employees}>
      <EmployeeCard>
        <ul>{empList}</ul>
      </EmployeeCard>
    </section>
  );
};

export default EmployeeDetails;
