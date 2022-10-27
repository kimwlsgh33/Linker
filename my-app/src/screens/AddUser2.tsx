import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import TextAndIcon from "../components/TextAndIcon";

function AddUser2() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <TextAndIcon
          text="연락처에 있는 사람 팔로우"
          iconName="right"
          iconName2="adduser"
          iconSize={20}
        />

        <TextAndIcon
          text="이메일로 친구 초대"
          iconName="right"
          iconName2="mail"
          iconSize={20}
        />

        <TextAndIcon
          text="SMS로 친구 초대"
          iconName="right"
          iconName2="message1"
          iconSize={20}
        />

        <TextAndIcon
          text="친구 초대..."
          iconName="right"
          iconName2="sharealt"
          iconSize={20}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
});

export default AddUser2;
