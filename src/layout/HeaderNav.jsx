import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

export const HeaderNav = () => {

  const [active, setActive] = useState('header__sm-menu');
  const [icon, setIcon] = useState('header__main-ham-menu');
  const [icon2, setIcon2] = useState('header__main-ham-menu-close d-none');
  
  const navToggle = () => {
    (active === 'header__sm-menu--active') ? setActive('header__sm-menu') : setActive('header__sm-menu--active');
    (icon === 'header__main-ham-menu') ? (setIcon2('header__main-ham-menu-close'), setIcon('header__main-ham-menu d-none')) : (setIcon('header__main-ham-menu'), setIcon2('header__main-ham-menu-close d-none'));
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src="http://localhost:3000/png/perfil.png"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Juan Fonseca</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <NavLink to="/home" className={({isActive}) => isActive? "header__link__active header__link" : "header__link"}> Home </NavLink>
            </li>
            <li className="header__link-wrapper">
            <NavLink to="/about" className={({isActive}) => isActive? "header__link__active header__link" : "header__link"}> About </NavLink>
            </li>
            <li className="header__link-wrapper">
            <NavLink to="/projects" className={({isActive}) => isActive? "header__link__active header__link" : "header__link"}> Projects </NavLink>
            </li>
            <li className="header__link-wrapper">
            <NavLink to="/contact" className={({isActive}) => isActive? "header__link__active header__link" : "header__link"}> Contact </NavLink>
            </li>
          </ul>
          <div onClick= {()=> {navToggle()}} className="header__main-ham-menu-cont">
            <img
              src="http://localhost:3000/svg/ham-menu.svg"
              alt="hamburger menu"
              className={icon}
            />
            <img
              src="http://localhost:3000/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className={icon2}
            />
          </div>
        </div>
      </div>
      <div className={active}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <NavLink to="/home" onClick={()=> {navToggle()}}> Home </NavLink>
            </li>

            <li className="header__sm-menu-link">
              <NavLink to="/about"onClick={()=> {navToggle()}}> About </NavLink>
            </li>

            <li className="header__sm-menu-link">
              <NavLink to="/proyects" onClick={()=> {navToggle()}}> Proyects </NavLink>
            </li>

            <li className="header__sm-menu-link">
              <NavLink to="/contact" onClick={()=> {navToggle()}}> Contact </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
