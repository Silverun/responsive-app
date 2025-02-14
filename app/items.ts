import { ImageSourcePropType } from "react-native";

export interface Item {
  id: number;
  name: string;
  type: string;
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
    type: "Deep Foam",
    price: 4.53,
    description:
      "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the fo...",
    image: mocha,
  },
  {
    id: 2,
    name: "Flat White",
    type: "Espresso",
    price: 3.53,
    description: "",
    image: flatwhite,
  },
  {
    id: 3,
    name: "Caffe Mocha",
    type: "Deep Foam",
    description: "",
    price: 4.53,
    image: mocha,
  },
  {
    id: 4,
    name: "Flat White",
    type: "Espresso",
    description: "",
    price: 3.53,
    image: flatwhite,
  },
  {
    id: 5,
    name: "Caffe Mocha",
    type: "Deep Foam",
    description: "",
    price: 4.53,
    image: mocha,
  },
  {
    id: 6,
    name: "Flat White",
    type: "Espresso",
    description: "",
    price: 3.53,
    image: flatwhite,
  },
];
