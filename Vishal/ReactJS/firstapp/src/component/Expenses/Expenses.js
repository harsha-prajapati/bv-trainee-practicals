import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [ser, setSer] = useState("");
  const [expenselist, setExpenselist] = useState("");

  useEffect(() => {
    const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
    setExpenselist(filteredExpenses);
  }, [filteredYear]);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // const searchItemHandler = (searchVal) => {
  //   setSer(searchVal);
  // };

  // const searchItemHandlers = props.items.filter((expense) => {
  //   console.log(expense);

  //   return expense.title === ser;
  // });

  const searchItemHandlers = (ser) => {
    const searchdata = props.items.filter((items) => items.title.includes(ser));
    console.log(props.items.filter((items) => items.title.includes(ser)));
    // setSer(searchdata);
    setExpenselist(searchdata);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
          // onSearchRes={searchItemHandler}
          // onSearch={props.onSearch}
          // onChange={props.onChange}
          // value={props.searchVal}
          // value={ser}
          items={searchItemHandlers}
          selecteds={ser}
        />
        <ExpensesChart expenses={expenselist} />
        <ExpensesList
          items={expenselist}
          onDeleteItem={props.onDeleteItem}
          onSearch={props.onSearch}
          onChange={props.onChange}
          value={props.searchVal}
        />
      </Card>
    </div>
  );
};

export default Expenses;
