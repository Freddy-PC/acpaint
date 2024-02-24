import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ scrollToSection, closeMenu }) => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">Welcome to A&C Painting</h1>
        <p className="header__text">
          With over 10 years of experience in the painting industry, we deliver
          high-quality services at an affordable price. Feel free to ask us any
          questions about your next project.
        </p>
      </div>
      <div className="header__footer">
        <NavLink to="/">
          <button
            className="header__link"
            onClick={() => {
              scrollToSection("contacts");
              closeMenu();
            }}
          >
            How to Contact Us 🤔❓
          </button>
        </NavLink>
        <p className="header__location">Asheville, North Carolina</p>
      </div>
    </header>
  );
};

export default Header;
