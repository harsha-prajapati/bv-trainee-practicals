import React, { useState } from 'react';
import './EmployeeData.css'
// import classes from "./Test1.module.css"

const EmployeeDetails = ({ employee, onBackClick }) => {
    const handleUserNameClick = () => {
        alert(`Department: ${employee.department}`);
    };

    return (
        <div className='container'>
            <h2>Employee Details</h2>
            <div className='list'>
            <div className='name'>
                <label>Name: </label>
                <span className='name'>{employee.name}</span>
            </div>
            <div className=' age'>
                <label>Age: </label>
                <span className='age'>{employee.age}</span>
            </div>
            <div className='username'>
                <label>Username: </label>
                <span className='username' onClick={handleUserNameClick} >{employee.username}</span>
            </div>
            <button className='button' onClick={onBackClick}>Back to Employees</button>
            </div>
        </div>
    );
};

const Employees = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleEmployeeClick = (employee) => {
        setSelectedEmployee(employee);
    };

    const handleBackClick = () => {
        setSelectedEmployee(null);
    };

    const employees = [
        { name: 'Shoeab', age: 35, username: 'patel', department: 'Sales' },
        { name: 'sakib', age: 28, username: 'shaikh', department: 'Marketing' },
        { name: 'aasif', age: 42, username: 'pathan', department: 'Engineering' },
        { name: 'aadil', age: 23, username: 'tiger', department: 'Human Resources' },
        { name: 'umar', age: 27, username: 'roar', department: 'System' },
    ];

    if (selectedEmployee) {
        return <EmployeeDetails  employee={selectedEmployee} onBackClick={handleBackClick} />;
    }

    return (
        <div>
            <h2 className='heading'>Employee list</h2>
            <ul className='employeeComponent'>
                {employees.map((employee, index) => (
                    <ul className='list-elements' key={index} onClick={() => handleEmployeeClick(employee)}>
                        {employee.name}
                    </ul>
                ))}
            </ul>
        </div>
    );
};

export default Employees;