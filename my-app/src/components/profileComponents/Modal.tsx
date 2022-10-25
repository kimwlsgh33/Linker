import React, { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { RadioButton } from "react-native-paper";

const { width, height } = Dimensions.get("window");

function Modal({ navigation, route }) {
  const { data } = route.params; // navigation으로 전달하는 data는 route로 가져옴
  const [checked, setChecked] = useState("first");
  const opacity = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    openModal();
  }, []);

  const openModal = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => navigation.goBack());
  };

  return (
    <>
      <Animated.View style={{ position: "absolute", height, width, opacity }}>
        <Pressable
          style={[
            {
              height,
              width,
              backgroundColor: "rgba(0,0,0,0.3)",
            },
          ]}
          onPress={closeModal}
        />
      </Animated.View>
      <View style={{ height: height - 165 }}></View>
      <View style={styles.modal}>
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
            <View style={styles.align}>
              <Image
                style={styles.modalIcon1}
                source={
                  data.profileImage
                    ? { uri: data.profileImage }
                    : require("../../../assets/images/user.png")
                }
              />
              <Text style={styles.modalText}>{data.accountName}</Text>
              <View style={{ marginLeft: "60%" }}>
                <RadioButton
                  value="first"
                  color="#0080FF"
                  uncheckedColor="white"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                />
              </View>
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
            <View style={styles.align}>
              <View style={styles.modalIcon2}>
                <Entypo name="plus" style={{ fontSize: 20 }} />
              </View>
              <Text style={styles.modalText}>계정 추가</Text>
              <View style={{ marginLeft: "60%" }}>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
  align: {
    flexDirection: "row",
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
