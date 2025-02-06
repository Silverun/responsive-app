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
];

export const Filter = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
  filterButton: {
    borderWidth: 1,
    backgroundColor: COLORS.pillInactive,
    borderRadius: 8,
    marginRight: 18, // Spacing between each filter
    textAlign: "center",
  },
  filterButtonSelected: {
    backgroundColor: COLORS.button, // Brown color for the selected filter
  },
  filterText: {
    color: "#000",
    padding: 8,
  },
  filterTextSelected: {
    color: "#FFF", // White text for the selected filter
  },
});
