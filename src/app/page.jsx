"use client";
import { use, useState } from "react";
const menus = [
  {
    id: 1,
    type: "breakfast",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-1.jpeg",
    title: "Buttermilk Pancakes",
    price: "$15.99",
    text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    type: "lunch",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-2.jpeg",
    title: "Diner Double",
    price: "$13.99",
    text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 3,
    type: "shakes",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-3.jpeg",
    title: "Godzilla Milkshake",
    price: "$6.99",
    text: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    id: 4,
    type: "breakfast",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-4.jpeg",
    title: "Country Delight",
    price: "$20.99",
    text: "I'Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm",
  },
  {
    id: 5,
    type: "lunch",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-5.jpeg",
    title: "Egg Attack",
    price: "$22.99",
    text: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 6,
    type: "shakes",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-6.jpeg",
    title: "Oreo Dream",
    price: "$18.99",
    text: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
  },
  {
    id: 7,
    type: "breakfast",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-7.jpeg",
    title: "Bacon Overflow",
    price: "$8.99",
    text: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },
  {
    id: 8,
    type: "lunch",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-8.jpeg",
    title: "American Classic",
    price: "$12.99",
    text: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    id: 9,
    type: "shakes",
    image: "https://react-vite-projects-5-menu.netlify.app/images/item-9.jpeg",
    title: "Quarantine Buddy",
    price: "$16.99",
    text: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
];
export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
Home;
