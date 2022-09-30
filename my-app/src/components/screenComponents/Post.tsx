import React, { useState, useCallback } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Post = () => {
  const navigation = useNavigation(); // 네비게이션을 쓰기 위한 두가지 방법 중 하나 hook
  const postInfo = [
    // postInfo라는 배열에 객체(데이터)를 넣어줌.
    {
      id: 1,
      userId: "nieoodie",
      postPersonImage: require("../../../assets/images/jinho.jpeg"),
      postImage: require("../../../assets/images/pizza.jpeg"),
      likes: 0,
      isLiked: false,
      bookMark: false,
      comment: "먹고싶다",
    },
    {
      id: 2,
      userId: "kwonwoo",
      postPersonImage: require("../../../assets/images/woo.jpeg"),
      postImage: require("../../../assets/images/kitty.jpeg"),
      likes: 0,
      isLiked: false,
      bookMark: false,
      comment: "먹고싶다",
    },
    {
      id: 3,
      userId: "hyunsu",
      postPersonImage: require("../../../assets/images/hyunsu.jpeg"),
      postImage: require("../../../assets/images/woo.jpeg"),
      likes: 0,
      isLiked: false,
      bookMark: false,
      comment: "먹고싶다",
    },
    {
      id: 4,
      userId: "jongin",
      postPersonImage: require("../../../assets/images/jongin.jpeg"),
      postImage: require("../../../assets/images/kitty.jpeg"),
      likes: 0,
      isLiked: false,
      bookMark: false,
      comment: "먹고싶다",
    },
  ];
  const [data, setData] = useState(postInfo); // useState를 이용해 data라는 state를 만들어줌. postInfo를 넣어줌.
  const likePressed = useCallback(
    // likePressed라는 함수를 usecallback을 이용해 만들어줌.
    (id) => {
      // id를 인자로 받아옴.
      const newDatas = data.map((data) => {
        // data라는 state를 map을 이용해 돌려줌.
        if (data.id === id) {
          // 만약 data의 id가 인자로 받아온 id와 같다면
          return {
            ...data, // 기존의 데이터를 그대로 가져옴.
            isLiked: !data.isLiked, // isLiked를 반대로 바꿔줌.
            likes: data.isLiked ? data.likes - 1 : data.likes + 1, // isLiked(현재 false)가 true면 -1, false면 +1
          };
        }
        return data; // 그 외의 경우는 그대로 data를 반환.
      });
      setData(newDatas); // setData를 이용해 state를 변경해줌.
    },
    [data, setData] // data와 setData를 의존성 배열에 넣어줌.
  );
  const bookMarkPressed = useCallback(
    // 위와 같은 방식으로 북마크를 눌렀을 때의 함수를 만들어줌^^
    (id) => {
      const newDatas = data.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            bookMark: !data.bookMark,
          };
        }
        return data;
      });
      setData(newDatas);
    },
    [data, setData]
  );

  return (
    <View style={{ paddingBottom: 40 }}>
      {data.map((data) => {
        return (
          <View
            key={data.id} // key를 이용해 각각의 데이터를 구분해줌.
            style={{
              paddingBottom: 10,
              borderBottomColor: "gray",
              borderBottomWidth: 0.1,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
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
              <Feather name="more-horizontal" style={{ fontSize: 20 }} />
            </View>
            <View
              style={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={data.postImage}
                style={{ width: "100%", height: 380 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 5,
                paddingLeft: 5,
              }}
            >
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
              <TouchableOpacity key={data.id}>
                <Feather
                  onPress={() => {
                    navigation.navigate("Comment", {
                      // Comment라는 이름의 스크린으로 이동해줌.
                      comment: data.comment, //data의 comment를 인자로 넘겨줌.
                      userId: data.userId, // data의 userId를 인자로 넘겨줌.
                      postPersonImage: data.postPersonImage, // data의 postPersonImage를 인자로 넘겨줌.
                    });
                  }}
                  name="message-circle"
                  style={{ fontSize: 25, paddingRight: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather
                  name="send"
                  style={{ fontSize: 25, paddingRight: 10 }}
                />
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
              <Text style={{ paddingLeft: 5 }}>{data.comment}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
