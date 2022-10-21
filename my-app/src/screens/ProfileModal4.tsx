import React, { useEffect } from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

function ProfileModal4({ navigation }) {
  const animValue = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();



  }, []);

  return (
    <>
      <Animated.View
        style={{ position: "absolute", height, width, opacity: animValue }}
      >
        <Pressable
          style={[
            {
              height,
              width,
              backgroundColor: "rgba(0,0,0,0.3)",
            },
          ]}
          onPress={navigation.goBack}
        />
      </Animated.View>
      <View
        style={{
          backgroundColor: "red",
          width: 100,
          height: 100,
        }}
      />
    </>
  );
}

export default ProfileModal4;
