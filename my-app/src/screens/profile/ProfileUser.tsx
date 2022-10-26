// React Basic
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
// Navigation
import ProfileTopTab from "../../navigation/ProfileTopTab";
// Components
import ProfileUserHeader from "../../components/profileComponents/ProfileUserHeader";
import ProfileUserBody from "../../components/profileComponents/ProfileUserBody";
// libs
import events from "../../libs/eventEmitter";
// database
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../../models";
import create from "zustand";

const ProfileUser = () => {
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

  const userInfo = {
    id: "5468456",
    email: "abkorc33@gmail.com",
    mobile: "010-2222-2222",
    name: "user",
    nickname: "user",
    username: "user1234",
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

  const [data, setData] = useState(userInfo);

  const useMeStore = create((set) => ({
    me: null,
    setMe: (state) => set({ me: state.me }),
  }));
  // let models;
  // const [data, setData] = useState([]);

  // const getUser = async () => {
  //   models = await DataStore.query(User, (user) =>
  //     user.username("eq", "abkorc33")
  //   );
  //   console.log(models);
  //   setData(models);
  // };

  // useEffect(() => {
  //   getUser();
  //   data.map((dat) => {
  //     console.log("안녕" + dat.username);
  //   });
  // }, []);

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
