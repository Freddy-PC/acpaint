import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logoImage from "../../images/paintLogo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/">
          <img src={logoImage} alt="Weather Logo" className="header__logo" />
        </NavLink>
      </div>
      <div className="header__nav">
        <ul className="nav__container">
          <li>
            <button className="nav__button">Services</button>
          </li>
          <li>
            <button className="nav__button">Gallary</button>
          </li>
          <li>
            <button className="nav__button">About Us</button>
          </li>
          <li>
            <button className="nav__button">Contacts</button>
          </li>
        </ul>
      </div>
      <div className="header__navmobile">
        <div
          className={`navmobile__container ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="navmobile__line"></div>
          <div className="navmobile__line"></div>
          <div className="navmobile__line"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
