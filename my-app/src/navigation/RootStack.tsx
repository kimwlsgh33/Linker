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
// Screens
import ScreenSetting from "../screens/setting/ScreenSetting";
import PostScreen from "../screens/home/PostScreen";
import StoryScreen from "../screens/home/StoryScreen";
import SignUp from "../screens/signUp/SignUp";
import LoginScreen from "../screens/signIn/LoginScreen";
import EditProfile from "../screens/profile/EditProfile";
import DiscoverScreen from "../screens/search/DiscoverScreen";
import TOSScreen from "../screens/signUp/TOSScreen";
import CreateNameScreen from "../screens/signUp/CreateNameScreen";
import NameConfirm from "../screens/signUp/NameConfirm";
import BirthdayScreen from "../screens/signUp/BirthdayScreen";
import CompleteNScreen from "../screens/signUp/CompleteNScreen";
import LoginEr from "../screens/signUp/LoginEr";
import CodeCheck from "../screens/signUp/CodeCheck";
import CodeInput from "../screens/signUp/CodeInput";
import PwRe from "../screens/signUp/PwRe";
import AddUser2 from "../screens/setting/AddUser2";
import Bells2 from "../screens/setting/Bells2";
import Lock2 from "../screens/setting/Lock2";
import Safety2 from "../screens/setting/Safety2";
import Thema2 from "../screens/setting/Thema2";
import User2 from "../screens/setting/User2";
import PersonalData from "../screens/setting/PersonalData";
import TestModal from "../screens/test/screens/TestModal";
import Test from "../screens/test/screens/TestAnim";
// navigation header 옵션 설정 파일
import { headerOptions } from "./navHeaderOptions";
import TestStack from "../screens/test/TestStack";
import SearchResultScreen from "../screens/search/SearchResultScreen";

const Stack = createStackNavigator();

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
        <Stack.Screen name="NameConfirm" component={NameConfirm} />
        <Stack.Screen name="TOS" component={TOSScreen} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="SearchResult" component={SearchResultScreen} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen
          name="TestModal"
          component={TestModal}
          options={{
            presentation: "transparentModal",
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootStack;
