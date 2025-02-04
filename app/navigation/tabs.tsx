import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { Favorites } from "../screens/Favorites";
import { Notifications } from "../screens/Notifications";
import { ShoppingCart } from "../screens/ShoppingCart";

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}
