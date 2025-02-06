import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchField } from "../components/presentation/homeScreen/SearchField";
import { WIDTH } from "../constants/dimentions";
import { ItemList } from "../components/presentation/homeScreen/ItemList";
import LocationPicker from "../components/presentation/homeScreen/LocationPicker";
import { Promo } from "../components/presentation/homeScreen/Promo";
import { Filter } from "../components/presentation/homeScreen/Filters";

const HomeScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <LocationPicker />
      <SearchField />
      <Promo />
      <Filter />
      <ItemList />
    </SafeAreaView>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    rowGap: 16,
  },
});
