import React from "react";
import { SafeAreaView, Pressable, StyleSheet, View } from "react-native";
import ProfileModal from "./ProfileModal";
import ProfileModal2 from "./ProfileModal2";
import ProfileModal3 from "./ProfileModal3";

export const ProfileHeader = ({ data, user }) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <ProfileModal data={data} />
        <View>
          <ProfileModal2 user={user} />
        </View>
        <View>
          <ProfileModal3 />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    padding: 15,
  },
});

export default ProfileHeader;
