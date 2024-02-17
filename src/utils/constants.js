// import all images used for the array of objects below
// import image from "../images/brightnight.svg";
import hoseLogo from "../images/hoseLogo.png";
import exterior from "../images/houseLogo.png";
import interior from "../images/interiorLogo.png";
import ceiling from "../images/ceilingLogo.png";
import stain from "../images/stainLogo.png";
import fence from "../images/fenceLogo.png";
import cabinet from "../images/cabinetLogo.png";
import deck from "../images/deck-porchLogo.png";

const servicesData = [
  {
    title: "Pressure Washing",
    text: "Our company offers expert pressure washing services designed specifically for painting preparation.",
    image: hoseLogo,
  },
  {
    title: "Exterior Painting",
    image: exterior,
    text: "Our company offers durable and weather-resistant coatings that improve the overall look and feel of your property, adding to its curb appeal.",
  },
  {
    title: "Interior Painting",
    image: interior,
    text: "Our interior painting service provides premium quality and attention to detail with flawless finishes and vibrant, long-lasting results that reflect your unique style and personality.",
  },
  {
    title: "Additional Painting",
    image: [fence, cabinet, deck],
    text: "text here",
  },
  {
    title: "Staining Service",
    image: stain,
    text: "Our staining services enhance both the appearance and durability of surfaces, providing long-lasting protection against the elements.",
  },
  {
    title: "Popcorn Removal",
    image: ceiling,
    text: "Tired of that bumpy cieling? Our popcorn removal service is quick, efficient, and tidy, with expert attention to detail. We also provide clean-up service, leaving your property looking new.",
  },
];

export { servicesData };
