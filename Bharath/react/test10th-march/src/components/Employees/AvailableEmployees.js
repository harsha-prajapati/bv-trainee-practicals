import React from 'react';
import Employee from './Employee';
import Card from '../UI/Card';
import classes from './AvailableEmployees.module.css'
const DUMMY_Employees= [
    {
      id: '001',
      name: 'Sushi',
      age:'22',
      location:'Ahmedabad',
      department: 'Reactjs',
      role:  "senior software engineer",
    },
    {
      id: '002',
      name: 'Schnitzel',
      age:'22',
      location:'Ahmedabad',
      department: 'Ios',
      role:  "senior software engineer",
    },
    {
      id: '003',
      name: 'xyz',
      age:'22',
      location:'Ahmedabad',
      department: 'Nodejs',
      role: "senior software engineer",
    },
    {
      id: '004',
      name: 'abc',
      age:'22',
      location:'Ahmedabad',
      department: 'Oodo',
      role: 'senior software engineer',
    },
  ];
  
  const AvaliableEmployees=()=>{
    
    const employeesList=DUMMY_Employees.map((emp)=>
        <Employee key={emp.id} id={emp.id} name={emp.name} role={emp.role} age={emp.age} location={emp.location} department={emp.department}/>
    );

    return (
        <section className={classes.employees}>
            <h1>Employees List</h1>
            <Card>
                <ul>{employeesList}</ul>
            </Card>
        </section>
    )
  }
  export default AvaliableEmployees;