// React Basic
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
// Navigation
import ProfileTopTab from "../../navigation/ProfileTopTab";
// Components
import ProfileHeader from "../../components/profileComponents/ProfileHeader";
import ProfileBody from "../../components/profileComponents/ProfileBody";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../../models";
import { useMeStore } from "../../store";

const ProfileScreen = () => {
  const { me, setMe } = useMeStore();

  // 더미데이터
  const storyInfo = [
    {
      id: 1,
      isYou: true,
      show: false,
      name: "내 스토리",
      userName: "nieoodie",
      image: require("../../../assets/images/jinho.jpeg"),
    },
  ];
  const [user, setUser] = useState(storyInfo);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ProfileHeader data={me} user={user} />
        <ProfileBody data={me} user={user} />
        <ProfileTopTab route={user} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
});

export default ProfileScreen;
