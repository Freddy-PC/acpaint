import React from "react";
import "./Services.css";
import ItemCard from "../ItemCard/ItemCard";

function Services() {
  return (
    <section className="services">
      <h3 className="services__title">Services</h3>
      <p className="services__text">Below are some services we provide:</p>
      <div className="services__container">
        <ItemCard title="Pressure Washing" text="text here" />
        <ItemCard title="Exterior Painting" text="text here" />
        <ItemCard title="Interior Painting" text="text here" />
      </div>
    </section>
  );
}

export default Services;
