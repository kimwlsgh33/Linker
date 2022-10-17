import { useRef } from "react";
import { Animated } from "react-native";

/**
 *
 * @param initialValue 기본값을 받아서 Animated.Value를 생성,
 * 생성한 Animated.Value의 주소값을 animation에 할당
 * @returns Animated.Value를 반환
 */
export const useAnimationValue = (initialValue: number = 0): Animated.Value => {
  const animation = useRef(new Animated.Value(initialValue)).current;
  return animation;
};
