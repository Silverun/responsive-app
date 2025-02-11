import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Platform,
  LayoutChangeEvent,
} from "react-native";
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
  const [topOffset, setTopOffset] = useState(0);

  // useEffect(() => {
  //   console.log(topContainerHeight, safeAreaTop, imageHeight, Platform.OS, top);
  // }, [safeAreaTop]);

  const onLayout = (e: LayoutChangeEvent) => {
    const promoContainerHeight = e.nativeEvent.layout.height;
    console.log("onLayout", promoContainerHeight, Platform.OS);
    setTopOffset(topContainerHeight - promoContainerHeight / 2);
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
    borderWidth: 1,
    borderColor: "green",
  },
  promo_image: {
    width: "100%",
    height: undefined,
    resizeMode: "contain",
  },
});
