import React from "react";
import HomeTab from "./HomeTab";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigationState } from "@react-navigation/native";
import UploadPost from "../screens/UploadPost";
import UploadStory from "../screens/UploadStory";
import TestAnim from "../screens/test/screens/TestAnim";

const Tab = createMaterialTopTabNavigator();

// HomeTab에서 제스처로 화면 전환
function OuterHomeTab() {
  // 현재 화면 인덱스를 가져옴 - OuterHomeTab(route[0]) 네비게이션 속의, HomeTab(routes[1])
  const currentIndex = useNavigationState(
    (state) => state.routes[0]?.state?.routes[1]?.state?.index
  );

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarStyle: { height: 0 },
        // 현재 인덱스가 0이면, 제스처가능
        swipeEnabled: currentIndex ? false : true,
      }}
    >
      <Tab.Screen name="UploadPost" component={UploadPost} />
      <Tab.Screen name="HomeTab" component={HomeTab} />
      <Tab.Screen name="UploadStory" component={UploadStory} />
    </Tab.Navigator>
  );
}

export default OuterHomeTab;
