import React from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <>
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <>
            <ExpenseItem
              key={""}
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              onDelete={props.onDeleteItem}
              onChange={props.onChange}
              value={props.searchVal}

              // onSearch={props.onSearch}
            />
            {/* <ExpensesFilter onSearches={props.onSearch} /> */}
          </>
        ))}
      </ul>
    </>
  );
};

export default ExpensesList;
