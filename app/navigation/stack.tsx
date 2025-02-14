import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { Details } from "../screens/Details";
import { Item } from "../items";
import { NavigatorScreenParams } from "@react-navigation/native";
import { TabParamList } from "./tabs";
import { HEIGHT } from "../constants/dimentions";
import { COLORS } from "../constants/colors";
import { Image, Pressable } from "react-native";

export type HomeStackParamList = {
  Home: undefined;
  Details: { item: Item };
};

const StackHome = createStackNavigator<HomeStackParamList>();

const HomeNavigation = () => {
  return (
    <StackHome.Navigator
      screenOptions={{
        headerLeft: ({ onPress }) => (
          <Pressable style={{ marginLeft: 36 }} onPress={onPress}>
            <Image source={require("@images/icons/arrow.png")} />
          </Pressable>
        ),
        headerRight: () => (
          <Pressable style={{ marginRight: 36 }}>
            <Image source={require("@images/icons/heart.png")} />
          </Pressable>
        ),
        headerStyle: {
          backgroundColor: COLORS.bg_primary,
          height: HEIGHT * 0.15,
          shadowColor: "transparent", // iOS
          elevation: 0, // Android
        },
      }}
    >
      <StackHome.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <StackHome.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: "Detail", headerTitleAlign: "center" }}
      />
    </StackHome.Navigator>
  );
};

export default HomeNavigation;
