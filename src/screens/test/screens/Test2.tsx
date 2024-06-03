import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

function Test2() {
  const width = useSharedValue(50);

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });
  return (
    <SafeAreaView>
      <Animated.View
        style={[{ backgroundColor: "blue", width: 100, height: 100 }, style]}
      >
        <Text style={{ color: "white" }}>Test2</Text>
      </Animated.View>

      <TouchableOpacity
        style={{ backgroundColor: "tomato", width: 100, height: 100 }}
        onPress={() => {
          console.log("pressed");
          width.value = Math.random() * 500;
        }}
      >
        <Text>애니메이션 실행</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Test2;
