import React, { useState, useCallback } from "react";
import {
  SafeAreaView,
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const ProfileModal2 = ({ user }) => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const storyPressed = useCallback(
    (id) => {
      if (user.id === id) {
        return {
          ...user,
          show: true,
        };
      }
      return user;
    },
    [user]
  );

  const goToPost = () => {
    navigation.navigate("Story", {
      name: user[0].name,
      image: user[0].image,
      userName: user[0].userName,
    });
    // 누른 스토리 유저의 id를 함수의 인자로 받아올 수 있다.
    storyPressed(user.id);
    setVisible(false);
  };

  const goToReels = () => {
    navigation.navigate("Story", {
      name: user[0].name,
      image: user[0].image,
      userName: user[0].userName,
    });
    storyPressed(user.id);
    setVisible(false);
  };

  const goToStory = () => {
    navigation.navigate("Story", {
      name: user[0].name,
      image: user[0].image,
      userName: user[0].userName,
    });
    storyPressed(user.id);
    setVisible(false);
  };

  return (
    <SafeAreaView>
      <Pressable
        onPress={() => setVisible(true)}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.2 : 1,
          },
        ]}
      >
        <FontAwesome name="plus-square-o" style={{ fontSize: 22, left: 90 }} />
      </Pressable>
      <Modal visible={visible} transparent={true} animationType={"fade"}>
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.3)" }}
        ></Pressable>
      </Modal>
      <Modal visible={visible} transparent={true} animationType={"slide"}>
        <Pressable
          style={{ flex: 1, justifyContent: "flex-end" }}
          onPress={() => setVisible(false)}
        ></Pressable>
        <View style={styles.modal2}>
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
                <Icon name="ios-play-circle-outline" size={25} color="black" />
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
        </View>
      </Modal>
    </SafeAreaView>
  );
};

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

export default ProfileModal2;
