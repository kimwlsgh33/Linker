import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { useMeStore, useModalStore, usePostStore } from "../../store";
import { DataStore, Storage } from "aws-amplify";
import { User, Post as PPost } from "../../models";
import MyPressable from "../MyPressable";
const { width } = Dimensions.get("window");

const Post = ({ post }: { post: PPost }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfpicSource, setUserProfpicSource] = useState(
    require("../../../assets/images/user.png")
  );
  const [images, setImages] = useState<string[]>([]);
  const { me, setMe, addBookMark } = useMeStore();
  const { setPosts, addLikeUser } = usePostStore();
  const { setModal, setIsFavorite } = useModalStore();

  const navigation = useNavigation();

  const getImage = async (key: string) => {
    return Storage.get(key, {
      download: false,
    });
  };

  useEffect(() => {
    console.log("likeUser", post.likes);
  }, [post.likes]);

  const getUser = async (userID: string) => {
    const user = await DataStore.query(User, userID);
    setUser(user);
    return user;
  };

  const getUserProfpic = async (userID: string) => {
    const user = await getUser(userID);
    if (user.profpic) {
      const profpic = await getImage(user.profpic);
      setUserProfpicSource({ uri: profpic });
    }
  };

  useEffect(() => {
    (async () => {
      getUserProfpic(post.userID);

      // const newImages = await Promise.all(
      //   post.imageUrls.map(async (image) => await getImage(image))
      // );
      const newImages = post.imageUrls;
      setImages(newImages);
    })();
  }, []);

  const goToComments = () => {
    navigation.navigate("Comment", {
      id: post.id,
      text: post.text,
      comments: post.Comments,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.userBar}>
        <View style={styles.userBarInfo}>
          <TouchableOpacity>
            <Image source={userProfpicSource} style={styles.userProfPic} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.userBarName}>{user?.nickname}</Text>
          </TouchableOpacity>
        </View>

        {me?.favorite?.includes(post.userID) && (
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
        )}
        <TouchableOpacity
          onPress={() => {
            setModal(true);
            // setId(data.id);
            // setUserId(data.userId);
          }}
        >
          <Feather name="more-horizontal" style={{ fontSize: 20 }} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={images}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item: image }) => (
          <Image source={{ uri: image }} style={{ width, height: 380 }} />
        )}
        horizontal
        contentContainerStyle={{ width: width * images.length }}
        pagingEnabled
      />
      <View style={styles.postInfo}>
        <View style={styles.iconBar}>
          <View style={styles.leftIcons}>
            <TouchableOpacity
              onPress={() => {
                addLikeUser({ user_id: me.id, post_id: post.id });
              }}
            >
              <AntDesign
                name={post.likes?.includes(me.id) ? "heart" : "hearto"}
                style={{
                  paddingRight: 10,
                  fontSize: 25,
                  color: post.likes?.includes(me.id) ? "red" : "black",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather
                onPress={goToComments}
                name="message-circle"
                style={{ fontSize: 25, paddingRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="send" style={{ fontSize: 25, paddingRight: 10 }} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              addBookMark(post.id);
            }}
          >
            <FontAwesome
              name={me?.bookMark?.includes(post.id) ? "bookmark" : "bookmark-o"}
              style={{
                fontSize: 25,
              }}
            />
          </TouchableOpacity>
        </View>
        {post.likes?.length > 0 && (
          <Text style={{ fontWeight: "bold" }}>
            좋아요 {post.likes.length}개
          </Text>
        )}

        <View style={styles.postTextView}>
          <Text style={{ fontWeight: "bold" }}>{user?.nickname}</Text>
          <Text style={styles.postText}>{post.text}</Text>
        </View>

        {post.Comments?.length > 1 && (
          <TouchableOpacity onPress={goToComments}>
            <Text style={styles.commentsOpener}>
              {`댓글 ${post.Comments.length} 개 모두 보기`}
            </Text>
          </TouchableOpacity>
        )}
        {post.Comments?.length > 0 && (
          <TouchableOpacity onPress={goToComments} style={styles.comments}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", marginRight: 5 }}>
                {user?.nickname}
              </Text>
              <Text>{post.Comments[0].text}</Text>
            </View>
            <View style={{ justifyContent: "center" }}>
              <TouchableOpacity
              // onPress={() => {
              //   addRecommentLike({
              //     id: data.id,
              //     recomment_id: data.recomment[0]?.id,
              //   });
              // }}
              >
                <AntDesign
                  name={post.Comments[0].likes ? "heart" : "hearto"}
                  color={post.Comments[0].likes ? "red" : "black"}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  userBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    height: 60,
  },
  userBarInfo: { flexDirection: "row", alignItems: "center" },
  userProfPic: { width: 40, height: 40, borderRadius: 20 },
  userBarName: { fontSize: 15, fontWeight: "bold", marginLeft: 10 },
  test: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  postInfo: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  iconBar: {
    flexDirection: "row",
  },
  leftIcons: {
    flex: 1,
    flexDirection: "row",
  },
  commentsOpener: {
    fontWeight: "bold",
    color: "gray",
    letterSpacing: 0.001,
  },
  view4: {
    paddingTop: 4,
    height: 30,
    flexShrink: 1,
    justifyContent: "center",
  },
  postTextView: { flexDirection: "row" },
  postText: { paddingLeft: 5, paddingRight: 5, flexShrink: 1 },
  comments: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Post;
