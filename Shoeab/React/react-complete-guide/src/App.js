// import ExpenseItem from "./components/ExpenseItem";
import React,{ useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 30000,
    date: new Date(2022, 1, 2),
  },

  {
    id: "e2",
    title: "new tv",
    amount: 12200,
    date: new Date(2021, 2, 4),
  },

  {
    id: "e3",
    title: "car Insurance",
    amount: 20300,
    date: new Date(2022, 3, 6),
  },

  {
    id: "e4",
    title: "LED",
    amount: 17800,
    date: new Date(2019, 4, 8),
  },
  {
    id: "e5",
    title: "heloo",
    amount: 34563,
    date: new Date(2022, 3, 6),
  },

  {
    id: "e6",
    title: "Cooker",
    amount: 100,
    date: new Date(2019, 4, 8),
  },
];
const App=()=>{
  const[expenses,setExpenses]=useState(DUMMY_EXPENSES)
  const addExpenseHandler=(expense)=>
  {
     setExpenses((prevExpenses)=>{
    return[expense,...prevExpenses];
  })     
  };
  return(
    <div>
      {/* { <h2>Let's get started!</h2> } */}
      {/* <h1>Lets get Started!!!!</h1> */}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;