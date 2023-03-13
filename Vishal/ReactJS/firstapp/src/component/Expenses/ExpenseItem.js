import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [query, setQuery] = useState("");
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  // const search = () => {
  //   props.onSearch(props.title);
  //   console.log(props.title);
  // };

  return (
    <>
      <li>
        <Card className="expense-item">
          {/* <input
          type="text"
          placeholder="Search"
          onChange={search}

          //onChange={(e) => setQuery(e.target.value)}
        /> */}

          <ExpenseDate date={props.date} />

          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <h2>{props.id}</h2>

            <div className="expense-item__price">${props.amount}</div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={deleteHandler}
            >
              Delete
            </button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default ExpenseItem;
