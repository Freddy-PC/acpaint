import React from "react";
import "./Contacts.css";
import emailLogo from "../../images/gmailLogo.png";
import phoneLogo from "../../images/phoneLogo.png";

const Contacts = () => {
  return (
    <div className="contacts" id="contacts">
      <div className="contacts__header">
        <h1 className="contacts__title">Contacts</h1>
        <p className="contacts__text">
          We offer free estimates. Feel free to email or call us regarding any
          of your painting needs.
        </p>
      </div>
      <div className="contacts__columns">
        <div className="contacts__column">
          <h3 className="contacts__title">
            <span className="contacts__title_underline">Socials</span>
          </h3>
          <ul className="contacts__list">
            <li className="contacts__list-item">
              <img
                className="contacts__image"
                src={emailLogo}
                alt="company-email"
              />
              <p className="contacts__info">acpainting@gmail.com</p>
            </li>
            <li className="contacts__list-item">
              <img
                className="contacts__image"
                src={phoneLogo}
                alt="phone-number"
              />
              <p className="contacts__info">828 713-9620</p>
            </li>
          </ul>
        </div>
        <div className="contacts__column">
          <h3 className="contacts__title">
            <span className="contacts__title_underline">Hours</span>
          </h3>
          <p className="contacts__text-hours">Weekdays: 7:00AM - 5:00PM</p>
          <p className="contacts__text-hours">Weekends: 7:00AM - 5:00PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
