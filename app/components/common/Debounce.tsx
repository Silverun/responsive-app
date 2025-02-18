import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

function throttle<T extends (...args: any[]) => void>(func: T, limit: number) {
  let lastCall = 0;
  return function (...args: Parameters<T>) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
}

export const DebounceTest = () => {
  const handleInput = debounce((e: string) => console.log(e), 2000);
  const handleButtonPress = throttle(() => console.log("Throttled"), 2000);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Text>Debounce</Text>
      <TextInput
        style={{
          backgroundColor: "white",
          padding: 12,
          borderRadius: 8,
          width: "50%",
        }}
        placeholder="Search"
        onChangeText={(e) => handleInput(e)}
      />
      <Button title="Throttle test" onPress={handleButtonPress} />
    </SafeAreaView>
  );
};
