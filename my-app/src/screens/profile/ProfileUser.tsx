// React Basic
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
// Navigation
import ProfileTopTab from "../../navigation/ProfileTopTab";
// Components
import ProfileUserHeader from "../../components/profileComponents/ProfileUserHeader";
import ProfileUserBody from "../../components/profileComponents/ProfileUserBody";
// database
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../../models";
import { useMeStore } from "../../store";

const ProfileUser = ({ route }) => {
  const { user: OpUser } = route.params;
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
  // const { me, setMe } = useMeStore();

  // const users = async () => {
  //   const newUser = DataStore.query(User, (test) =>
  //     test.name("contains", "rlawlsgh97")
  //   );
  //   return newUser[0];
  // };

  // useEffect(() => {
  //   users().then((test) => setMe(test));
  // }, []);

  const userInfo = {
    id: "54545",
    email: "524648",
    mobile: "010-2222-2222",
    name: "다른유저",
    nickname: "user",
    username: "useruser",
    password: "123456789a!",
    birthday: null,
    profpic: null,
    following: [],
    followers: [],
    Posts: [],
    favorite: null,
    BookMark: [],
    Stories: [],
    likePosts: [],
    likeStories: [],
    Comments: [],
  } as User;

  // const [data, setData] = useState(OpUser);
  const [data, setData] = useState(userInfo);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ProfileUserHeader data={data} user={user} />
        <ProfileUserBody data={data} user={user} />
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
