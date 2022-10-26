// React Basic
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
// Navigation
import ProfileTopTab from "../../navigation/ProfileTopTab";
// Components
import ProfileHeader from "../../components/profileComponents/ProfileHeader";
import ProfileBody from "../../components/profileComponents/ProfileBody";
// libs
import events from "../../libs/eventEmitter";
// database
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../../models";

const ProfileScreen = () => {
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
    id: "27391827319872319283",
    email: "abkorc33@gmail.com",
    mobile: "010-2222-2222",
    name: "name",
    nickname: "name",
    username: "abkorc33",
    password: "123456789a!",
    birthday: null,
    profpic: null,
    following: ["123", "456", "789", "1", "2"],
    followers: ["123", "456", "789"],
    Posts: [],
    favorite: null,
    BookMark: [],
    Stories: [],
    likePosts: [],
    likeStories: [],
    Comments: [],
  } as User;
  const [data, setData] = useState(userInfo);
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

  const onEdit = ({
    username,
    name,
    profpic,
  }: {
    username: string;
    name: string;
    profpic: string;
  }) => {
    console.log("Edit Profile");
    setData((data) => {
      return {
        ...data,
        username: username,
        name: name,
        profpic: profpic,
      };
    });
  };

  const onChange = ({ profpic }: { profpic: string }) => {
    setData((data) => {
      return {
        ...data,
        profpic: profpic,
      };
    });
  };

  useEffect(() => {
    events.addListener("saveEdit", onEdit);
    events.addListener("deleteImage", onChange);
    return () => {
      events.removeListener("saveEdit");
      events.removeListener("deleteImage");
    };
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ProfileHeader data={data} user={user} />
        <ProfileBody data={data} user={user} />
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

export default ProfileScreen;
