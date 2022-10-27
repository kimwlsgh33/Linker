import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useUserContext } from "../../../context/UserContext";

import { DataStore } from "aws-amplify";
import { Post, Tag, User } from "../../../models";
import { TouchableOpacity } from "react-native-gesture-handler";

function UseAmplify() {
  const { me, setMe } = useUserContext();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const createPost = async () => {
    const tag = await DataStore.save(
      new Tag({
        tagname: "IU",
      })
    );

    await DataStore.save(
      new Post({
        userID: me.id,
        tagID: tag.id,
        text,
        title,
        link,
      })
    );
  };

  // const updateUser = async () => {
  //   const newUser = {username: "lfwjelfkkwjf"}
  //   await DataStore.save(User, (user)=> {
  //     ...user
  //   })
  // }

  const deleteUser = async () => {
    try {
      DataStore.delete(User, (user) => user.username("contains", "kimwlsgh"));
    } catch (e) {
      alert(e);
    }
  };

  // const setUser = async () => {
  //   const user = await DataStore.query(User, (user) =>
  //     user.username("contains", "kimwlsgh")
  //   );

  //   // 내가 좋아요 눌렀나 ? 하트 : 하트아웃라인

  //   if(나.좋아요누른포스트들.포함되어있나?(현재 포스트 아이디가))
  //   setMe(user[0]);
  // };

  // const getUser = async () => {
  //   // 포스트에 좋아요를 누른 사람들을 가져온다.
  //   // 내가 좋아요를 누른 포스트들
  //   // 포스트 좋아요 누른 사람들
  //   const users = await DataStore.query(User, (user) =>
  //     user.likePost('contains', postId)
  //   );

  //   users.length()  // 포스트 좋아요 수

  //   setMe(users[0]);
  // };

  // useEffect(() => {
  //   setUser();
  // }, []);

  // useEffect(() => {
  //   console.log(JSON.stringify(me, null, 2));
  // }, [me]);

  return (
    <View>
      <Text>UseAmplify</Text>
      <TouchableOpacity
        style={{ width: 100, height: 100, backgroundColor: "tomato" }}
        onPress={deleteUser}
      >
        <Text>PRess</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UseAmplify;
