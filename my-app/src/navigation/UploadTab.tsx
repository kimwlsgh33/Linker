import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import TakePicture from "../screens/home/TakePicture";
import UploadImageScreen from "../screens/home/UploadImageScreen";
import MyTabBar from ".tabBar/MyTabBar";

const Tab = createBottomTabNavigator();

function UploadTab() {
  return (
    <Tab.Navigator
      tabBar={(props) => {
        // console.log("BottomTabBarPropKeys : ", Object.keys(props));
        return <MyTabBar {...props} />;
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Tab.Screen name="TakePicture" component={TakePicture} />
      <Tab.Screen name="UploadImage" component={UploadImageScreen} />
    </Tab.Navigator>
  );
}

export default UploadTab;
