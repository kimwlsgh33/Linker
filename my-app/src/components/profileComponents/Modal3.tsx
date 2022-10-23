import React, { useEffect } from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  View,
  Text,
  StyleSheet,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// 문제1 navigate.goBack 했을 시 close 애니메이션 효과 적용 어떻게?
// 문제2 모달 창에서 다른 screen으로 갔다가
//  header에서 back버튼 누를 시 프로필 스크린이 아닌 modal3 스크린으로 돌아옴
const { width, height } = Dimensions.get("window");

function Modal3({ navigation }) {
  const open = React.useRef(new Animated.Value(0)).current;
  const close = React.useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(open, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(close, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      <Animated.View
        style={{ position: "absolute", height, width, opacity: open }}
      >
        <Pressable
          style={[
            {
              height,
              width,
              backgroundColor: "rgba(0,0,0,0.3)",
            },
          ]}
          onPress={navigation.goBack}
        />
      </Animated.View>
      <View style={{ height: height - 165 }}></View>
      <View style={styles.modal2}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.miniBar} />
        </View>
        <View style={styles.menu}>
          <Pressable
            onPress={() => {
              navigation.navigate("Setting");
            }}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon name="ios-settings-sharp" size={25} color="black" />
              <Text style={styles.text}>설정</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("User2"); // 계정 스크린으로 이동
            }}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="clock-time-eight-outline"
                size={25}
                color="black"
              />
              <Text style={styles.text}>내 활동</Text>
            </View>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <Feather name="star" size={25} color="black" />
              <Text style={styles.text}>즐겨찾기</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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

export default Modal3;
