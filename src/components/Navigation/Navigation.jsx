import React from 'react';
import { NavLink } from 'react-router-dom';
import css from 'components/Navigation/Navigation.module.css';


const Navigation = () => {
  return (
    <nav className={css.navBox}>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >Home</NavLink>
          <NavLink to="/movies"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Movies</NavLink>
    </nav>
  )
}


export default Navigation;
