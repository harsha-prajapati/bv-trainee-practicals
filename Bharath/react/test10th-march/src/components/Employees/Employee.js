import React, { Fragment,useState } from 'react';
import Card from '../UI/Card';
import classes from './Employee.module.css';

const Employee = (props)=>{
    const[isClicked,setIsclicked]=useState(false);
    const onclickedhandler=()=>{
      if(!isClicked){
        setIsclicked(true);
      }else{
        setIsclicked(false);
      }
      
     
    }
    const onclickedNameHandler=()=>{
      alert(`Department:${props.department}`)
     
    }
    return (
      <Card >
        
        <li className={classes.Employee}  onClick={onclickedhandler} >
          
      
          {!isClicked &&<p >{props.name}</p>}
      
         {isClicked && <Fragment >
          <p onClick={onclickedNameHandler}>{props.name}</p>
           <p className={classes.role}>id:{props.id}</p>
            <p className={classes.role}>age:{props.age}</p>
            <p className={classes.role}>Location:{props.location}</p>
            <p className={classes.role}>Role:{props.role}</p>
          </Fragment>}
        
       
      </li>
      </Card>
    )
}
export default Employee;