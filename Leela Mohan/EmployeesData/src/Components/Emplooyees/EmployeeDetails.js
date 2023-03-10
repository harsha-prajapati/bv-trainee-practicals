import { useState } from "react";
import Card from "../../UI/Card";


const Employee = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const nameAlertHandler = () => {
    alert(`Department: ${props.data.department}`);
  };
  const detailsHandler = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <Card>
      {!isVisible && (
        <div onClick={detailsHandler}>
          <h2>{props.data.name}</h2>
        </div>
      )}
    
      {isVisible && (
        <div onClick={detailsHandler}>
          <p>
            <label onClick={nameAlertHandler}>
              Emplooyee Name: {props.data.name}
            </label>
          </p>
          <p>
            <label>Emplooyee Id: {props.data.id}</label>
          </p>
          <p>
            <label>Emplooyee Age: {props.data.age}</label>
          </p>
          {/* <p>
              <label>Emplooyee Department: {props.data.department}</label>
            </p> */}
        </div>
      )}
    </Card>
  );
};
export default Employee;
