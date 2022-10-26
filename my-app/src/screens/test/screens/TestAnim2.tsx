import { useNavigationState } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeTab from "../../../navigation/HomeTab";
import UploadTab from "../../../navigation/UploadTab";
import TestBTab from "../TestBTab";

const { width, height } = Dimensions.get("window");

const dummyImages = new Array(3).fill(0).map((_, i) => ({
  id: i,
  uri: `https://picsum.photos/id/${i}/500/500`,
}));

function TestAnim2({ navigation, route }) {
  const anim = useSharedValue(50);

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(anim.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  const currentIndex = useNavigationState(
    (state) => state?.routes[0]?.state?.index
  );

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <ScrollView
        horizontal
        pagingEnabled
        contentOffset={{ x: width, y: 0 }}
        scrollEnabled={currentIndex ? false : true}
      >
        <View style={styles.fullscreen}></View>
        <View style={{ width }}>
          <HomeTab />
        </View>
        <View style={{ width, backgroundColor: "red" }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    height,
    width,
  },
});

export default TestAnim2;
