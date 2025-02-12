import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { COLORS } from "../../../constants/colors";

interface FilterItem {
  label: string;
  selected: boolean;
}

const filterData: FilterItem[] = [
  { label: "All Coffee", selected: true },
  { label: "Macchiato", selected: false },
  { label: "Latte", selected: false },
  { label: "Americano", selected: false },
  { label: "Lungo", selected: false },
];

export const Filter = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.filterContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {filterData.map((item, index) => (
        <View
          key={index}
          style={[
            styles.filterButton,
            item.selected && styles.filterButtonSelected,
          ]}
        >
          <Text
            style={[
              styles.filterText,
              item.selected && styles.filterTextSelected,
            ]}
          >
            {item.label}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    columnGap: 12,
  },
  filterButton: {
    borderWidth: 1,
    backgroundColor: COLORS.pillInactive,
    borderRadius: 8,
    padding: 8,
  },
  filterButtonSelected: {
    backgroundColor: COLORS.button,
  },
  filterText: {
    color: "#000",
    borderWidth: 1,
  },
  filterTextSelected: {
    color: "#FFF",
  },
});
