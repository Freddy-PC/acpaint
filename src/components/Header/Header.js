import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logoImage from "../../images/paintLogo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/">
          <img src={logoImage} alt="Weather Logo" className="header__logo" />
        </NavLink>
      </div>
      <div className="header__nav">
        <ul className="navigation__container">
          <li>
            <button className="navigation__button">Services</button>
          </li>
          <li>
            <button className="navigation__button">Gallary</button>
          </li>
          <li>
            <button className="navigation__button">About Us</button>
          </li>
          <li>
            <button className="navigation__button">Contacts</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
