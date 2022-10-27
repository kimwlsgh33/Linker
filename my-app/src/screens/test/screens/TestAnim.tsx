import { DataStore, Predicates } from "aws-amplify";
import React, { useEffect } from "react";
import { Dimensions, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { User, Post, Terms } from "../../../models";

const { width: screenWidth } = Dimensions.get("window");

function TestAnim() {
  const width = useSharedValue(50);

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  const getUser = async () => {
    try {
      const users = await DataStore.query(User, (user) =>
        user.mobile("eq", "01091186277")
      );
      console.log("users: ", JSON.stringify(users, null, 2));
    } catch (e) {
      alert(e);
    }
  };

  // const deletePost = async () => {
  //   const res = await DataStore.query(Post, Predicates.ALL);
  //   console.log("res: ", res);
  // };

  useEffect(() => {
    DataStore.start();
    return () => {
      DataStore.stop();
    };
  }, []);

  return (
    <SafeAreaView>
      <Animated.View
        style={[{ backgroundColor: "blue", width: 100, height: 100 }, style]}
      >
        <Text style={{ color: "white" }}>TestAnim</Text>
      </Animated.View>

      <TouchableOpacity
        style={{ backgroundColor: "tomato", width: 100, height: 100 }}
        onPress={() => {
          width.value = Math.random() * 500;
          getUser();
          // deletePost();
        }}
      >
        <Text>애니메이션 실행</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: "pink", width: 100, height: 100 }}
        onPress={() => {
          width.value = Math.random() * 500;
          // deletePost();
        }}
      >
        <Text>setMe</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default TestAnim;
