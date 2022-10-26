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
    {
      id: 2,
      isYou: false,
      show: false,
      name: "kwonwoo",
      userName: "kwonwoo",
      image: require("../../../assets/images/woo.jpeg"),
    },
    {
      id: 3,
      isYou: false,
      show: false,
      name: "pizza",
      userName: "Domino",
      image: require("../../../assets/images/pizza.jpeg"),
    },
    {
      id: 4,
      isYou: false,
      show: false,
      name: "hyunsu",
      userName: "hyunsu",
      image: require("../../../assets/images/hyunsu.jpeg"),
    },
    {
      id: 5,
      isYou: false,
      show: false,
      name: "jongin",
      userName: "jeongjongin",
      image: require("../../../assets/images/jongin.jpeg"),
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
    following: [],
    followers: [],
    favorite: null,
    Posts: [],
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
