import classes from './EmployeeCard.module.css'
const EmployeeCard = (props) => {
    return <div className={classes.empcard}>{props.children}</div>
};

export default EmployeeCard;