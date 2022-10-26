import * as React from "react";
import {
  View,
  useWindowDimensions,
  Dimensions,
  StyleSheet,
} from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { TabView, SceneMap } from "react-native-tab-view";

const { width } = Dimensions.get("window");

const FirstRoute = () => {
  return (
    <Animated.View style={{ flex: 1, backgroundColor: "#ff4081" }}>
      <Animated.View
        style={{
          backgroundColor: "yellow",
          height: 40,
          // width: withTiming(position.value, {
          //   duration: 500,
          //   easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          // }),
        }}
      ></Animated.View>
    </Animated.View>
  );
};

const SecondRoute = () => {
  return <Animated.View style={{ flex: 1, backgroundColor: "#673ab7" }} />;
};

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  const position = useSharedValue(0);

  const renderScene = ({ route, position }) => {
    switch (route.key) {
      case "first":
        return <FirstRoute />;
      case "second":
        return <SecondRoute />;
    }
  };

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </>
  );
}
