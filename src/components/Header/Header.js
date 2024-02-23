import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logoImage from "../../images/paintLogo.svg";

const Header = ({ handleGalleryLinkClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // if mobile menu is open set to true
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  // guide user in main page
  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const servicesSection = document.getElementById(sectionId);
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Element with id ${sectionId} not found.`);
      }
    }, 0);
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
            <NavLink
              to="/services"
              className="headernav__link"
              onClick={() => {
                scrollToSection("services");
                closeMenu();
              }}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className="headernav__link"
              onClick={() => {
                scrollToSection("contacts");
                closeMenu();
              }}
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className="headernav__link"
              onClick={handleGalleryLinkClick}
            >
              Gallery
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/about" className="headernav__link">
              About Us
            </NavLink>
          </li> */}
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
        <NavLink
          to="/contacts"
          className="header__link"
          onClick={() => {
            scrollToSection("contacts");
            closeMenu();
          }}
        >
          How to Contact Us 🤔❓
        </NavLink>
        <p className="header__location">Asheville, North Carolina</p>
      </div>
    </header>
  );
};

export default Header;
