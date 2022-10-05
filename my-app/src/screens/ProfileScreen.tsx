import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Modal as DefaultModal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/core";
import Icon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import ProfileBottomTab from "../components/ProfileBottomTab";
import { Modal } from "../components/Modal";

function ProfileScreen() {
  const navigation = useNavigation();

  const profileImage = require("../../assets/images/profile.png");
  const post = 123;
  const followers = 456;
  const following = 789;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <Modal
              activator={({ handleOpen }) => (
                <Text
                  onPress={() => {
                    handleOpen();
                  }}
                  style={{
                    fontFamily: "강원교육모두 Bold",
                    fontSize: 23,
                  }}
                >
                  userID33
                  <Feather name="chevron-down" style={{ fontSize: 16 }} />
                </Text>
              )}
            >
              <View style={styles.modal}>
                <View style={{ flexDirection: "row" }}>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.2 : 1,
                      },
                    ]}
                  >
                    <View style={styles.modalIcon1}>
                      <Entypo
                        name="plus"
                        style={{ fontSize: 20, color: "#000" }}
                      />
                    </View>
                  </Pressable>
                  <Text style={{ fontSize: 11, top: 45, left: 5 }}>
                    계정 추가
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.2 : 1,
                      },
                    ]}
                  >
                    <View style={styles.modalIcon2}>
                      <Entypo
                        name="plus"
                        style={{ fontSize: 20, color: "#000" }}
                      />
                    </View>
                  </Pressable>
                  <Text style={{ fontSize: 11, top: 30, left: 5 }}>
                    계정 추가
                  </Text>
                </View>
              </View>
            </Modal>
          </Pressable>
          <View>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                },
              ]}
            >
              <FontAwesome
                name="plus-square-o"
                style={{ fontSize: 22, left: 95 }}
              />
            </Pressable>
          </View>
          <View>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                },
              ]}
            >
              <Icon name="menu-outline" style={{ fontSize: 29 }} />
            </Pressable>
          </View>
        </View>
        <View style={styles.profileHeader}>
          <View>
            <Pressable
              style={({ pressed }) => [
                Platform.OS === "ios" &&
                  pressed && {
                    opacity: pressed ? 0.2 : 1,
                  },
              ]}
              android_ripple={{ color: "rgba(0,0,0,0.1)", radius: 1 }}
            >
              <Image source={profileImage} style={styles.profileStyle} />
              <Text style={styles.profileText}>
                user_name
                {/* {user name} */}
              </Text>
            </Pressable>
          </View>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: "강원교육모두 Bold", fontSize: 20 }}>
                {post}
              </Text>
              <Text style={{ fontFamily: "강원교육모두 Bold" }}>게시물</Text>
            </View>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: "강원교육모두 Bold", fontSize: 20 }}>
                {followers}
              </Text>
              <Text style={{ fontFamily: "강원교육모두 Bold" }}>팔로워</Text>
            </View>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: "강원교육모두 Bold", fontSize: 20 }}>
                {following}
              </Text>
              <Text style={{ fontFamily: "강원교육모두 Bold" }}>팔로잉</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.profileButton}>
          <View style={{ borderRadius: 5, overflow: "hidden", width: "80%" }}>
            <Pressable
              onPress={() => navigation.navigate("EditProfile")}
              style={({ pressed }) => [
                Platform.OS === "ios" &&
                  pressed && {
                    opacity: pressed ? 0.2 : 1,
                  },
                {
                  width: "100%",
                  backgroundColor: "#f5f5f5",
                },
              ]}
              android_ripple={{ color: "rgba(0,0,0,0.1)" }}
            >
              <View style={styles.profileButtonView}>
                <Text style={styles.profileButtonText}>프로필편집</Text>
              </View>
            </Pressable>
          </View>
          <View style={{ borderRadius: 5, overflow: "hidden", width: "10%" }}>
            <Pressable
              style={({ pressed }) => [
                Platform.OS === "ios" &&
                  pressed && {
                    opacity: pressed ? 0.2 : 1,
                  },
                {
                  backgroundColor: "#f5f5f5",
                },
              ]}
              android_ripple={{ color: "rgba(0,0,0,0.1)" }}
            >
              <View style={styles.profileButtonView2}>
                <Feather name="user-plus" style={{ fontSize: 17 }} />
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.roundView}>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View>
              <Image source={profileImage} style={styles.round1} />
            </View>
            <Text style={{ fontSize: 11, left: 18 }}>취미</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={styles.round2}>
              <Entypo name="plus" style={{ fontSize: 20, color: "#000" }} />
            </View>
            <Text style={{ fontSize: 11, left: 18 }}>신규</Text>
          </Pressable>
        </View>
        <ProfileBottomTab />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    padding: 15,
  },
  modal: {
    backgroundColor: "white",
    height: 150,
    top: 585,
    borderRadius: 15,
  },
  modalIcon1: {
    marginTop: 30,
    marginLeft: 15,
    width: 45,
    height: 45,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  modalIcon2: {
    marginTop: 15,
    marginLeft: 15,
    width: 45,
    height: 45,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 8,
    paddingHorizontal: 13,
  },
  profileStyle: {
    resizeMode: "cover",
    width: 80,
    height: 80,
    borderRadius: 100,
    borderColor: "lightgray",
    borderWidth: 2,
    top: 10,
  },
  profileText: {
    paddingVertical: 5,
    fontFamily: "강원교육모두 Bold",
    fontSize: 15,
    textAlign: "center",
    top: 5,
  },
  profileButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  profileButtonView: {
    width: "100%",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  profileButtonText: {
    fontFamily: "강원교육모두 Bold",
    fontSize: 14,
    letterSpacing: 1,
  },
  profileButtonView2: {
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  roundView: {
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 10,
  },
  round1: {
    resizeMode: "cover",
    width: 50,
    height: 50,
    borderRadius: 100,
    borderColor: "lightgray",
    borderWidth: 2,
    marginHorizontal: 5,
  },
  round2: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileScreen;
