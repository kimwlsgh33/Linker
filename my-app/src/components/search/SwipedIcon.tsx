import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { interpolate } from "../../utils/interpolate";
import EntryIcon from "react-native-vector-icons/Entypo";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  FadeIn,
  FadeOut,
  FadeInLeft,
  FadeOutLeft,
  BounceInLeft,
  BounceOutLeft,
} from "react-native-reanimated";
import useToggle from "../../hooks/useToggle";

type Props = {
  defaultIconName?: string;
  secondIconName?: string;
  defaultPress?: () => void;
  secondPress?: () => void;
  toggleValue: boolean;
};

function SwipedIcon({
  defaultIconName,
  secondIconName,
  defaultPress,
  secondPress,
  toggleValue,
}: Props) {
  return (
    <View style={styles.iconView}>
      {!toggleValue && (
        <Animated.View entering={FadeIn} exiting={FadeOut}>
          <TouchableOpacity style={styles.animIcon} onPress={defaultPress}>
            <View>
              <EntryIcon name="location" size={20} color="rgba(0,0,0,0.5)" />
            </View>
          </TouchableOpacity>
        </Animated.View>
      )}
      {toggleValue && (
        <Animated.View
          entering={FadeInLeft.duration(100)}
          exiting={FadeOutLeft}
        >
          <TouchableOpacity style={styles.animIcon} onPress={secondPress}>
            <Text>취소</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  iconView: {
    height: 30,
    width: 30,
  },
  animIcon: {
    // backgroundColor: "green",
    height: 30,
    width: 30,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SwipedIcon;
