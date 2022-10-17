import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DetailScreen from "../screens/DetailScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ScreenSetting from "../screens/ScreenSetting";
import HomeTab from "./HomeTab";
import PostScreen from "../screens/PostScreen";
import StoryScreen from "../screens/StoryScreen";
import SignUp from "../screens/SignUp";
import LoginScreen from "../screens/LoginScreen";
import EditProfile from "../screens/EditProfile";
import ProfileTopTab from "../components/ProfileTopTab";
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
import CommentScreen from "../screens/CommentScreen";
const Stack = createNativeStackNavigator();

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
  }

  return {
    header: () => (
      <HeaderBar title={title} leftIconPressed={navigation.goBack} />
    ),
  };
};

function RootStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Group>
        <Stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Story" component={StoryScreen} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />
        <Stack.Screen name="ProfileTopTab" component={ProfileTopTab} />
        <Stack.Screen name="FollowTab" component={FollowTab} />
      </Stack.Group>

      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="LoginEr" component={LoginEr} />
        <Stack.Screen name="CodeCheck" component={CodeCheck} />
        <Stack.Screen name="CodeInput" component={CodeInput} />
        <Stack.Screen name="PwRe" component={PwRe} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="TOS" component={TOSScreen} />
        <Stack.Screen name="CreateName" component={CreateNameScreen} />
        <Stack.Screen name="NameConfirm" component={NameConfirm} />
        <Stack.Screen name="Birthday" component={BirthdayScreen} />
        <Stack.Screen name="CompleteN" component={CompleteNScreen} />
        <Stack.Screen name="Comment" component={CommentScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name="Setting"
          component={ScreenSetting}
          options={{
            title: "설정",
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
          name="AddUser2"
          component={AddUser2}
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
            title: "개인정보",
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
      </Stack.Group>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headertitle: {
    marginRight: 20,
  },
});

export default RootStack;
