import { Link, useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
  Dimensions,
  Linking,
  Animated,
  Easing,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useMeStore, useModalStore, usePostStore } from "../../store";
import { DataStore, Storage } from "aws-amplify";
import { User, Post as PPost } from "../../models";
import DoubleClick from "react-native-double-tap";

const { width } = Dimensions.get("window");

const Post = ({ post }: { post: PPost }) => {
  // 포스트를 두번 누르면 하트 애니메이션이 들어가는 기능. 좋아요도 눌리고.
  const toggleHeart = (user_id: string) => {
    if (post.likes.includes(user_id)) {
      post.likes.filter((id) => id !== user_id);
    } else {
      [...post.likes, user_id];
    }
    fillHeart();
  };

  const opacity = useRef(new Animated.Value(0)).current;

  const fillHeart = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        easing: Easing.quad,
        useNativeDriver: true,
      }),
      Animated.delay(600),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };
  // ===================================================

  const [user, setUser] = useState<User | null>(null);
  const [userProfpicSource, setUserProfpicSource] = useState(
    require("../../../assets/images/user.png")
  );
  const [images, setImages] = useState<string[]>([]);
  const { me, setMe, addBookMark } = useMeStore();
  const { setPosts, addLikeUser, addCommentLikeUser, addClick } =
    usePostStore();
  const {
    setModal: setPmodal,
    setIsFavorite,
    modal: Pmodal,
    isFavorite,
  } = useModalStore();

  const navigation = useNavigation();

  const getImage = async (key: string) => {
    return Storage.get(key, {
      download: false,
    });
  };

  const getPost = async () => {
    const newPost = await DataStore.query(PPost);
    return newPost;
  };

  useEffect(() => {
    getPost();
  }, []);

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
            <Text style={styles.userBarName}>{me.nickname}</Text>
          </TouchableOpacity>
        </View>
        {/* ============================================== */}
        {/* 즐겨찾기 */}
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
        {/* ================================================ */}
        {/* 더보기 창 */}
        <TouchableOpacity
          onPress={() => {
            setPmodal(Pmodal);
            // setId(data.id);
            // setUserId(data.userId);
          }}
        >
          <Feather name="more-horizontal" style={{ fontSize: 20 }} />
        </TouchableOpacity>
      </View>
      {/* ================================================= */}
      {/* 이미지 */}
      <View style={{ justifyContent: "center" }}>
        <DoubleClick
          doubleTap={() => {
            toggleHeart(me?.id);
            addLikeUser({ post_id: post.id, user_id: me?.id });
          }}
          delay={200}
        >
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
        </DoubleClick>
        <Animated.View
          style={{
            position: "absolute",
            opacity: opacity,
          }}
        >
          {post.likes.includes(me.id) ? (
            <AntDesign name="heart" size={50} color={"black"}></AntDesign>
          ) : (
            <AntDesign name="hearto" size={50} color={"black"}></AntDesign>
          )}
        </Animated.View>
      </View>

      <View style={styles.postInfo}>
        <View style={[styles.iconBar]}>
          <View style={styles.Icons}>
            {/* ============================================ */}
            {/* 좋아요 */}
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
            {/* ============================================== */}
            {/* 댓글 */}
            <TouchableOpacity>
              <Feather
                onPress={goToComments}
                name="message-circle"
                style={{ fontSize: 25, paddingRight: 10 }}
              />
            </TouchableOpacity>
          </View>
          {/* ============================================== */}
          {/* 링크 버튼 */}
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              Linking.openURL(post.link);
              addClick({ post_id: post.id, user_id: me?.id });
            }}
          >
            <View style={[styles.linkButton, { flexDirection: "column" }]}>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  press to link
                </Text>
                {post?.clicked?.length > 0 && (
                  <Text> + {post?.clicked?.length}</Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
          {/* =============================================== */}
          {/* 공유 */}
          <View style={styles.Icons}>
            <TouchableOpacity>
              <Feather name="send" style={{ fontSize: 25, paddingRight: 10 }} />
            </TouchableOpacity>
            {/* ================================================= */}
            {/* 북마크 */}
            <TouchableOpacity
              onPress={() => {
                addBookMark(post.id);
              }}
            >
              <FontAwesome
                name={
                  me?.bookMark?.includes(post.id) ? "bookmark" : "bookmark-o"
                }
                style={{
                  fontSize: 25,
                }}
              />
            </TouchableOpacity>
          </View>
          {/* =============================================== */}
        </View>
        {/* 좋아요 개수 */}

        {post.likes?.length > 0 && (
          <Text style={{ fontWeight: "bold" }}>
            좋아요 {post.likes.length}개
          </Text>
        )}

        <View style={styles.postTextView}>
          <Text style={{ fontWeight: "bold" }}>{user?.nickname}</Text>
          <Text style={styles.postText}>{post.text}</Text>
        </View>
        {/* ================================================ */}
        {/* 댓글 갯수 */}
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
            {/* =============================================== */}
            {/* 댓글 좋아요 */}
            <View style={{ justifyContent: "center" }}>
              <TouchableOpacity
                onPress={() => {
                  addCommentLikeUser({
                    user_id: me.id,
                    post_id: post.id,
                    comment_id: post.Comments[0].id,
                  });
                }}
              >
                <AntDesign
                  name={
                    post.Comments[0].likes.includes(me.id) ? "heart" : "hearto"
                  }
                  color={
                    post.Comments[0].likes.includes(me.id) ? "red" : "black"
                  }
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
  userBarName: { fontSize: 15, fontWeight: "bold", paddingLeft: 10 },
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
    justifyContent: "space-between",
  },
  Icons: {
    flexDirection: "row",
  },
  linkButton: {
    backgroundColor: "#dcdcdc",
    alignItems: "center",
    borderRadius: 10,
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
