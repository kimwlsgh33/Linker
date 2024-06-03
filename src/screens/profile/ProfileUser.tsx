// React Basic
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
// Navigation
import ProfileTopTab from "../../navigation/ProfileTopTab";
// Components
import ProfileUserHeader from "../../components/profileComponents/ProfileUserHeader";
import ProfileUserBody from "../../components/profileComponents/ProfileUserBody";
// database

const ProfileUser = ({ route }) => {
  const { user } = route.params;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ProfileUserHeader data={user} user={user} />
        <ProfileUserBody data={user} user={user} />
        <ProfileTopTab user={user} />
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
