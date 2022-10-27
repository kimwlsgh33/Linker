import React, { useCallback, useEffect } from "react";
import { Dimensions, Platform, View } from "react-native";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
// screens
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import SearchScreen from "../screens/search/SearchScreen";
import ReelsScreen from "../screens/search/ReelsScreen";
import AlertScreen from "../screens/alert/AlertScreen";

// icons
import Ionic from "react-native-vector-icons/Ionicons";
import TestPosts from "../screens/test/screens/TestPosts";

// types
type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const icons: Record<string, string[]> = {
  Home: ["home-sharp", "home-outline"],
  Search: ["search", "ios-search-outline"],
  Reels: ["caret-forward-circle", "caret-forward-circle-outline"],
  Alert: ["heart", "heart-outline"],
  Profile: ["ios-person-circle", "ios-person-circle-outline"],
};

const screenOptions = ({ route }): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
    const { name } = route;
    const [icon, iconOutline] = icons[name];
    const iconName = focused ? icon : iconOutline;
    return <Ionic name={iconName} size={size} color={color} />;
  },
  tabBarStyle: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 0 : 24,
  },
});

const Tab = createBottomTabNavigator();
const { height, width } = Dimensions.get("window");

const HomeTab = () => {
  const Navs = useCallback(
    () => (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={TestPosts} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="Alert" component={AlertScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    ),
    []
  );

  // Android에서 Tab 네비게이션이 키보드에 가려지도록 설정
  return Platform.OS === "android" ? (
    <View style={{ height, width }}>
      <Navs />
    </View>
  ) : (
    <Navs />
  );
};

export default HomeTab;
