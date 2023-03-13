import { useState } from "react";
import "./employeeData.css";
const List = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const clicked = () => {
    setIsClicked((prevItem) => !prevItem);
  };
  const popHandler = () => {
    alert(`Depatment : ${props.items.department}`);
  };
  return (
    <div className="data">
      <li>
        {!isClicked && (
          <h1 onClick={clicked} className="name">
            {props.items.name}
          </h1>
        )}
        {isClicked && (
          <div className="card">
            <h2 onClick={popHandler} className="name">
              Name : {props.items.name}
            </h2>
            <p>Department : {props.items.department}</p>
            <p>Designation : {props.items.designation}</p>
            <button onClick={clicked} className="buttonHover">
              Close
            </button>
          </div>
        )}
      </li>
    </div>
  );
};
export default List;
