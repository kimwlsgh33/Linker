import React, {useEffect} from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";

export const ProfileBody = ({
  accountName,
  name,
  profileImage,
  post,
  follower,
  following,
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <View style={styles.profileHeader}>
          <View>
            <Pressable
              onPress={() => {
                navigation.navigate("Story");
              }}
              style={({ pressed }) => [
                Platform.OS === "ios" &&
                  pressed && {
                    opacity: pressed ? 0.2 : 1,
                  },
              ]}
              android_ripple={{ color: "rgba(0,0,0,0.1)", radius: 1 }}
            >
              <Image source={profileImage} style={styles.profileStyle} />
              <Text style={styles.profileText}>{name}</Text>
            </Pressable>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate("Posts");
            }}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: "GangwonEduAllBold", fontSize: 20 }}>
                {post}
              </Text>
              <Text style={{ fontFamily: "GangwonEduAllBold" }}>게시물</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("FollowTab")}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: "GangwonEduAllBold", fontSize: 20 }}>
                {follower}
              </Text>
              <Text style={{ fontFamily: "GangwonEduAllBold" }}>팔로워</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("FollowTab")}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: "GangwonEduAllBold", fontSize: 20 }}>
                {following}
              </Text>
              <Text style={{ fontFamily: "GangwonEduAllBold" }}>팔로잉</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.profileButton}>
          <View style={{ borderRadius: 5, overflow: "hidden", width: "80%" }}>
            <Pressable
              onPress={() =>
                navigation.navigate("EditProfile", {
                  name: name,
                  accountName: accountName,
                  profileImage: profileImage,
                })
              }
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
              onPress={() => navigation.navigate("FollowTab")}
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
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingVertical: 5, paddingHorizontal: 10 }}
        >
          <View style={styles.roundView}>
            <Pressable
              onPress={() => {
                navigation.navigate("Story");
              }}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                },
              ]}
            >
              <View>
                <Image
                  source={{ uri: "https://source.unsplash.com/random/100x102" }}
                  style={styles.round1}
                />
              </View>
              <Text style={styles.roundText}>취미</Text>
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
              <Text style={styles.roundText}>신규</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: "GangwonEduAllBold",
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
    fontFamily: "GangwonEduAllBold",
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
  roundText: {
    fontSize: 11,
    left: 20,
    top: 8,
    fontFamily: "GangwonEduAllBold",
  },
});

export default ProfileBody;
