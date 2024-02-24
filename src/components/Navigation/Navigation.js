import React from "react";
import { NavLink } from "react-router-dom";

/* Fix class names //////////////////////////////*/
import "../Header/Header.css";
import "./Navigation.css";

import logoImage from "../../images/paintLogo.svg";

const Navigation = ({
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  closeMenu,
}) => {
  // if mobile menu is open set to true
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
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
            <NavLink to="/" className="header__navlink">
              <button
                className="headernav__link"
                onClick={() => {
                  scrollToSection("services");
                  closeMenu();
                }}
              >
                Services
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="header__navlink">
              <button
                className="headernav__link"
                onClick={() => {
                  scrollToSection("contacts");
                  closeMenu();
                }}
              >
                Contacts
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className="header__navlink"
              onClick={() => {
                closeMenu();
              }}
            >
              <button className="headernav__link">Gallery</button>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/about" className="headernav__link">
              About Us
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
