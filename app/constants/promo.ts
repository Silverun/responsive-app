import { Image } from "react-native";
const promoBanner = require("@images/promo_banner.png");

const { width: imageWidth, height: imageHeight } =
  Image.resolveAssetSource(promoBanner);

const aspectRatio = imageWidth / imageHeight;

export { promoBanner, aspectRatio, imageHeight };
