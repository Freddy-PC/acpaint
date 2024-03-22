import React from "react";
import "./Contacts.css";
import emailLogo from "../../images/gmailLogo.png";
import phoneLogo from "../../images/phoneLogo.png";

const Contacts = () => {
  return (
    <div className="contacts" id="contacts">
      <div className="contacts__header">
        <h3 className="contacts__header-title">Contacts</h3>
        <p className="contacts__text">
          We offer free estimates. Feel free to email or call us regarding any
          of your painting needs.
        </p>
        <p className="contacts__text">
          To email us on your default email provider, click 👆🏼 the email below.
        </p>
        {/* <p className="contacts__text">
          If you would like to email us here, use the Email form below! 📥
        </p> */}
      </div>
      <div className="contacts__columns">
        <div className="contacts__column">
          <h3 className="contacts__column-title">
            <span className="contacts__column-title_underline">Socials</span>
          </h3>
          <ul className="contacts__list">
            <li className="contacts__list-item">
              <a
                className="contact__container contact__container_column"
                href="mailto:?to=acpaint.org@gmail.com"
              >
                <img
                  className="contacts__image"
                  src={emailLogo}
                  alt="company-email"
                />
                <p className="contacts__info">acpaint.org@gmail.com</p>
              </a>
            </li>
            <li className="contacts__list-item">
              <a
                className="contact__container contact__container_column"
                href="tel:8287139620"
              >
                <img
                  className="contacts__image"
                  src={phoneLogo}
                  alt="phone-number"
                />
                <p className="contacts__info">828 713-9620</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="contacts__column">
          <h3 className="contacts__column-title">
            <span className="contacts__column-title_underline">Hours</span>
          </h3>
          <p className="contacts__text-hours">Weekdays: 7:00AM - 5:00PM</p>
          <p className="contacts__text-hours">Weekends: 7:00AM - 5:00PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
