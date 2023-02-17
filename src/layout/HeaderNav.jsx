import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
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
          <div className="header__main-ham-menu-cont">
            <img
              src="./assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className="header__main-ham-menu"
            />
            <img
              src="./assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="./index.html"> Home </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#about"> About </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#projects"> Projects </a>
            </li>

            <li className="header__sm-menu-link">
              <a href="./index.html#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
