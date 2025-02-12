import React, { useState } from "react";
import { View, Image, StyleSheet, LayoutChangeEvent } from "react-native";
import { promoBanner, aspectRatio } from "../../../constants/promo";
import { topContainerHeight } from "../../../constants/home";

interface PromoProps {
  getPromoHeight: (height: number) => void;
}

export const Promo = (props: PromoProps) => {
  const [topOffset, setTopOffset] = useState(0);

  const onLayout = (e: LayoutChangeEvent) => {
    const promoContainerHeight = e.nativeEvent.layout.height;
    // console.log("onLayout", promoContainerHeight, Platform.OS);
    setTopOffset(topContainerHeight - promoContainerHeight / 2);
    props.getPromoHeight(promoContainerHeight);
  };

  return (
    <View onLayout={onLayout} style={[style.container, { top: topOffset }]}>
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
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    paddingHorizontal: 16,

    // borderWidth: 1,
    // borderColor: "green",
  },
  promo_image: {
    width: "100%",
    height: undefined,
    resizeMode: "contain",
  },
});
