import React from "react";
import { NavLink } from "react-router-dom";

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
      <div className="navigation__container">
        <NavLink to="/" onClick={closeMenu}>
          <img
            src={logoImage}
            alt="Weather Logo"
            className="navigation__logo"
          />
        </NavLink>
        <div className="navigation__navmobile">
          <div
            className={`navmobile__container ${
              isMenuOpen ? "navmobile__container_active" : ""
            }`}
            onClick={toggleMenu}
          >
            <div className="navmobile__line"></div>
            <div className="navmobile__line"></div>
            <div className="navmobile__line"></div>
          </div>
        </div>
        <ul
          className={`navigation__links ${
            isMenuOpen ? "navigation__links_active" : ""
          }`}
        >
          <li>
            <NavLink to="/" className="navigation__navlink">
              <button
                className="navigation__link"
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
            <NavLink to="/" className="navigation__navlink">
              <button
                className="navigation__link"
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
              className="navigation__navlink"
              onClick={() => {
                closeMenu();
              }}
            >
              <button className="navigation__link">Gallery</button>
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
