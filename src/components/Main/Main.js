import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Services from "../../components/Services/Services";
import Contacts from "../../components/Contacts/Contacts";

function Main({ scrollToSection, closeMenu }) {
  return (
    <main className="main">
      <div className="main__container">
        <Header scrollToSection={scrollToSection} closeMenu={closeMenu} />
        <Services />
        <Contacts />
      </div>
    </main>
  );
}

export default Main;
