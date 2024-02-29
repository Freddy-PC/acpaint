import React from "react";
import "./ItemModal.css";
import closeButtonLogo from "../../images/closeButtonLogo.png";

// conditionally render the image name for the alt tag

const ItemModal = ({ cardData, closeModal, closeOverlay }) => {
  return (
    <div className="itemModal" onClick={closeOverlay}>
      <div className="itemModal__container">
        <img
          className="itemModal__closeLogo"
          src={closeButtonLogo}
          alt="close button logo"
          onClick={closeModal}
        />
        <img className="itemModal__image" src={cardData.image} alt="card" />
        <p className="itemModal__description">{cardData.description}</p>
      </div>
    </div>
  );
};

export default ItemModal;
