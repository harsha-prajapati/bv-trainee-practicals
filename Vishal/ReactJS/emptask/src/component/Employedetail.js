import React from "react";
//employee
const Employedetail = ({ employee }) => {
  const handleUserNameClick = () => {
    alert(`Department: ${employee.department}`);
  };
  console.log(employee);

  if (employee === undefined) {
  } else {
    return (
      <div>
        <h2>Employee Details</h2>

        <table className="table table-dark table-striped">
          <tbody>
            <tr className="table-success">
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td onClick={handleUserNameClick}>{employee.username}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};
export default Employedetail;
