import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { Details } from "../screens/Details";
import { Item } from "../items";
import { NavigatorScreenParams } from "@react-navigation/native";
import { TabParamList } from "./tabs";

export type HomeStackParamList = {
  Home: undefined;
  Details: { item: Item };
};

const StackHome = createStackNavigator<HomeStackParamList>();

const HomeNavigation = () => {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <StackHome.Screen name="Details" component={Details} options={{}} />
    </StackHome.Navigator>
  );
};

export default HomeNavigation;
