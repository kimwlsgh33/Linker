import React, { useEffect, useMemo, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { useAnimationValue } from "../hooks/useAnimationValue";

const { width } = Dimensions.get("window");

function UserBarPlaceholder({ num }) {
  const dummyArray = useMemo(() => new Array(num).fill(0), []);

  const animOpacityValue = useAnimationValue(0.5);

  const startAnim = Animated.timing(animOpacityValue, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.linear,
  });
  const endAnim = Animated.timing(animOpacityValue, {
    toValue: 0.5,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.linear,
  });

  // animation stagger 란?
  // animation을 여러개를 동시에 실행시키는 것이 아니라
  // 하나의 animation이 끝난 후 다음 animation을 실행시키는 것
  // Animated.stagger 첫번째 인자 : animation이 실행되는 간격

  const animations = Animated.stagger(1000, [startAnim, endAnim]);

  useEffect(() => {
    Animated.loop(animations).start();
    return () => Animated.loop(animations).stop();
  }, []);

  return (
    <>
      {dummyArray.map((_, index) => (
        <Animated.View
          key={index}
          style={[styles.button, { opacity: animOpacityValue }]}
        >
          <View style={styles.profpicView}>
            <View style={styles.profpic} />
          </View>
          <View>
            <View
              style={{
                height: 10,
                width: width / 3 + 30,
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 5,
                marginBottom: 5,
              }}
            />
            <View
              style={{
                height: 10,
                width: width / 3 - 20,
                backgroundColor: "rgba(0,0,0,0.3)",
                borderRadius: 5,
              }}
            />
          </View>
        </Animated.View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  profpicView: {
    width: 50,
  },
  profpic: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});

export default UserBarPlaceholder;
