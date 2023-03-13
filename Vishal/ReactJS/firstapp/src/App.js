import React, { useState } from "react";

import NewExpense from "./component/NewExpense/NewExpense";
import Expenses from "./component/Expenses/Expenses";
import ExpensesFilter from "./component/Expenses/ExpensesFilter";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 2, title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 3,
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 4,
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // const [query, setQuery] = useState(DUMMY_EXPENSES);

  const [searchVal, setSearchVal] = React.useState("");

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteItemHandler = (id) => {
    setExpenses((prevGoals) => {
      const updatedGoals = prevGoals.filter((value) => value.id !== id);
      return updatedGoals;
    });
  };
  const searchItemHandler = (searchVal) => {
    setExpenses((data) => {
      console.log(data);

      const searchdata = data.filter((value) =>
        value.title.includes(searchVal)
      );
      console.log(data);
      return searchdata;
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={expenses}
        onDeleteItem={deleteItemHandler}
        onSearch={searchItemHandler}
        onChange={handleInput}
        value={expenses}
      />
    </div>
  );
};

export default App;
