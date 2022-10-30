import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import useToggle from "../../hooks/useToggle";

function ReelsScreen() {
  // const animValue = useAnimationValue(0);

  // const { width } = useWindowDimensions();
  // const [isPlaying, setIsPlaying] = useState(false);

  // const animation = () => {
  //   Animated.timing(animValue, {
  //     toValue: isPlaying ? 0 : width,
  //     duration: 3000,
  //     useNativeDriver: false,
  //   }).start(() => setIsPlaying(!isPlaying));
  // };

  // useEffect(() => {
  //   animValue.addListener(({ value }) => {
  //     if (value === width) {
  //       setIsPlaying(false);
  //     }
  //   });
  // }, []);

  const [running, toggleRunning] = useToggle();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("running : ", running);
    if (running) {
      const timer = setInterval(
        () => setSeconds((seconds) => seconds + 0.1),
        100
      );
      return () => clearInterval(timer);
    }
  }, [running]);

  useEffect(() => {
    if (seconds > 2) {
      console.log("2초 경과");
    }
  }, [seconds > 2]); // false에서 true로 바뀜

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        {/* <Animated.View
          style={{ backgroundColor: "gray", width: animValue, height: 100 }}
        /> */}
      </View>
      <TouchableOpacity
        style={{ backgroundColor: "yellow", marginTop: 10 }}
        onPress={toggleRunning}
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
