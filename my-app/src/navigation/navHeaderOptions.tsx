import { StackNavigationOptions } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import HeaderBar from "../components/HeaderBar";

/**
 * Navigation Header Component를 정의하는 파일
 */

export const CommentHeaderRignt = () => (
  <View>
    <Feather
      name="send"
      style={{
        fontSize: 23,
      }}
    />
  </View>
);

export const headerOptions = ({
  navigation,
  route,
}): StackNavigationOptions => {
  let title, headerRight;

  if (route.name === "Detail") {
    title = "Detail";
  } else if (route.name === "Post") {
    title = "New Post";
  } else if (route.name === "Story") {
    title = "Story";
  } else if (route.name === "SignUp") {
    title = "SignUp";
  } else if (route.name === "Discover") {
    title = "탐색 탭";
  } else if (route.name === "FollowTab") {
    title = "userId33";
  } else if (route.name === "Setting") {
    title = "설정";
  } else if (route.name === "AddUser2") {
    title = "친구 팔로우 및 초대";
  } else if (route.name === "Bells2") {
    title = "알림";
  } else if (route.name === "Lock2") {
    title = "개인정보 보호";
  } else if (route.name === "Safety2") {
    title = "보안";
  } else if (route.name === "User2") {
    title = "계정";
  } else if (route.name === "Thema2") {
    title = "테마 설정";
  } else if (route.name === "PersonalData") {
    title = "개인정보";
  } else if (route.name === "Comment") {
    title = "댓글";
    headerRight = <CommentHeaderRignt />;
  }

  return {
    header: () => (
      <HeaderBar
        title={title}
        leftIconPressed={navigation.goBack}
        headerRight={headerRight}
      />
    ),
  };
};
