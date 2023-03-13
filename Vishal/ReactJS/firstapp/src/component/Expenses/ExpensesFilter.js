import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  // const search = () => {
  //   props.onSearch(props.title);
  //   console.log(props.title);
  // };

  const search = (event) => {
    props.items(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          onChange={search}
          items={props.selecteds}
          // items={props.value}
          // items
          //onChange={(e) => setQuery(e.target.value)}
        />
        {/* <input
          onChange={props.handleInput}
          value={props.searchVal}
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Search Products"
        /> */}
      </div>
    </div>
  );
};

export default ExpensesFilter;
