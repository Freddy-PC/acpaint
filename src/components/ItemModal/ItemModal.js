import React, { useState } from "react";
import "./ItemModal.css";
import closeButtonLogo from "../../images/closeButtonLogo.png";

// conditionally render the image name for the alt tag

/* if button is clicked, change the image */
/* if button is clciked, swap between the before and after image*/
// Handle state of button by setting the useState

const ItemModal = ({ cardData, closeModal, closeOverlay }) => {
  const [isClicked, setIsClicked] = useState(false);
  const updateImageState = () => {
    setIsClicked((previousState) => !previousState);
  };

  return (
    <div className="itemModal" onClick={closeOverlay}>
      <div className="itemModal__container">
        <img
          className="itemModal__closeLogo"
          src={closeButtonLogo}
          alt="close button logo"
          onClick={closeModal}
        />
        <img
          className="itemModal__image"
          src={isClicked ? cardData.imageA : cardData.imageB}
          alt="card"
          onClick={updateImageState}
        />
        <p className="itemModal__description">{cardData.description}</p>
        {/* Make the button change color CONSTANTLY AND change when hovered 
        AND change the image */}
        <div className="itemModal__button-container">
          <button onClick={updateImageState} className="itemModal__button">
            BEFORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
