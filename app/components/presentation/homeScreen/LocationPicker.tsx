import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const LocationPicker = () => {
  return (
    <View style={styles.container}>
      {/* Label */}
      <Text style={styles.label}>Location</Text>

      {/* Picker row (no functionality yet) */}
      <TouchableOpacity
        style={styles.pickerContainer}
        activeOpacity={0.8}
        onPress={() => {}}
      >
        <Text style={styles.locationText}>Bilzen, Tanjungbalai</Text>
        {/* Downward caret (Unicode) */}
        <Text style={styles.caret}>▼</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent", // Transparent background
    // alignItems: "flex-start",
  },
  label: {
    fontSize: 12,
    color: "#BEBEBE",
    marginBottom: 4,
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 16,
    color: "#FFFFFF",
    marginRight: 4,
  },
  caret: {
    fontSize: 12,
    color: "#FFFFFF",
  },
});

export default LocationPicker;
