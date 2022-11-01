// React Basic
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
// Navigation
import ProfileTopTab from "../../navigation/ProfileTopTab";
// Components
import ProfileUserHeader from "../../components/profileComponents/ProfileUserHeader";
import ProfileUserBody from "../../components/profileComponents/ProfileUserBody";
// database
import { useMeStore } from "../../store";

const ProfileUser = () => {
  const { me, setMe } = useMeStore();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ProfileUserHeader user={me} />
        <ProfileUserBody user={me} />
        <ProfileTopTab user={me} />
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

export default ProfileUser;
