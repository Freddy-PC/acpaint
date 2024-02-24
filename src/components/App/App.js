import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Gallary from "../Gallary/Gallary";
import Footer from "../Footer/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  // guide user in main page
  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const servicesSection = document.getElementById(sectionId);
      if (servicesSection) {
        console.log(servicesSection);
        servicesSection.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Element with id ${sectionId} not found.`);
      }
    }, 0);
  };

  return (
    <div className="app__page">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        closeMenu={closeMenu}
      />
      {/* Move navigation from header to navigation*/}
      {/* Move Header into Main component*/}
      <Routes>
        <Route path="/gallery" element={<Gallary />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route
          path="/"
          element={
            <Main scrollToSection={scrollToSection} closeMenu={closeMenu} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
