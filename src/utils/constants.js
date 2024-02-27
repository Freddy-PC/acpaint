import hoseLogo from "../images/hoseLogo.png";
import exterior from "../images/houseLogo.png";
import interior from "../images/interiorLogo.png";
import ceiling from "../images/ceilingLogo.png";
import stain from "../images/stainLogo.png";
import fence from "../images/fenceLogo.png";
import cabinet from "../images/cabinetLogo.png";
import deck from "../images/deck-porchLogo.png";

import deckPic from "../images/headerBackground.jpg";
import blackHouse from "../images/blackHouse.jpg";

const servicesData = [
  {
    title: "Pressure Washing",
    text: "Preparing to paint your home or office? Let us help with our expert pressure washing services tailored specifically for painting prep.",
    image: hoseLogo,
  },
  {
    title: "Exterior Painting",
    image: exterior,
    text: "We offer durable and weather-resistant coatings that can improve your property's overall look and feel, adding to its curb appeal.",
  },
  {
    title: "Interior Painting",
    image: interior,
    text: "If you want premium quality and attention to detail in your interior painting, our service provides flawless finishes and vibrant, long-lasting results that reflect your unique style and personality.",
  },
  {
    title: "Additional Painting",
    image: [fence, deck, cabinet],
    text: "We also offer additional painting services to cover all your painting needs, including fence, deck painting, and cabinet.",
  },
  {
    title: "Staining Service",
    image: stain,
    text: "If you want to improve the appearance and durability of your surfaces, consider our staining services. With our services, you can expect long-lasting protection against the elements.",
  },
  {
    title: "Popcorn Removal",
    image: ceiling,
    text: "Are you tired of that bumpy ceiling? Our popcorn removal service is quick, efficient, and tidy, with expert attention to detail. We also provide a clean-up service, leaving your property looking new.",
  },
];

const galleryData = [
  // {
  //   image: logoPic,
  //   description: "",
  //   service: "",
  // },
  {
    image: deckPic,
    description: "",
    service: "",
  },
  {
    image: blackHouse,
    description: "",
    service: "",
  },
];

export { servicesData, galleryData };
