import React, { useEffect } from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { useAnimationValue } from "../hooks/useAnimationValue";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { DataStore } from "aws-amplify";
import { Terms, User } from "../models";

const AnimPressable = Animated.createAnimatedComponent(Pressable);

const { height } = Dimensions.get("window");

const duration = 185;

function TestModal({ navigation, children }) {
  const animValue = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animValue.value }],
    };
  });

  // const open = () => {
  //   Animated.timing(animValue, {
  //     toValue: 1,
  //     duration,
  //     useNativeDriver: false,
  //   }).start();
  // };

  // 모달 닫기 버튼 눌렀을때 실행되는 함수
  // const close = () => {
  //   Animated.timing(animValue, {
  //     toValue: 0,
  //     duration,
  //     useNativeDriver: false,
  //   }).start(navigation.goBack);
  // };

  // amplify User 테이블에 데이터 추가
  // const addUser = async () => {
  //   const user = await DataStore.save(
  //     new User({
  //       username: "test1",
  //       email: "test1@naver.com",
  //     })
  //   );

  //   const terms = await DataStore.save(
  //     new Terms({
  //       Required: true,
  //       Event: false,
  //       Night: false,
  //       User: user,
  //     })
  //   );
  // };

  const open = () => {
    animValue.value = 1;
  };

  const close = () => {
    animValue.value = 0;
  };

  useEffect(() => {
    // 모달 컴포넌트 렌더링시, 콘텐츠 애니메이션 실행
    setTimeout(open, duration);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <AnimPressable
        onPress={close}
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "rgba(0,0,0,0.2)" },
        ]}
      />
      <Animated.View
        style={[
          {
            width: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            overflow: "hidden",
          },
          animatedStyles,
        ]}
      >
        {children}
      </Animated.View>
    </View>
  );
}

export default TestModal;
