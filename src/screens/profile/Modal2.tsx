import React, { useEffect, useCallback, useRef } from "react";
import { Dimensions, Pressable, View, Text, StyleSheet } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  Layout,
  runOnJS,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import useToggle from "../../hooks/useToggle";

const { width, height } = Dimensions.get("window");

function Modal2({ navigation }) {
  const [visible, toggleVisible] = useToggle(true);

  const goToReels = () => {
    navigation.navigate("UploadPost");
  };

  const goToPost = () => {
    navigation.navigate("UploadPost");
  };

  const goToStory = () => {
    navigation.navigate("UploadPost");
  };

  return (
    <View style={styles.container}>
      {visible && (
        <>
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut.withCallback(() => {
              "worklet";
              runOnJS(navigation.goBack)();
            })}
            style={{
              position: "absolute",
              height,
              width,
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          >
            <Pressable
              style={{
                width: "100%",
                height: "100%",
              }}
              onPress={toggleVisible}
            />
          </Animated.View>
          <Animated.View
            entering={SlideInDown}
            exiting={SlideOutDown.duration(1000)}
            layout={Layout.delay(1)}
            style={styles.modal2}
          >
            <View style={{ alignItems: "center" }}>
              <View style={styles.miniBar} />
              <Text style={{ fontFamily: "GangwonEduAllBold" }}>만들기</Text>
            </View>
            <View style={styles.modalBar} />
            <View style={styles.menu}>
              <Pressable
                onPress={goToReels}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.2 : 1,
                  },
                ]}
              >
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    name="ios-play-circle-outline"
                    size={25}
                    color="black"
                  />
                  <Text style={styles.text}>릴스</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={goToPost}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.2 : 1,
                  },
                ]}
              >
                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons name="grid" size={25} color="black" />
                  <Text style={styles.text}>게시물</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={goToStory}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.2 : 1,
                  },
                ]}
              >
                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="plus-circle-outline"
                    size={25}
                    color="black"
                  />
                  <Text style={styles.text}>스토리</Text>
                </View>
              </Pressable>
            </View>
          </Animated.View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modal2: {
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  miniBar: {
    backgroundColor: "gray",
    height: 3,
    width: 30,
    marginTop: 15,
    marginBottom: 5,
  },
  modalBar: {
    borderWidth: 0.3,
    width: "100%",
    opacity: 0.3,
    marginTop: 10,
  },
  text: {
    fontFamily: "GangwonEduAllBold",
    paddingLeft: 10,
    paddingTop: 3,
  },
  menu: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 120,
    justifyContent: "space-around",
  },
});

export default Modal2;
