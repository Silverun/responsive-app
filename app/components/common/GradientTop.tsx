import React, { PropsWithChildren } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { HEIGHT } from "../../constants/dimentions";
import { COLORS } from "../../constants/colors";

export const GradientTop = ({ children }: ViewProps) => {
  return (
    <LinearGradient
      colors={["#111111", "#313131"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});
