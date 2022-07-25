import { NavLink } from "react-router-dom";
import React from "react";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Notes from around the World</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/notes" activeClassName={classes.active}>
              All notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-note" activeClassName={classes.active}>
              Add a note
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
