import React from "react";
import { View, Image, StyleSheet } from "react-native";
import {
  promoBanner,
  aspectRatio,
  imageHeight,
} from "../../../constants/promo";
import { topContainerHeight } from "../../../constants/home";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface PromoProps {}

export const Promo = ({}: PromoProps) => {
  const { top: safeAreaTop } = useSafeAreaInsets();
  console.log(topContainerHeight, imageHeight, safeAreaTop);
  const top = topContainerHeight + safeAreaTop - imageHeight;
  // const top = 184;
  return (
    <View style={style.container}>
      <Image
        style={[style.promo_image, { aspectRatio, top }]}
        source={promoBanner}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    paddingHorizontal: 16,
  },
  promo_image: {
    width: "100%",
    height: undefined,
    resizeMode: "contain",
  },
});
