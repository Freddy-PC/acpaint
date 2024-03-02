import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import "../Header/Header.css";
import Services from "../../components/Services/Services";
import Contacts from "../../components/Contacts/Contacts";
import "../App/App.css";

function Main({ scrollToSection, closeMenu }) {
  return (
    <main className="main">
      <div className="main__container-top">
        <Header scrollToSection={scrollToSection} closeMenu={closeMenu} />
      </div>
      <div className="main__container-bottom app__page-interior">
        <Services scrollToSection={scrollToSection} />
        <Contacts />
      </div>
    </main>
  );
}

export default Main;
