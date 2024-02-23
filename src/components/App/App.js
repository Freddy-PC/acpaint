import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Services from "../Services/Services";
import Gallary from "../Gallary/Gallary";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";

function App() {
  const location = useLocation();
  const [renderHeader, setRenderHeader] = useState(true);
  const [renderServices, setRenderServices] = useState(true);
  const [renderContacts, setRenderContacts] = useState(false);

  // Function to handle Gallery click
  const handleGalleryLinkClick = () => {
    if (location.pathname === "/gallery") {
      setRenderHeader(false);
      setRenderServices(false);
      setRenderContacts(true);
    }
  };

  return (
    <div className="app__page">
      {renderHeader && (
        <Header handleGalleryLinkClick={handleGalleryLinkClick} />
      )}
      {renderServices && <Services />}
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/gallery" element={<Gallary />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/" element={<Main />} />
      </Routes>
      {renderContacts && <Contacts />}
      <Footer />
    </div>
  );
}

export default App;
