import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { useAnimationValue } from "../hooks/useAnimationValue";

function ReelsScreen() {
  const animValue = useAnimationValue(0);
  const [isPressed, setIsPressed] = React.useState(false);

  const biggerText = () => {
    Animated.timing(animValue, {
      toValue: isPressed ? 0 : 40,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      setIsPressed((prev) => !prev);
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={{ fontSize: animValue }}>
        Reels Screen
      </Animated.Text>
      <TouchableOpacity
        style={{ backgroundColor: "yellow", marginTop: 10 }}
        onPress={biggerText}
      >
        <Text>Size Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ReelsScreen;
