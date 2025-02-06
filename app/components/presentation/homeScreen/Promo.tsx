import React from "react";
import { View, Image, StyleSheet } from "react-native";

interface PromoProps {}

export const Promo = ({}: PromoProps) => {
  const promoBanner = require("@images/promo_banner.png");

  const { width: imageWidth, height: imageHeight } =
    Image.resolveAssetSource(promoBanner);
  const aspectRatio = imageWidth / imageHeight;

  return (
    <View style={style.container}>
      <Image
        style={[style.promo_image, { aspectRatio }]}
        source={promoBanner}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  promo_image: {
    width: "100%",
    height: undefined,
    resizeMode: "contain",
  },
});
