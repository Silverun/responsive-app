import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Favorites } from "../screens/Favorites";
import { Notifications } from "../screens/Notifications";
import { ShoppingCart } from "../screens/ShoppingCart";
import HomeNavigation, { HomeStackParamList } from "./stack";
import { NavigatorScreenParams } from "@react-navigation/native";

export type TabParamList = {
  HomeNavigation: NavigatorScreenParams<HomeStackParamList>;
  Favorites: undefined;
  ShoppingCart: undefined;
  Notifications: undefined;
};

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
        tabBarStyle: { display: hideTabs ? "none" : "flex" },
      }}
    >
      <Tab.Screen name="HomeNavigation" component={HomeNavigation} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}
