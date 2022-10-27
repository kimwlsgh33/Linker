import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Post = () => {
  const navigation = useNavigation();
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
              source={data.postPersonImage}
              style={{ width: 40, height: 40, borderRadius: 100 }}
            />
            <View style={{ paddingLeft: 5 }}>
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {data.userId}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          {data.favorite ? (
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
              setId(data.id);
              setUserId(data.userId);
            }}
          >
            <Feather name="more-horizontal" style={{ fontSize: 20 }} />
          </Pressable>
        </View>
      </View>

      <View style={styles.view2}>
        <Image source={data.postImage} style={{ width: "100%", height: 380 }} />
      </View>
      <View style={styles.view3}>
        <TouchableOpacity
          onPress={() => {
            likePressed(data.id); // likePressed 함수를 호출해줌. 인자로 data의 id를 넣어줌.
          }}
        >
          <AntDesign
            name={data.isLiked ? "heart" : "hearto"}
            style={{
              paddingRight: 10,
              fontSize: 25,
              color: data.isLiked ? "red" : "black",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            onPress={() => {
              navigation.navigate("Comment", {
                user: data.user,
                id: data.id,
                text: data.text,
                // userId: data.userId,
                // postPersonImage: data.postPersonImage,
                // me: me, <==== context
                comment: data.comment,
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
            bookMarkPressed(data.id);
          }}
        >
          <FontAwesome
            name={data.bookMark ? "bookmark" : "bookmark-o"}
            style={{
              fontSize: 25,
              position: "absolute",
              left: 250,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ paddingLeft: 5 }}>
        <Text style={{ fontWeight: "bold" }}>좋아요 {data.likes}개</Text>
      </View>
      <View style={{ flexDirection: "row", paddingLeft: 5 }}>
        <Text style={{ fontWeight: "bold" }}>{data.userId}</Text>
        <Text style={{ paddingLeft: 5, paddingRight: 5, flexShrink: 1 }}>
          {data.comment}
        </Text>
      </View>

      <View style={styles.view3}>
        {data.recomment[0]?.recomment == null ? null : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Comment", {
                comment: data.comment, //data의 comment를 인자로 넘겨줌. --> 누른 친구의 comment
                userId: data.userId, // data의 userId를 인자로 넘겨줌.
                postPersonImage: data.postPersonImage, // data의 postPersonImage를 인자로 넘겨줌.
                myId: myId, // myId를 인자로 넘겨줌.
                mypostPersonImage: mypostPersonImage, // mypostPersonImage를 인자로 넘겨줌.
                id: data.id, // data의 id를 인자로 넘겨줌.
                recomment: data.recomment, // data의 recomment를 인자로 넘겨줌.
              });
            }}
          >
            <Text style={styles.text1}>
              {data.recommentCount == 0
                ? null
                : `댓글 ${data.recommentCount} 개 모두 보기`}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.view4}>
        {data.recomment[0]?.recomment == null ? null : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Comment", {
                comment: data.comment,
                userId: data.userId,
                postPersonImage: data.postPersonImage,
                myId: myId,
                mypostPersonImage: mypostPersonImage,
                id: data.id,
                recomment: data.recomment,
              });
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>
                {data.recomment[0]?.recomment == null ? null : data.userId}
              </Text>
              <View style={styles.view5}>
                <Text>{data.recomment[0]?.recomment}</Text>
              </View>
              <View style={{ justifyContent: "center" }}>
                <TouchableOpacity
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
                </TouchableOpacity>
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
