import React from "react";
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
import { imageHeight } from "../constants/promo";

const HomeScreen = () => {
  const { top: safeAreaTop } = useSafeAreaInsets();
  const paddingTop = (imageHeight + safeAreaTop) / 2;

  return (
    <View style={style.container}>
      <GradientTop>
        <SafeAreaView
          edges={["left", "right", "top"]}
          style={style.top_container}
        >
          <LocationPicker />
          <SearchField />
        </SafeAreaView>
      </GradientTop>
      <Promo />
      <SafeAreaView
        style={[style.bot_container, { paddingTop }]}
        edges={["left", "right", "bottom"]}
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
    paddingTop: 16,
    height: topContainerHeight,
    paddingHorizontal: 16,
    rowGap: 16,
  },
  bot_container: {
    flex: 1,
    paddingHorizontal: 16,
    rowGap: 16,
  },
});
