import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Favorites } from "../screens/Favorites";
import { Notifications } from "../screens/Notifications";
import { ShoppingCart } from "../screens/ShoppingCart";
import HomeNavigation, { HomeStackParamList } from "./stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import { Image } from "react-native";
import { HEIGHT } from "../constants/dimentions";

export type TabParamList = {
  HomeNavigation: NavigatorScreenParams<HomeStackParamList>;
  Favorites: undefined;
  ShoppingCart: undefined;
  Notifications: undefined;
};

const routes = {
  HomeNavigation: "HomeNavigation",
  Favorites: "Favorites",
  ShoppingCart: "ShoppingCart",
  Notifications: "Notifications",
} as const;

const Tab = createBottomTabNavigator<TabParamList>();
export interface TabsProps {
  routeName: string | undefined;
}

export function Tabs({ routeName }: TabsProps) {
  const hideTabs = routeName === "Details";
  // console.log(routeName);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: hideTabs ? "none" : "flex",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          tabBarIcon: () => (
            <Image source={require("@images/icons/home.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: () => (
            <Image source={require("@images/icons/heart.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{
          tabBarIcon: () => <Image source={require("@images/icons/bag.png")} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: () => (
            <Image source={require("@images/icons/bell.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
