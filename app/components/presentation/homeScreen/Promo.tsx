import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface PromoProps {}

export const Promo = ({}: PromoProps) => {
  return (
    <View style={style.container}>
      <Image
        style={style.promo_image}
        source={require("@images/promo_banner.png")}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  promo_image: {
    width: "100%",
    height: 150,
  },
});
