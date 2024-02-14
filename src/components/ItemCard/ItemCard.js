import React from "react";
import "./ItemCard.css";

function ItemCard({ title, icon, text }) {
  return (
    <div className="card">
      <div className="card__container">
        <h3 className="card__title">{title}</h3>
        <img className="card__image" src={icon} alt="" />
        <h3 className="card__text">{text}</h3>
      </div>
    </div>
  );
}

export default ItemCard;
