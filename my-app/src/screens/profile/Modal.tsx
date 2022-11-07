import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { RadioButton } from "react-native-paper";
import useToggle from "../../hooks/useToggle";
import Animated, {
  FadeIn,
  FadeOut,
  Layout,
  runOnJS,
  SlideInDown,
  SlideOutDown,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

function Modal({ navigation, route }) {
  const { data } = route.params; // navigation으로 전달하는 data는 route로 가져옴
  const [checked, setChecked] = useState("first");

  const [visible, toggleVisible] = useToggle(true);

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
            style={{ position: "absolute", height, width }}
          >
            <Pressable
              style={[
                {
                  height,
                  width,
                  backgroundColor: "rgba(0,0,0,0.3)",
                },
              ]}
              onPress={toggleVisible}
            />
          </Animated.View>
          <Animated.View
            entering={SlideInDown}
            exiting={SlideOutDown}
            layout={Layout.delay(1)}
            style={styles.modal}
          >
            <View style={{ alignItems: "center" }}>
              <View style={styles.miniBar} />
            </View>
            <View style={styles.menu}>
              <Pressable
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.2 : 1,
                  },
                ]}
              >
                <View style={styles.userBar}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      style={styles.modalIcon1}
                      source={
                        data.profpic
                          ? { uri: data.profpic }
                          : require("../../../assets/images/user.png")
                      }
                    />
                    <Text style={styles.modalText}>{data.username}</Text>
                  </View>
                  <RadioButton
                    value="first"
                    color="#0080FF"
                    uncheckedColor="white"
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                  />
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("Login");
                }}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.2 : 1,
                  },
                ]}
              >
                <View style={styles.userBar}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={styles.modalIcon2}>
                    <Entypo name="plus" style={{ fontSize: 20 }} />
                  </View>
                  <Text style={styles.modalText}>계정 추가</Text>
                  </View>
                  <View>
                    <RadioButton
                      value="second"
                      color="#0080FF"
                      uncheckedColor="white"
                      status={checked === "second" ? "checked" : "unchecked"}
                      onPress={() => {
                        setChecked("first");
                        navigation.navigate("Login");
                      }}
                    />
                  </View>
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
  text: {
    fontFamily: "GangwonEduAllBold",
    fontSize: 23,
  },
  modal: {
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
  menu: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 120,
    justifyContent: "space-around",
  },
  userBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalIcon1: {
    width: 45,
    height: 45,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: "gray",
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  modalIcon2: {
    width: 45,
    height: 45,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 14,
    fontFamily: "GangwonEduAllBold",
  },
});

export default Modal;
