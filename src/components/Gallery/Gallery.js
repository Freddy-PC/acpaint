import React from "react";
import "./Gallery.css";
import { galleryData } from "../../utils/constants";

// need to make a alt tag functionality
// conditionally renders the description

// 4 images should render on desktop
// 3 on smaller screens
// 2 on small screens

// in future only images that pertain to the service will appear

function Gallery() {
  return (
    <div className="gallery" id="gallery">
      <div className="gallery__header">
        <h1 className="gallery__title">Gallery</h1>
        <p className="gallery__text">
          Welcome to our Painting Services Gallery!
        </p>
        <p className="gallery__text">
          Please browse our collection of images and let us know if you have any
          questions.
        </p>
      </div>
      <div className="gallery__images">
        <h3 className="gallery__image-title">Images</h3>
        <ul className="gallery__image-list">
          {galleryData.map((data, index) => (
            <li className="gallery__image-item" key={index}>
              <img
                className="gallery__image"
                src={data.image}
                alt="service-pic"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Gallery;
