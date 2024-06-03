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
import Ionic from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import events from "../../libs/eventEmitter";
import { useMeStore, usePostStore } from "../../store";
import { DataStore } from "aws-amplify";
import { Comment } from "../../models";

const CommentScreen = ({ route, Navigation }) => {
  const { id, text, comments: commentList } = route.params || {}; // comment: commentArray <-- 이렇게 쓰면 commentArray라는 이름으로 쓸 수 있음.
  const navigation = useNavigation();
  const [comment, setComment] = useState("");
  // const [commentList, setCommentList] = useState(commentArray);
  const { addComment } = usePostStore();
  const { me } = useMeStore();
  const saveComment = async (text) => {
    const newComment = await DataStore.save(
      new Comment({ postID: id, userID: me.id, text: text })
    );
    return newComment;
  };

  // 댓글 좋아요 bb
  // const commentLikePressed = (id) => {
  //   const newLikePressed = commentList.map((comment) => {
  //     if (comment.id === id) {
  //       return {
  //         ...comment,
  //         commentLike:
  //       };
  //     }
  //     return comment;
  //   });
  //   setCommentList(newLikePressed);
  // saveCommentLike(id);
  // };

  // post에 댓글정보 전달.
  // const saveComment = () => {
  //   events.emit("saveComment", {
  //     comment,
  //     id,
  //     comment_id: commentList.length + 1,
  //   });
  // };

  // post에 댓글 좋아요정보 전달.
  // const saveCommentLike = (comment_id) => {
  //   events.emit("saveCommentLike", {
  //     comment_id,
  //     id,
  //   });
  // };

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
                    {comment.comment}
                  </Text>
                </View>
                <View>{/* 답글달기 */}</View>
                <TouchableOpacity
                  onPress={() => {
                    // commentLikePressed(comment.id);
                  }}
                  style={styles.touchable1}
                >
                  <AntDesign
                    name={comment.commentLike ? "heart" : "hearto"}
                    style={{
                      fontSize: 15,
                    }}
                  />
                  <Text>
                    {comment.commentLikeCount === 0
                      ? ""
                      : comment.commentLikeCount}
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
            onSubmitEditing={() => {
              saveComment(text).then((comment) =>
                addComment({ comment: comment, postId: id })
              );
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
