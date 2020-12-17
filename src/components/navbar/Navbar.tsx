import classes from './navbar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(){
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <a>News</a>
      </div>
      <div className={classes.item}>
        <a>Music</a>
      </div>
      <div className={classes.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
}
export default Navbar;