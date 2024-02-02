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
        {/* <ul className="navigation__container"></ul> */}
        <p>header</p>
      </div>
    </header>
  );
};

export default Header;
