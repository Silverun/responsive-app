import React from "react";
import { View, Text } from "react-native";
import { GradientTop } from "../components/common/GradientTop";

interface FavoritesProps {}

export const Favorites = ({}: FavoritesProps) => {
  return (
    <GradientTop>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "white" }}>Hello</Text>
      </View>
    </GradientTop>
  );
};
