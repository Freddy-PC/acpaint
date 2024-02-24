import React from "react";
import "./Main.css";
import Services from "../../components/Services/Services";
import Contacts from "../../components/Contacts/Contacts";

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <Services />
        <Contacts />
      </div>
    </main>
  );
}

export default Main;
