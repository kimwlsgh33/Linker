import React, { useEffect, useState } from "react";
import "react-native-get-random-values";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useMeStore } from "./src/store";
import { Auth, DataStore } from "aws-amplify";
import { User } from "./src/models";
import * as SplashScreen from "expo-splash-screen";
import { Image, StyleSheet, View } from "react-native";
import Animated, { FadeOut } from "react-native-reanimated";
SplashScreen.preventAutoHideAsync();

function App() {
  const [isReady, setIsReady] = useState(false);
  const { setMe } = useMeStore();

  const getCurrentUser = async () => {
    try {
      const currentUser = await Auth.currentUserInfo();
      // console.log(JSON.stringify(currentUser, null, 2));
      if (currentUser) {
        const userData = await DataStore.query(User, (user) =>
          user.username("eq", currentUser.username)
        );

        const newUser = {
          ...userData[0],
          bookMark: userData[0].bookMark ?? [],
          profpic: userData[0].profpic ?? "",
        };
        setMe(newUser);
      }
    } catch (e) {
      console.log("Empty User Data", e.message);
    } finally {
      setTimeout(SplashScreen.hideAsync, 500);
    }
  };

  // const data = useColorScheme(); -- dark | light

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
