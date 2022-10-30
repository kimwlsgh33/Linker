import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { useMeStore, useModalStore, usePostStore } from "../../store";
import { DataStore, Storage } from "aws-amplify";
import { User, Post as PPost, Comment } from "../../models";
import { id } from "date-fns/locale";

const Post = ({ post }: { post: PPost }) => {
  const { me, setMe, addBookMark } = useMeStore();
  const { posts, setPosts, addLikeUser } = usePostStore();

  const navigation = useNavigation();

  const {
    setModal,

    setIsFavorite,
  } = useModalStore();

  const getUser = async () => {
    const newUser = await DataStore.query(User, (user) =>
      user.id("eq", "suntaliquaadipi")
    );
    return newUser[0];
  };

  // const getPost = async () => {
  //   const newPost = await DataStore.query(PPost, (post) =>
  //     post.link("eq", "inception.naver.com")
  //   );
  //   return newPost;
  // };

  const [image, setImage] = useState("");

  const getImage = async (key: string) => {
    return Storage.get(key, {
      download: false,
    });
  };

  useEffect(() => {
    console.log(me);
  }, [me]);
  console.log("hi ");

  useEffect(() => {
    (async () => {
      const newImage = await getImage(post.imageUri);
      setImage(newImage);
    })();
  }, []);

  return (
    <View
      style={{
        paddingBottom: 10,
        borderBottomColor: "gray",
        borderBottomWidth: 0.1,
      }}
    >
      <View style={styles.view1}>
        <TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={{ uri: image }}
              style={{ width: 40, height: 40, borderRadius: 100 }}
            />
            <View style={{ paddingLeft: 5 }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {post.userID}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          {me?.favorite?.includes(post.userID) ? (
            <Pressable
              onPress={() => {
                setIsFavorite(true);
              }}
            >
              <Ionicons
                name="star-half"
                style={{ fontSize: 20, marginRight: 10 }}
              />
            </Pressable>
          ) : null}
          <Pressable
            onPress={() => {
              setModal(true);
              // setId(data.id);
              // setUserId(data.userId);
            }}
          >
            <Feather name="more-horizontal" style={{ fontSize: 20 }} />
          </Pressable>
        </View>
      </View>

      <View style={styles.view2}>
        <Image source={{}} style={{ width: "100%", height: 380 }} />
      </View>
      <View style={styles.view3}>
        <TouchableOpacity
          onPress={() => {
            addLikeUser({ user_id: me.id, post_id: post.id });
          }}
        >
          <AntDesign
            name={post?.likes?.includes(me.id) ? "heart" : "hearto"}
            style={{
              paddingRight: 10,
              fontSize: 25,
              color: post?.likes?.includes(me.id) ? "red" : "black",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            onPress={() => {
              navigation.navigate("Comment", {
                text: post?.text,
                id: post?.id,
                comments: Comment[post?.id],
              });
            }}
            name="message-circle"
            style={{ fontSize: 25, paddingRight: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="send" style={{ fontSize: 25, paddingRight: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addBookMark(post.id);
          }}
        >
          <FontAwesome
            name={me?.bookMark?.includes(post.id) ? "bookmark" : "bookmark-o"}
            style={{
              fontSize: 25,
              position: "absolute",
              left: 250,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ paddingLeft: 5 }}>
        <Text style={{ fontWeight: "bold" }}>
          좋아요 {post.likes?.length}개
        </Text>
      </View>
      <View style={{ flexDirection: "row", paddingLeft: 5 }}>
        <Text style={{ fontWeight: "bold" }}>{post.userID}</Text>
        <Text style={{ paddingLeft: 5, paddingRight: 5, flexShrink: 1 }}>
          {post.text}
        </Text>
      </View>

      <View style={styles.view3}>
        {post?.Comments?.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Comment", {
                text: post?.text,
                id: post?.id,
                comments: Comment[post?.id],
              });
            }}
          >
            <Text style={styles.text1}>
              {post?.Comments?.length == 0
                ? null
                : `댓글 ${post?.Comments?.length} 개 모두 보기`}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.view4}>
        {post?.Comments?.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Comment", {
                text: post?.text,
                id: post?.id,
                comments: Comment[post?.id],
              });
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>
                {post?.Comments[0]?.text == null ? null : post.userID}
              </Text>
              <View style={styles.view5}>
                <Text>{post?.Comments[0]?.text}</Text>
              </View>
              <View style={{ justifyContent: "center" }}>
                {/* <TouchableOpacity
                  onPress={() => {
                    addRecommentLike({
                      id: data.id,
                      recomment_id: data.recomment[0]?.id,
                    });
                  }}
                >
                  <AntDesign
                    name={data.recomment[0]?.recommentLike ? "heart" : "hearto"}
                    color={data.recomment[0]?.recommentLike ? "red" : "black"}
                    style={{ paddingHorizontal: 7 }}
                  />
                </TouchableOpacity> */}
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    height: 60,
  },

  view2: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  view3: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingLeft: 5,
  },
  text1: {
    fontWeight: "bold",
    color: "gray",
    letterSpacing: 0.001,
  },
  view4: {
    paddingLeft: 5,
    paddingTop: 4,
    height: 30,
    flexShrink: 1,
    justifyContent: "center",
  },
  view5: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
});

export default Post;
