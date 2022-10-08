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
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import events from "../lib/eventEmiiter";

const CommentScreen = ({ route, Navigation }) => {
  const {
    postPersonImage,
    userId,
    comment,
    myId,
    mypostPersonImage,
    id,
    recomment: recommentArray,
  } = route.params || {}; // recomment: recommentArray <-- 이렇게 쓰면 recommentArray라는 이름으로 쓸 수 있음.
  const navigation = useNavigation();
  const [recomment, setRecomment] = useState("");
  const [recommentList, setRecommentList] = useState(recommentArray);

  useEffect(() => {
    console.log("댓글 배열 : ", recommentArray);
  }, [recommentArray]);

  // 댓글 좋아요 bb
  const recommentLikePressed = (id) => {
    const newLikePressed = recommentList.map((recomment) => {
      if (recomment.id === id) {
        return {
          ...recomment,
          recommentLike: !recomment.recommentLike,
          recommentLikeCount: recomment.recommentLike
            ? Number(recomment.recommentLikeCount) - 1
            : Number(recomment.recommentLikeCount) + 1,
        };
      }
      return recomment;
    });
    setRecommentList(newLikePressed);
    saveRecommentLike(id);
    console.log(newLikePressed);
  };

  // 댓글 추가관련 data state관리
  const addRecomment = () => {
    const newRecomment = [
      ...recommentList,
      {
        id: recommentList.length + 1,
        recomment: recomment,
        recommentLike: false,
        recommentLikeCount: 0,
      },
    ];
    setRecommentList(newRecomment);
    saveRecomment();
    setRecomment("");
  };

  // post에 댓글정보 전달.
  const saveRecomment = () => {
    events.emit("saveRecomment", {
      recomment,
      id,
      recomment_id: recommentList.length + 1,
    });
  };

  // post에 댓글 좋아요정보 전달.
  const saveRecommentLike = (recommnetId) => {
    events.emit("saveRecommentLike", {
      recomment_id: recommnetId,
      id,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.view1}>
        <TouchableOpacity
          onPress={() => {
            return navigation.navigate("BottomTabScreen");
          }}
        >
          <Ionic name="chevron-back-outline" style={{ fontSize: 30 }} />
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>댓글</Text>
        </View>
        <View>
          <Feather
            name="send"
            style={{
              fontSize: 23,
            }}
          />
        </View>
      </View>
      <ScrollView style={{ flex: 0.8 }}>
        <View style={styles.view2}>
          <View>
            {/* postPersonImage넣기 */}
            <Image source={postPersonImage} style={styles.postPersonImage} />
          </View>
          <View style={{ paddingBottom: 20, flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>{userId}</Text>
          </View>
          <View
            style={{
              flexShrink: 1,
            }}
          >
            <Text style={{ paddingLeft: 4, flexShrink: 1, paddingRight: 30 }}>
              {comment}
            </Text>
          </View>
        </View>
        <View style={{ flex: 0.8 }}>
          {recommentList.map((recomment) => {
            return (
              <View
                key={recomment.id}
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                }}
              >
                <View>
                  {/* postPersonImage넣기 */}
                  <Image
                    source={mypostPersonImage}
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
                  <Text style={{ fontWeight: "bold" }}>{myId}</Text>
                  <Text
                    style={{
                      paddingLeft: 3,
                      paddingRight: 10,
                      flexShrink: 1,
                    }}
                  >
                    {recomment.recomment}
                  </Text>
                </View>
                <View>{/* 답글달기 */}</View>
                <TouchableOpacity
                  onPress={() => {
                    recommentLikePressed(recomment.id);
                  }}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 13,
                    alignItems: "center",
                  }}
                >
                  <AntDesign
                    name={recomment.recommentLike ? "heart" : "hearto"}
                    style={{
                      fontSize: 15,
                    }}
                  />
                  <Text>
                    {recomment.recommentLikeCount === 0
                      ? ""
                      : recomment.recommentLikeCount}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View
        style={{
          // alignItems: "center",
          flex: 0.1,
          borderColor: "gray",
          borderTopWidth: 0.3,
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            paddingLeft: 5,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={mypostPersonImage}
            style={{
              width: 44,
              height: 44,
              borderRadius: 100,
            }}
          />
          <TextInput
            placeholder={`${myId}(으)로 댓글 달기...`}
            placeholderTextColor={"gray"}
            value={recomment}
            onChangeText={(text) => setRecomment(text)}
            onSubmitEditing={addRecomment}
            style={{
              borderWidth: 0.5,
              borderColor: "gray",
              width: "85%",
              height: 40,
              borderRadius: 20,
              paddingLeft: 10,
              left: 5,
            }}
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
});

export default CommentScreen;
