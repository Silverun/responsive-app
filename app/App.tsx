import { SafeAreaProvider } from "react-native-safe-area-context";
import { Tabs } from "./navigation/tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
