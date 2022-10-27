// React Basic
import React from "react";
// React Navigation
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
// navigation
import OuterHomeTab from "./OuterHomeTab";
import ProfileTopTab from "./ProfileTopTab";
import FollowTab from "../components/FollowTab";
import DiscoverScreen from "../screens/DiscoverScreen";
import HeaderBar from "../components/HeaderBar";
import TOSScreen from "../screens/TOSScreen";
import CreateNameScreen from "../screens/CreateNameScreen";
import NameConfirm from "../screens/NameConfirm";
import BirthdayScreen from "../screens/BirthdayScreen";
import CompleteNScreen from "../screens/CompleteNScreen";
import LoginEr from "../screens/LoginEr";
import CodeCheck from "../screens/CodeCheck";
import CodeInput from "../screens/CodeInput";
import PwRe from "../screens/PwRe";
import Icon from "react-native-vector-icons/AntDesign";
import AddUser2 from "../screens/AddUser2";
import Bells2 from "../screens/Bells2";
import Lock2 from "../screens/Lock2";
import Safety2 from "../screens/Safety2";
import Thema2 from "../screens/Thema2";
import User2 from "../screens/User2";
import PersonalData from "../screens/PersonalData";
import HeaderOption from "../components/HeaderOption";
import AnotherAc from "../screens/AnotherAc";
import NavModal from "../screens/NavModal";
import { headerOptions } from "./navHeaderOptions";

const screenOptions = ({ navigation, route }) => {
  let title;

  if (route.name === "Welcome") {
    title = "Welcome";
  } else if (route.name === "Detail") {
    title = "Detail";
  } else if (route.name === "Post") {
    title = "New Post";
  } else if (route.name === "Story") {
    title = "Story";
  } else if (route.name === "SignUp") {
    title = "SignUp";
  } else if (route.name === "Discover") {
    title = "탐색 탭";
  } else if (route.name === "FollowTab") {
    title = "userId33";
  } else if (route.name === "Setting") {
    title = "설정";
  } else if (route.name === "AddUser2") {
    title = "친구 팔로우 및 초대";
  } else if (route.name === "Bells2") {
    title = "알림";
  } else if (route.name === "Lock2") {
    title = "개인정보 보호";
  } else if (route.name === "team2") {
    title = "관리 감독";
  } else if (route.name === "Safety2") {
    title = "보안";
  } else if (route.name === "User2") {
    title = "계정";
  } else if (route.name === "thema2") {
    title = "테마";
  } else if (route.name === "PersonalData") {
    title = "개인정보";
  }

  return {
    header: () => (
      <HeaderBar title={title} leftIconPressed={navigation.goBack} />
    ),
  };
};

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{ ...headerOptions }}
      initialRouteName="OuterHomeTab"
    >
      <Stack.Group>
        <Stack.Screen
          name="OuterHomeTab"
          component={OuterHomeTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ProfileTopTab" component={ProfileTopTab} />
        <Stack.Screen name="FollowTab" component={FollowTab} />
        <Stack.Screen name="Setting" component={ScreenSetting} />
        <Stack.Screen name="AddUser2" component={AddUser2} />
        <Stack.Screen name="Bells2" component={Bells2} />
        <Stack.Screen name="Lock2" component={Lock2} />
        <Stack.Screen name="Safety2" component={Safety2} />
        <Stack.Screen name="User2" component={User2} />
        <Stack.Screen name="Thema2" component={Thema2} />
        <Stack.Screen name="PersonalData" component={PersonalData} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />
        <Stack.Screen name="ProfileTopTab" component={ProfileTopTab} />
        <Stack.Screen name="FollowTab" component={FollowTab} />
        <Stack.Screen name="Setting" component={ScreenSetting} />
        <Stack.Screen name="AddUser2" component={AddUser2} />
        <Stack.Screen name="Bells2" component={Bells2} />
        <Stack.Screen name="Lock2" component={Lock2} />
        <Stack.Screen name="Safety2" component={Safety2} />
        <Stack.Screen name="User2" component={User2} />
        <Stack.Screen name="Thema2" component={Thema2} />
        <Stack.Screen name="PersonalData" component={PersonalData} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />
        <Stack.Screen name="Setting" component={ScreenSetting} />
        <Stack.Screen name="AddUser2" component={AddUser2} />
        <Stack.Screen name="Bells2" component={Bells2} />
        <Stack.Screen name="Lock2" component={Lock2} />
        <Stack.Screen name="Safety2" component={Safety2} />
        <Stack.Screen name="User2" component={User2} />
        <Stack.Screen name="Thema2" component={Thema2} />
        <Stack.Screen name="PersonalData" component={PersonalData} />
      </Stack.Group>

      <Stack.Group screenOptions={{ headerShown: false }}>
        {/*  */}
        <Stack.Screen name="TestStack" component={TestStack} />
        {/*  */}
        <Stack.Screen name="Story" component={StoryScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LoginEr" component={LoginEr} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CodeCheck" component={CodeCheck} />
        <Stack.Screen name="CodeInput" component={CodeInput} />
        <Stack.Screen name="Birthday" component={BirthdayScreen} />
        <Stack.Screen name="PwRe" component={PwRe} />
        <Stack.Screen name="CreateName" component={CreateNameScreen} />
        <Stack.Screen name="CompleteN" component={CompleteNScreen} />
        <Stack.Screen name="AnotherAc" component={AnotherAc} />
        <Stack.Screen name="NavModal" component={NavModal} options={{presentation: "transparentModal"}} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootStack;
