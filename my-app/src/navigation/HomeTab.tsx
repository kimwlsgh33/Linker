import React, { useCallback } from "react";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/search/SearchScreen";
import ReelsScreen from "../screens/ReelsScreen";
import Ionic from "react-native-vector-icons/Ionicons";
import { Dimensions, Platform, View } from "react-native";

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }): BottomTabNavigationOptions => ({
  tabBarShowLabel: false,
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === "Instagram") {
      iconName = focused ? "home-sharp" : "home-outline";
    } else if (route.name === "Search") {
      iconName = focused ? "search" : "ios-search-outline";
    } else if (route.name === "Reels") {
      iconName = focused
        ? "caret-forward-circle"
        : "caret-forward-circle-outline";
    } else if (route.name === "Profile") {
      iconName = focused ? "ios-person-circle" : "ios-person-circle-outline";
    } else if (route.name === "Detail") {
      iconName = focused ? "ios-heart" : "ios-heart-outline";
    }
    return <Ionic name={iconName} size={size} color={color} />;
  },
  tabBarStyle: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 0 : 24,
  },
});

const { height, width } = Dimensions.get("window");

const HomeTab = () => {
  const Navs = useCallback(
    () => (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Instagram" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
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
