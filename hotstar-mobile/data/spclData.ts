const disneyImg = require("@/assets/brand_images/viewers-disney.png");

const pixarImg = require("@/assets/brand_images/viewers-pixar.png");

const marvelImg = require("@/assets/brand_images/viewers-marvel.png");

const starWarsImg = require("@/assets/brand_images/viewers-starwars.png");

const nationalGeoImg = require("@/assets/brand_images/viewers-national.png");

const hotstarImg = require("@/assets/brand_images/viewers-hotstar.png");

export interface SpecialData {
  brand: string;
  img: any;
}

export const specialCardsData: SpecialData[] = [
  {
    brand: "Disney",
    img: disneyImg,
  },
  {
    brand: "Pixar",
    img: pixarImg,
  },
  {
    brand: "Marvel",
    img: marvelImg,
  },
  {
    brand: "Star Wars",
    img: starWarsImg,
  },
  {
    brand: "National Geographic",
    img: nationalGeoImg,
  },
  {
    brand: "Hotstar",
    img: hotstarImg,
  },
];
