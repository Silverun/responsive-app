import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface SearchFieldProps {}

export const SearchField = ({}: SearchFieldProps) => {
  return <TextInput placeholder="Search coffee" style={style.search_input} />;
};

const style = StyleSheet.create({
  search_input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
});
