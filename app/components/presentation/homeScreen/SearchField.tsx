import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { COLORS } from "../../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

interface SearchFieldProps {}

export const SearchField = ({}: SearchFieldProps) => {
  return (
    <LinearGradient
      colors={["#313131", "#111111"]} // Gradient colors
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      style={style.gradient}
    >
      <TextInput
        placeholderTextColor={COLORS.text_sec}
        placeholder="Search coffee"
        style={style.search_input}
      />
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  gradient: {
    borderRadius: 8,
  },
  search_input: {
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 8,
    color: "white",
    // borderWidth: 1,
    // borderColor: "white",
  },
});
