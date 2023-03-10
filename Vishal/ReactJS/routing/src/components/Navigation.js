import React from "react";
import { Link } from "react-router-dom";
import classes from "../components/navigation.module.css";
const Navigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
