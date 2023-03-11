// import { useState } from "react";
import List from "./EmployeCard";
import classes from "./EmployeeList.css";

const dummyDataList = [
  { id: "E1", name: "Pavan", department: "ReactJS", designation: "Traine" },
  { id: "E2", name: "Bharat", department: "ReactJS", designation: "Traine" },
  { id: "E3", name: "Leela", department: "ReactJS", designation: "Traine" },
  { id: "E4", name: "Babu", department: "ReactJS", designation: "Traine" },
];
const ListItems = () => {
  return (
    <>
      <ul className={classes.list}>
        {dummyDataList.map((data) => (
          <List items={data} key={data.id} />
        ))}
      </ul>
    </>
  );
};

export default ListItems;
