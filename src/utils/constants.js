import hoseLogo from "../images/hoseLogo.png";
import exteriorLogo from "../images/houseLogo.png";
import interiorLogo from "../images/interiorLogo.png";
import ceilingLogo from "../images/ceilingLogo.png";
import stainLogo from "../images/stainLogo.png";
import fenceLogo from "../images/fenceLogo.png";
import cabinetLogo from "../images/cabinetLogo.png";
import deckLogo from "../images/deck-porchLogo.png";

import deck1 from "../images/deck__1.jpg";
import deck2 from "../images/deck__2.jpg";
import deck3 from "../images/deck__3.jpg";
import deck4 from "../images/deck__4.jpg";
import exterior1 from "../images/exterior__1.jpg";
import exterior2 from "../images/exterior__2.jpg";
import exterior3 from "../images/exterior__3.jpg";
import exterior4 from "../images/exterior__4.jpg";
import exterior5 from "../images/exterior__5.jpg";
import interior1 from "../images/interior__1_after.jpg";
import interior2 from "../images/interior__2_after.jpg";
import interior3 from "../images/interior__3_after.jpg";
import interior4 from "../images/interior__4_after.jpg";
import stain1 from "../images/staining_1_after.jpg";

// import exterior6 from "../images/exterior__6.jpg"
// import exterior7 from "../images/exterior__7.jpg"
// import exterior8 from "../images/exterior__8.jpg"
// import exterior9 from "../images/exterior__9.jpg"
// import exterior10 from "../images/exterior__10.jpg"
// import exterior11 from "../images/exterior__11.jpg"
// import exterior12 from "../images/exterior__12.jpg"

const servicesData = [
  {
    title: "Pressure Washing",
    text: "Preparing to paint your home or office? Let us help with our expert pressure washing services tailored specifically for painting prep.",
    image: hoseLogo,
  },
  {
    title: "Exterior Painting",
    image: exteriorLogo,
    text: "We offer durable and weather-resistant coatings that can improve your property's overall look and feel, adding to its curb appeal.",
  },
  {
    title: "Interior Painting",
    image: interiorLogo,
    text: "If you want premium quality and attention to detail in your interior painting, our service provides flawless finishes and vibrant, long-lasting results that reflect your unique style and personality.",
  },
  {
    title: "Additional Painting",
    image: [fenceLogo, deckLogo, cabinetLogo],
    text: "We also offer additional painting services to cover all your painting needs, including fence, deck painting, and cabinet.",
  },
  {
    title: "Staining Service",
    image: stainLogo,
    text: "If you want to improve the appearance and durability of your surfaces, consider our staining services. With our services, you can expect long-lasting protection against the elements.",
  },
  {
    title: "Popcorn Removal",
    image: ceilingLogo,
    text: "Are you tired of that bumpy ceiling? Our popcorn removal service is quick, efficient, and tidy, with expert attention to detail. We also provide a clean-up service, leaving your property looking new.",
  },
];

const galleryData = [
  {
    image: deck1,
    description: "2023 > Trailer home Deck staining",
    service: "deck",
  },
  {
    image: deck2,
    description: "2018 > Deck painting",
    service: "deck",
  },
  {
    image: deck3,
    description: "2019 > Deck staining",
    service: "deck",
  },
  {
    image: deck4,
    description: "2018 > Deck staining",
    service: "deck",
  },
  {
    image: exterior1,
    description: "2019 > Deck staining",
    service: "exterior",
  },
  {
    image: exterior2,
    description: "2020",
    service: "exterior",
  },
  {
    image: exterior3,
    description: "2018 > Trailer home painting",
    service: "exterior",
  },
  {
    image: exterior4,
    description: "2017",
    service: "exterior",
  },
  {
    image: exterior5,
    description: "2018",
    service: "exterior",
  },
  {
    image: interior1,
    description: "2017",
    service: "interior",
  },
  {
    image: interior2,
    description: "2017",
    service: "interior",
  },
  {
    image: interior3,
    description: "2021",
    service: "interior",
  },
  {
    image: interior4,
    description: "2021",
    service: "interior",
  },
  {
    image: stain1,
    description: "2023",
    service: "stain > Wood staining",
  },
];

export { servicesData, galleryData };
