import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logoImage from "../../images/paintLogo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    // if open set to true
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/">
          <img src={logoImage} alt="Weather Logo" className="header__logo" />
        </NavLink>
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
        <ul className={`headernav__links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#services" className="headernav__link">
              Services
            </a>
          </li>
          <li>
            <a href="#gallary" className="headernav__link">
              Gallary
            </a>
          </li>
          <li>
            <a href="#aboutus" className="headernav__link">
              About Us
            </a>
          </li>
          <li>
            <a href="#contacts" className="headernav__link">
              Contacts
            </a>
          </li>
        </ul>
      </div>
      <div className="header__content">
        <h1 className="header__title">Welcome to A&C Painting</h1>
        <p className="header__text">
          With over 10 years of experience in the painting industry, we deliver
          high-quality services at an affordable price. Feel free to ask us any
          questions about your next project.
        </p>
      </div>
      <div className="header__footer">
        <a href="#contacts" className="header__link">
          How to Contact Us 🤔❓
        </a>
        <p className="header__location">Asheville, North Carolina</p>
      </div>
    </header>
  );
};

export default Header;
