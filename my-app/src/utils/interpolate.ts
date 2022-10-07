import { Animated } from "react-native";

/**
 * animValue와, inputRange, outputRange를 받아서
 *
 * @param animValue
 * @param outputRange
 * @param inputRange
 * @returns
 */
export const interpolate = (
  animValue: Animated.Value,
  outputRange: number[] | string[],
  inputRange: number[] = [0, 1]
) => {
  return animValue.interpolate({
    inputRange,
    outputRange,
    extrapolate: "clamp",
  });
};

/* interpolate란?
 * inputRange와 outputRange를 받아서, inputRange의 값에 따라 outputRange의 값을 반환해주는 함수
 * inputRange와 outputRange의 길이가 같아야 한다.
 * inputRange의 값이 outputRange보다 작으면, outputRange의 첫번째 값이 반환된다.
 * inputRange의 값이 outputRange보다 크면, outputRange의 마지막 값이 반환된다.
 * extrapolate: "clamp" 옵션을 주면, inputRange의 값이 outputRange보다 작거나 크면, outputRange의 첫번째 값 또는 마지막 값이 반환된다.
 * extrapolate: "extend" 옵션을 주면, inputRange의 값이 outputRange보다 작거나 크면, outputRange의 첫번째 값 또는 마지막 값에서 더 작거나 더 큰 값이 반환된다.
 * extrapolateLeft: "clamp" 옵션을 주면, inputRange의 값이 outputRange보다 작으면, outputRange의 첫번째 값이 반환된다.
 * extrapolateLeft: "extend" 옵션을 주면, inputRange의 값이 outputRange보다 작으면, outputRange의 첫번째 값에서 더 작은 값이 반환된다.
 * extrapolateRight: "clamp" 옵션을 주면, inputRange의 값이 outputRange보다 크면, outputRange의 마지막 값이 반환된다.
 * extrapolateRight: "extend" 옵션을 주면, inputRange의 값이 outputRange보다 크면, outputRange의 마지막 값에서 더 큰 값이 반환된다.
 * extrapolateLeft와 extrapolateRight는 각각 inputRange의 첫번째 값과 마지막 값에 대한 extrapolate 옵션이다.
 * extrapolateLeft와 extrapolateRight는 extrapolate 옵션보다 우선순위가 높다.
 * extrapolateLeft와 extrapolateRight는 inputRange의 길이가 2보다 작으면 적용되지 않는다.
 * extrapolateLeft와 extrapolateRight는 inputRange의 첫번째 값과 마지막 값이 같으면 적용되지 않는다.
 *
 * inputRange: [0, 1]
 * outputRange: [0, 100]
 *
 * inputRange의 값이 0이면, outputRange의 첫번째 값인 0이 반환된다.
 * inputRange의 값이 0.5이면, outputRange의 첫번째 값과 마지막 값의 중간인 50이 반환된다.
 * inputRange의 값이 1이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 1.5이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 -0.5이면, outputRange의 첫번째 값인 0이 반환된다.
 *
 * inputRange: [0, 0.5, 1]
 * outputRange: [0, 50, 100]
 *
 * inputRange의 값이 0이면, outputRange의 첫번째 값인 0이 반환된다.
 * inputRange의 값이 0.25이면, outputRange의 첫번째 값과 두번째 값의 중간인 25가 반환된다.
 * inputRange의 값이 0.5이면, outputRange의 두번째 값인 50이 반환된다.
 * inputRange의 값이 0.75이면, outputRange의 두번째 값과 세번째 값의 중간인 75가 반환된다.
 * inputRange의 값이 1이면, outputRange의 세번째 값인 100이 반환된다.
 *
 * inputRange: [0, 0.5, 1]
 * outputRange: [0, 100]
 *
 * inputRange의 값이 0이면, outputRange의 첫번째 값인 0이 반환된다.
 * inputRange의 값이 0.25이면, outputRange의 첫번째 값과 마지막 값의 중간인 50이 반환된다.
 * inputRange의 값이 0.5이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 0.75이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 1이면, outputRange의 마지막 값인 100이 반환된다.
 *
 * inputRange: [0, 0.5, 1]
 * outputRange: [0, 100]
 * extrapolate: "clamp"
 *
 * inputRange의 값이 0이면, outputRange의 첫번째 값인 0이 반환된다.
 * inputRange의 값이 0.25이면, outputRange의 첫번째 값과 마지막 값의 중간인 50이 반환된다.
 * inputRange의 값이 0.5이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 0.75이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 1이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 1.5이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 -0.5이면, outputRange의 첫번째 값인 0이 반환된다.
 *
 * inputRange: [0, 0.5, 1]
 * outputRange: [0, 100]
 * extrapolate: "extend"
 *
 * inputRange의 값이 0이면, outputRange의 첫번째 값인 0이 반환된다.
 * inputRange의 값이 0.25이면, outputRange의 첫번째 값과 마지막 값의 중간인 50이 반환된다.
 * inputRange의 값이 0.5이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 0.75이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 1이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 1.5이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 -0.5이면, outputRange의 첫번째 값인 0이 반환된다.
 *
 * inputRange: [0, 0.5, 1]
 * outputRange: [0, 100]
 * extrapolateLeft: "clamp"
 * extrapolateRight: "extend"
 *
 * inputRange의 값이 0이면, outputRange의 첫번째 값인 0이 반환된다.
 * inputRange의 값이 0.25이면, outputRange의 첫번째 값과 마지막 값의 중간인 50이 반환된다.
 * inputRange의 값이 0.5이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 0.75이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 1이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 1.5이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 -0.5이면, outputRange의 첫번째 값인 0이 반환된다.
 *
 * inputRange: [0, 0.5, 1]
 * outputRange: [0, 100]
 * extrapolateLeft: "extend"
 * extrapolateRight: "clamp"
 *
 * inputRange의 값이 0이면, outputRange의 첫번째 값인 0이 반환된다.
 * inputRange의 값이 0.25이면, outputRange의 첫번째 값과 마지막 값의 중간인 50이 반환된다.
 * inputRange의 값이 0.5이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 0.75이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 1이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 1.5이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 -0.5이면, outputRange의 첫번째 값인 0이 반환된다.
 *
 * inputRange: [0, 0.5, 1]
 * outputRange: [0, 100]
 * extrapolateLeft: "identity"
 * extrapolateRight: "identity"
 *
 * inputRange의 값이 0이면, outputRange의 첫번째 값인 0이 반환된다.
 * inputRange의 값이 0.25이면, outputRange의 첫번째 값과 마지막 값의 중간인 50이 반환된다.
 * inputRange의 값이 0.5이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 0.75이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 1이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 1.5이면, outputRange의 마지막 값인 100이 반환된다.
 * inputRange의 값이 -0.5이면, outputRange의 첫번째 값인 0이 반환된다.
 */
