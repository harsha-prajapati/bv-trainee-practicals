import Card from "./UI/Card";
import EmployeeDetails from "./Components/Emplooyees/EmployeesList";
import { useState } from "react";
import './index.css'

function App() {
  const [shownEmpList, setShownEmpList] = useState(false);

  const buttonHandler = (e) => {
    e.preventDefault()
    setShownEmpList(true)
  }
  return (
    <div>
      {!shownEmpList && <div className="buttons"><button onClick={buttonHandler}>Emplooyee List</button></div>}
    {shownEmpList && <Card>
      <EmployeeDetails></EmployeeDetails>
    </Card>}
    </div>

  );
}

export default App;
