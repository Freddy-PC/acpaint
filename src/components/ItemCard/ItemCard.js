import React from "react";
import "./ItemCard.css";

function ItemCard({ title, icon, text }) {
  // split will return a error of undefined if image property is EMPTY
  // Extracting file name from icon path
  const fileName = icon.split("/").pop().split(".")[0];
  // Capitalizing the first letter of the file name
  const altText = fileName.charAt(0).toUpperCase() + fileName.slice(1);

  return (
    <div className="card">
      <div className="card__container">
        <h3 className="card__title">{title}</h3>
        <img className="card__image" src={icon} alt={altText} />
        <h3 className="card__text">{text}</h3>
      </div>
    </div>
  );
}

export default ItemCard;
