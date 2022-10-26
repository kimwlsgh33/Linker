import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import ProfileHeader from "../components/profileComponents/ProfileHeader";
import ProfileBody from "../components/profileComponents/ProfileBody";
import ProfileTopTab from "../navigation/ProfileTopTab";
import events from "../libs/eventEmitter";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../models";

const ProfileScreen = () => {
  const storyInfo = [
    {
      id: 1,
      isYou: true,
      show: false,
      name: "내 스토리",
      userName: "nieoodie",
      image: require("../../assets/images/jinho.jpeg"),
    },
    {
      id: 2,
      isYou: false,
      show: false,
      name: "kwonwoo",
      userName: "kwonwoo",
      image: require("../../assets/images/woo.jpeg"),
    },
    {
      id: 3,
      isYou: false,
      show: false,
      name: "pizza",
      userName: "Domino",
      image: require("../../assets/images/pizza.jpeg"),
    },
    {
      id: 4,
      isYou: false,
      show: false,
      name: "hyunsu",
      userName: "hyunsu",
      image: require("../../assets/images/hyunsu.jpeg"),
    },
    {
      id: 5,
      isYou: false,
      show: false,
      name: "jongin",
      userName: "jeongjongin",
      image: require("../../assets/images/jongin.jpeg"),
    },
  ];
  const [user, setUser] = useState(storyInfo);

  const userInfo = {
    accountName: "userId33",
    name: "user_name",
    post: 123,
    follower: 456,
    following: 789,
    profileImage: null,
  };
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
    accountName,
    name,
    profileImage,
  }: {
    accountName: string;
    name: string;
    profileImage: string;
  }) => {
    console.log("Edit Profile");
    setData((data) => {
      return {
        ...data,
        accountName: accountName,
        name: name,
        profileImage: profileImage,
      };
    });
  };

  const onChange = ({ profileImage }: { profileImage: string }) => {
    setData((data) => {
      return {
        ...data,
        profileImage: profileImage,
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
