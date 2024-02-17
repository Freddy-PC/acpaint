import React from "react";
import "./ItemCard.css";

function ItemCard({ title, icon, text, cardIndexNumber }) {
  // split will return a error of undefined if image property is EMPTY
  // Extracting file name from icon path
  // const fileName = icon.split("/").pop().split(".")[0];
  // // Capitalizing the first letter of the file name
  // const altText = fileName.charAt(0).toUpperCase() + fileName.slice(1);

  // Check if icon is an array
  // if array length is greater than 1 then a placeholder
  const icons = Array.isArray(icon) ? icon : [icon];

  return (
    <div className="card">
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
        {/* Map through the icons array to render each image */}
        {icons.map((image, index) => (
          <img
            key={index}
            className={`card__image card__image_cardIndex${cardIndexNumber}-imageIndex${index}`} // Dynamically assign unique class name
            src={image}
            alt={`${title} Image ${index + 1}`}
          />
        ))}
        {icons.length > 1 && <div className={`card__image_placeholder`} />}
      </div>
      <p className="card__text">{text}</p>
    </div>
  );
}

export default ItemCard;
