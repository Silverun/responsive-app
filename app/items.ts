import { ImageSourcePropType } from "react-native";

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
}

const mocha: ImageSourcePropType = require("../assets/images/small/1.png");
const flatwhite: ImageSourcePropType = require("../assets/images/small/2.png");

export const coffeeItems: Item[] = [
  {
    id: 1,
    name: "Caffe Mocha",
    description: "Deep Foam",
    price: 4.53,
    image: mocha,
  },
  {
    id: 2,
    name: "Flat White",
    description: "Espresso",
    price: 3.53,
    image: flatwhite,
  },
  {
    id: 3,
    name: "Caffe Mocha",
    description: "Deep Foam",
    price: 4.53,
    image: mocha,
  },
  {
    id: 4,
    name: "Flat White",
    description: "Espresso",
    price: 3.53,
    image: flatwhite,
  },
  {
    id: 5,
    name: "Caffe Mocha",
    description: "Deep Foam",
    price: 4.53,
    image: mocha,
  },
  {
    id: 6,
    name: "Flat White",
    description: "Espresso",
    price: 3.53,
    image: flatwhite,
  },
];
