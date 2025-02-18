import React from "react";
import { View, Text } from "react-native";
import { Permissions } from "../components/other/Permissions";
import { SafeAreaView } from "react-native-safe-area-context";

interface ShoppingCartProps {}

export const ShoppingCart = ({}: ShoppingCartProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Permissions />
    </SafeAreaView>
  );
};
