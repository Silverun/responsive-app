import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { SearchField } from "../components/presentation/homeScreen/SearchField";
import { ItemList } from "../components/presentation/homeScreen/ItemList";
import LocationPicker from "../components/presentation/homeScreen/LocationPicker";
import { Promo } from "../components/presentation/homeScreen/Promo";
import { Filter } from "../components/presentation/homeScreen/Filters";
import { GradientTop } from "../components/common/GradientTop";
import { topContainerHeight } from "../constants/home";

const HomeScreen = () => {
  const [promoHeight, setPromoHeight] = useState(0);

  const getPromoHeight = (height: number) => {
    setPromoHeight(height);
  };

  return (
    <View style={style.container}>
      <GradientTop>
        <SafeAreaView
          edges={["left", "right", "top"]}
          style={[style.top_container, { paddingBottom: promoHeight / 2 }]}
        >
          <LocationPicker />
          <SearchField />
        </SafeAreaView>
      </GradientTop>
      <Promo getPromoHeight={getPromoHeight} />
      <SafeAreaView
        style={[style.bot_container, { paddingTop: promoHeight / 2 + 16 }]}
        edges={["left", "right"]}
      >
        <Filter />
        <ItemList />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  top_container: {
    paddingTop: topContainerHeight * 0.05,
    height: topContainerHeight,
    paddingHorizontal: 16,
    rowGap: topContainerHeight * 0.05,
  },
  bot_container: {
    flex: 1,
    paddingHorizontal: 16,
    rowGap: 16,
  },
});
