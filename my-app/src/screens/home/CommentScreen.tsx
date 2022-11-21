import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useMeStore, usePostStore } from "../../store";
import { DataStore } from "aws-amplify";
import { Comment } from "../../models";
import { previousDay } from "date-fns";

const CommentScreen = ({ route, Navigation }) => {
  const { id: postId, text, comments } = route.params || {}; // comment: commentArray <-- 이렇게 쓰면 commentArray라는 이름으로 쓸 수 있음.
  const navigation = useNavigation();
  const [comment, setComment] = useState("");
  // const [commentList, setCommentList] = useState(commentArray);
  const { addComment, addCommentLikeUser } = usePostStore();
  const { me } = useMeStore();

  // params로 받아온 comment 관리하는 state.
  const [commentList, setCommentList] = useState(comments);

  const saveComment = async (text) => {
    // console.log(Object.keys(text).find((key) => key === "nativeEvent"));

    const newComment = await DataStore.save(
      new Comment({ postID: postId, userID: me.id, text: text, likes: [] })
    );
    return newComment;
  };

  const commentLike = (commentId) =>
    setCommentList((prev) => {
      return prev.map((item) => {
        if (item.id === commentId) {
          return {
            ...item,
            likes: item?.likes?.includes(me.id)
              ? item?.likes?.filter((id) => id !== me.id)
              : [...item.likes, me.id],
          };
        }
        return item;
      });
    });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 0.8 }}>
        <View style={styles.view2}>
          <View>
            {/* postPersonImage넣기 */}
            <Image
              source={{ uri: "https://picsum.photos/id/1/500/500" }}
              style={styles.postPersonImage}
            />
          </View>
          <View style={{ paddingBottom: 20, flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>Username</Text>
          </View>
          <View
            style={{
              flexShrink: 1,
            }}
          >
            <Text style={{ paddingLeft: 4, flexShrink: 1, paddingRight: 30 }}>
              {text}
            </Text>
          </View>
        </View>
        <View style={{ flex: 0.8 }}>
          {commentList.map((comment) => {
            return (
              <View key={comment.id} style={styles.view3}>
                <View>
                  {/* postPersonImage넣기 */}
                  <Image
                    source={{ uri: "https://picsum.photos/id/1/500/500" }}
                    style={{
                      width: 33,
                      height: 33,
                      borderRadius: 100,
                      backgroundColor: "orange",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </View>
                <View
                  style={{
                    paddingBottom: 5,
                    flexDirection: "row",
                    flexShrink: 1,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>MyUsername</Text>
                  <Text
                    style={{
                      paddingLeft: 3,
                      paddingRight: 10,
                      flexShrink: 1,
                    }}
                  >
                    {comment.text}
                  </Text>
                </View>
                <View>{/* 답글달기 */}</View>
                <TouchableOpacity
                  onPress={() => {
                    addCommentLikeUser({
                      comment_id: comment.id,
                      user_id: me.id,
                      post_id: postId,
                    });
                    commentLike(comment.id);
                  }}
                  style={styles.touchable1}
                >
                  <AntDesign
                    name={comment.likes.includes(me.id) ? "heart" : "hearto"}
                    style={{
                      fontSize: 15,
                    }}
                  />
                  <Text>
                    {comment?.likes?.length === 0 ? "" : comment?.likes?.length}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.view4}>
        <View style={styles.view5}>
          <Image
            source={{ uri: "https://picsum.photos/id/1/500/500" }}
            style={styles.image1}
          />
          <TextInput
            placeholder={`내 username(으)로 댓글 달기...`}
            placeholderTextColor={"gray"}
            value={comment}
            onChangeText={(text) => setComment(text)}
            onSubmitEditing={({ nativeEvent: { text } }) => {
              saveComment(text).then((comment) =>
                addComment({ comment, postId: postId })
              );
              setCommentList([...commentList, { text }]);
              setComment("");
            }}
            style={styles.textInput1}
          ></TextInput>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 0.2,
    borderBottomColor: "gray",
  },
  view2: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "flex-start",
    borderBottomColor: "gray",
    borderBottomWidth: 0.3,
  },
  postPersonImage: {
    width: 33,
    height: 33,
    borderRadius: 100,
    backgroundColor: "orange",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  view3: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  view4: {
    flex: 0.1,
    borderColor: "gray",
    borderTopWidth: 0.3,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  view5: {
    paddingLeft: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  image1: {
    width: 44,
    height: 44,
    borderRadius: 100,
  },
  textInput1: {
    borderWidth: 0.5,
    borderColor: "gray",
    width: "85%",
    height: 40,
    borderRadius: 20,
    paddingLeft: 10,
    left: 5,
  },
  touchable1: {
    position: "absolute",
    right: 10,
    top: 13,
    alignItems: "center",
  },
});

export default CommentScreen;
