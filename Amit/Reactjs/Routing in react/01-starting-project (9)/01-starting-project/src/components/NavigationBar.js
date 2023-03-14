import React from "react";
import { NavLink } from "react-router-dom"
import classes from "./NavigationBar.module.css"

const NavigationBar = () => {
    return (
        <>
            <header className={classes.header}>
                <nav>
                    <ul className={classes.list}>
                        <li ><NavLink to="/" className={({ isActive }) => isActive ? classes.active : undefined} end >HomePage</NavLink></li>
                        <li><NavLink to="/products" className={({ isActive }) => isActive ? classes.active : undefined} >ProductsPage</NavLink></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default NavigationBar;
