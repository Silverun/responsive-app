import { SafeAreaProvider } from "react-native-safe-area-context";
import { Tabs } from "./navigation/tabs";
import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const ref = createNavigationContainerRef();

export default function App() {
  const [routeName, setRouteName] = useState<string>();
  const isHome = routeName === "Home";

  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={ref}
        onReady={() => setRouteName(ref.current?.getCurrentRoute()?.name)}
        onStateChange={() => setRouteName(ref.current?.getCurrentRoute()?.name)}
      >
        <StatusBar style={isHome ? "light" : "dark"} />
        <Tabs routeName={routeName} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
