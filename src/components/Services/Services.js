import React from "react";
import "./Services.css";
import ItemCard from "../ItemCard/ItemCard";
import { servicesData } from "../../utils/constants";

function Services() {
  return (
    <section className="services">
      <div className="services__header">
        <h3 className="services__title">Services</h3>
        <p className="services__text">Below are some services we provide:</p>
      </div>
      <ul className="services__list">
        {servicesData.map((service, index) => (
          <li key={index} className="services__item">
            <ItemCard
              title={service.title}
              icon={service.image}
              text={service.text}
              cardIndexNumber={index}
            />
          </li>
        ))}
      </ul>
      <div className="services__footer">
        <p className="services__footer-text">
          Explore our company's services through our Gallery page.
        </p>
        <p className="services__footer-text">
          Click the link to browse our collection of images and descriptions.
        </p>
        <button className="services__footer-link">🖼️ Gallery</button>
      </div>
    </section>
  );
}

export default Services;
