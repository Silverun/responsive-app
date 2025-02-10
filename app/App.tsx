import { SafeAreaProvider } from "react-native-safe-area-context";
import { Tabs } from "./navigation/tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Tabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
