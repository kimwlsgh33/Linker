// React Basic
import React from "react";
// React Navigation
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
// navigation
import HomeTab from "./HomeTab";
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
        <Stack.Screen
          name="Modal3"
          component={Modal3}
          options={{
            presentation: "transparentModal",
            // animation: "slide_from_bottom",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Modal2"
          component={Modal2}
          options={{
            presentation: "transparentModal",
            // animation: "slide_from_bottom",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Modal"
          component={Modal}
          options={{
            presentation: "transparentModal",
            // animation: "slide_from_bottom",
            headerShown: false,
          }}
        />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Story" component={StoryScreen} />
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
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ProfileUser" component={ProfileUser} />
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
            title: "친구 팔로우 및 초대",
            headerTitleAlign: "center",
            headerTintColor: "#FFFAFA",
            headerStyle: { backgroundColor: "#000000" },
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Icon name={"left"} size={20} color="#FFFAFA" />
              </Pressable>
            ),
          }}
        />

        <Stack.Screen
          name="Bells2"
          component={Bells2}
          options={{
            title: "알림",
            headerTitleAlign: "left",
            headerTintColor: "#FFFAFA",
            headerStyle: { backgroundColor: "#000000" },
            headerLeft: () => (
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.headertitle}
              >
                <Icon name={"left"} size={20} color="#FFFAFA" />
              </Pressable>
            ),
          }}
        />

        <Stack.Screen
          name="Lock2"
          component={Lock2}
          options={{
            title: "개인정보 보호",
            headerTitleAlign: "left",
            headerTintColor: "#FFFAFA",
            headerStyle: { backgroundColor: "#000000" },
            headerLeft: () => (
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.headertitle}
              >
                <Icon name={"left"} size={20} color="#FFFAFA" />
              </Pressable>
            ),
          }}
        />

        <Stack.Screen
          name="Safety2"
          component={Safety2}
          options={{
            title: "보안",
            headerTitleAlign: "left",
            headerTintColor: "#FFFAFA",
            headerStyle: { backgroundColor: "#000000" },
            headerLeft: () => (
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.headertitle}
              >
                <Icon name={"left"} size={20} color="#FFFAFA" />
              </Pressable>
            ),
          }}
        />

        <Stack.Screen
          name="User2"
          component={User2}
          options={{
            title: "계정",
            headerTitleAlign: "left",
            headerTintColor: "#FFFAFA",
            headerStyle: { backgroundColor: "#000000" },
            headerLeft: () => (
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.headertitle}
              >
                <Icon name={"left"} size={20} color="#FFFAFA" />
              </Pressable>
            ),
          }}
        />

        <Stack.Screen
          name="Thema2"
          component={Thema2}
          options={{
            title: "테마 설정",
            headerTitleAlign: "left",
            headerTintColor: "#FFFAFA",
            headerStyle: { backgroundColor: "#000000" },
            headerLeft: () => (
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.headertitle}
              >
                <Icon name={"left"} size={20} color="#FFFAFA" />
              </Pressable>
            ),
          }}
        />

        <Stack.Screen
          name="PersonalData"
          component={PersonalData}
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
