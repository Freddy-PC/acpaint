import React from "react";
import "./Footer.css";
import LinkedIn from "../../images/linkedinLogo.svg";

const Footer = () => {
  const today = new Date();
  const handleClick = () => {
    // Navigate to the LinkedIn profile when the image is clicked
    window.open("https://www.linkedin.com/in/freddy-perez-camacho", "_blank");
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          @ {today.getFullYear()} Developed by Freddy Perez-Camacho
        </p>
        <img
          src={LinkedIn}
          className="footer__image"
          alt="linkedIn link"
          onClick={handleClick}
        />
      </div>
    </footer>
  );
};

export default Footer;
