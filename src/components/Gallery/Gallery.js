import React from "react";
import "./Gallery.css";
import { galleryData } from "../../utils/constants";
import "../App/App.css";

// need to make a alt tag functionality
// conditionally renders the description
// in future only images that pertain to the service will appear

function Gallery({ cardClick }) {
  return (
    <div className="gallery" id="gallery">
      <div className="gallery__header">
        <h1 className="gallery__title">Gallery</h1>
        <p className="gallery__text">
          Welcome to our Painting Services Gallery!
        </p>
        <p className="gallery__text">
          Please browse our{" "}
          <span className="app__text_underline">collection of images</span> and
          let us know if you have any questions.
        </p>
        <p className="gallery__text">
          To view more information about the image, simply{" "}
          <span className="app__text_bold">click</span> on it. 👆🏼
        </p>
      </div>
      <div className="gallery__images app__page-interior">
        <h3 className="gallery__image-title">Images</h3>
        <ul className="gallery__image-list">
          {galleryData.map((data, index) => (
            <li className="gallery__image-item" key={index}>
              <img
                className="gallery__image"
                src={data.image}
                alt="service-pic"
                onClick={() => {
                  cardClick(data);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Gallery;
