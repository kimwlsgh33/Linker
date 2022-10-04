import React, { useState } from "react";
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
      <View style={{ backgroundColor: "#fff", height: "100%" }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 15,
            alignItems: "center",
            padding: 15,
          }}
        >
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
                  onPress={handleOpen}
                  style={{
                    fontFamily: "강원교육모두 Bold",
                    fontSize: 23,
                  }}
                >
                  userID33
                  <Feather name="chevron-down" style={{ fontSize: 16 }} />
                </Text>
              )}
            ><View style={{flexDirection: "row"}}>
              <Pressable
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.2 : 1,
                  },
                ]}
              >
                <View
                  style={{
                    marginLeft: 15,
                    width: 45,
                    height: 45,
                    borderRadius: 100,
                    borderWidth: 1,
                    opacity: 0.7,
                    marginHorizontal: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Entypo name="plus" style={{ fontSize: 20, color: "#000" }} />
                </View>
              </Pressable>
              <Text style={{top: 14, left: 5, fontSize: 11}}>계정 추가</Text>
              </View>
              <Pressable
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.2 : 1,
                  },
                ]}
              >
                <View
                  style={{
                    marginTop: 10,
                    marginLeft: 15,
                    width: 45,
                    height: 45,
                    borderRadius: 100,
                    borderWidth: 1,
                    opacity: 0.7,
                    marginHorizontal: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Entypo name="plus" style={{ fontSize: 20, color: "#000" }} />
                </View>
              </Pressable>
              {/* <View //bar style
            style={{
              height: 1,
              backgroundColor: "#ccc",
            }}
          >
          </View> */}
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingVertical: 8,
            paddingHorizontal: 13,
          }}
        >
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
              <Image
                source={profileImage}
                style={{
                  resizeMode: "cover",
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                  borderColor: "lightgray",
                  borderWidth: 2,
                  top: 10,
                }}
              />
              <Text
                style={{
                  paddingVertical: 5,
                  fontFamily: "강원교육모두 Bold",
                  fontSize: 15,
                  textAlign: "center",
                  top: 5,
                }}
              >
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
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            paddingVertical: 10,
          }}
        >
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
              <View
                style={{
                  width: "100%",
                  height: 35,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "강원교육모두 Bold",
                    fontSize: 14,
                    letterSpacing: 1,
                  }}
                >
                  프로필편집
                </Text>
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
              <View
                style={{
                  height: 35,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather name="user-plus" style={{ fontSize: 17 }} />
              </View>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 5,
            marginVertical: 10,
          }}
        >
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View
            // style={{
            //   width: 50,
            //   height: 50,
            //   borderRadius: 100,
            //   backgroundColor: "black",
            //   opacity: 0.1,
            //   marginHorizontal: 5,
            // }}
            >
              <Image
                source={profileImage}
                style={{
                  resizeMode: "cover",
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  borderColor: "lightgray",
                  borderWidth: 2,
                  marginHorizontal: 5,
                }}
              />
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
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 100,
                borderWidth: 1,
                opacity: 0.7,
                marginHorizontal: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
