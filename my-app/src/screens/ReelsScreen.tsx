import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  useWindowDimensions,
} from "react-native";
import { useAnimationValue } from "../hooks/useAnimationValue";

function ReelsScreen() {
  const animValue = useAnimationValue(0);

  const { width } = useWindowDimensions();
  const [isPlaying, setIsPlaying] = useState(false);

  const animation = () => {
    Animated.timing(animValue, {
      toValue: isPlaying ? 0 : width,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => setIsPlaying(!isPlaying));
  };

  // useEffect(() => {
  //   animValue.addListener(({ value }) => {
  //     if (value === width) {
  //       setIsPlaying(false);
  //     }
  //   });
  // }, []);

  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  };

  const pn = "01091186277";

  console.log("+82" + pn.slice(1, -1));

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Animated.View
          style={{ backgroundColor: "gray", width: animValue, height: 100 }}
        />
      </View>
      <TouchableOpacity
        style={{ backgroundColor: "yellow", marginTop: 10 }}
        onPress={signOut}
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
