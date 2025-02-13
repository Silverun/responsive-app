import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabParamList } from "./tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamList } from "./stack";

type TabNavigationProp = NavigationProp<TabParamList>;

export const useTabNavigation = () => useNavigation<TabNavigationProp>();

type HomeNavigationProp = StackNavigationProp<HomeStackParamList>;

export const useHomeNavigation = () => useNavigation<HomeNavigationProp>();
