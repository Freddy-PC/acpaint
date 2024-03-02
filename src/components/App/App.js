import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null); // equal to image data from array of objects
  const [activeModal, setActiveModal] = useState(""); // handles the modals

  // hamburger funct.
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // guide user in main page
  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const scrollOptions =
          sectionId === "gallery"
            ? { behavior: "instant" }
            : { behavior: "smooth" };
        section.scrollIntoView(scrollOptions);
      } else {
        console.error(`Element with id ${sectionId} not found.`);
      }
    }, 0);
  };

  // When image is clicked...
  const handleClick = (card) => {
    setSelectedCard(card);
    setActiveModal(MODAL_TYPE.PREVIEW);
  };

  const MODAL_TYPE = {
    PREVIEW: "preview", // image click
  };
  const closeAllModals = () => {
    setActiveModal("");
  };

  useEffect(() => {
    const closebyEsc = (evt) => {
      if (evt.key === "Escape") {
        closeAllModals();
      }
    };
    window.addEventListener("keydown", closebyEsc);
    return () => window.removeEventListener("keydown", closebyEsc);
  }, []);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      closeAllModals();
    }
  };

  return (
    <div className="app__page-container">
      <div className="app__page-top">
        <Navigation
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
          closeMenu={closeMenu}
        />
      </div>
      <Routes>
        <Route path="/gallery" element={<Gallery cardClick={handleClick} />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route
          path="/"
          element={
            <Main scrollToSection={scrollToSection} closeMenu={closeMenu} />
          }
        />
      </Routes>
      <div className="app__page-bottom">
        <Footer />
      </div>
      {activeModal === MODAL_TYPE.PREVIEW && selectedCard && (
        <ItemModal
          cardData={selectedCard}
          closeModal={closeAllModals}
          closeOverlay={handleOverlay}
        />
      )}
    </div>
  );
}

export default App;
