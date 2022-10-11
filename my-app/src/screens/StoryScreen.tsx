import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionic from "react-native-vector-icons/Ionicons";
import Antdesign from "react-native-vector-icons/AntDesign";

const StoryScreen = ({ route, navigation }) => {
  const { name } = route.params || {};
  const { image } = route.params || {};

  const data = [
    // 댓글 데이터 배열은 결국 반복적인 데이터일때만 map함수를 사용하면 된다.
  ];

  const [comment, setComment] = useState(""); // 댓글 데이터를 담을 state

  const [messageData, setMessageData] = useState(data); // 댓글 데이터배열을 담을 state

  // 추가된 메시지를 배열에 넣기
  const addMessage = () => {
    const newMessage = [
      ...messageData,
      {
        message: comment,
      },
    ];
    setMessageData(newMessage);
    setComment("");
    console.log(messageData);
  };

  useEffect(() => {
    console.log(messageData);
  }, [messageData]);

  const [heart, setHeart] = useState(false);
  const likePressed = () => {
    if (heart === false) {
      setHeart(true);
      alert("좋아요를 눌렀습니다.");
    } else {
      setHeart(false);
      alert("좋아요를 취소했습니다.");
    }
    setHeart(!heart);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />
      <View style={styles.view1}>
        <View style={{}}></View>
      </View>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Image source={image} style={styles.image1} />
        </View>
        <View style={styles.view4}>
          <Text style={{ color: "white", fontSize: 13, paddingLeft: 14 }}>
            {name}
          </Text>
          <TouchableOpacity style={{ position: "absolute", paddingLeft: 270 }}>
            <Feather
              name="more-horizontal"
              style={{ fontSize: 20, color: "white" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            // 9/29
            onPress={() => {
              return navigation.navigate("BottomTabScreen");
            }} // ------------------
            style={{ flexDirection: "row", justifyContent: "center" }}
          >
            <Ionic name="close" style={styles.ionic} />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{ width: "100%", height: 550, position: "absolute" }}
      />
      <View style={styles.view5}>
        <TextInput
          placeholder=" 메시지 보내기"
          placeholderTextColor="white"
          value={comment}
          onChangeText={(text) => {
            //text가 수정될 때마다 실행되는 함수
            setComment(text);
          }}
          onSubmitEditing={(event) => {
            // 엔터를 누르면 실행되는 함수
            addMessage();
          }}
          style={styles.textInput1}
        />
        <TouchableOpacity onPress={() => likePressed()}>
          <Antdesign name={heart ? "heart" : "hearto"} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="send" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "black",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  view1: {
    height: 3,
    width: "95%",
    borderWidth: 1,
    backgroundColor: "grey",
    position: "absolute",
    top: 18,
  },
  view2: {
    padding: 15,
    flexDirection: "row",
    position: "absolute",
    top: 12,
    left: 0,
    width: "90%",
  },
  view3: {
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  image1: {
    width: 33,
    height: 33,
    borderRadius: 100,
    backgroundColor: "orange",
  },
  view4: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  ionic: {
    color: "white",
    fontSize: 30,
    opacity: 0.6,
    alignItems: "center",
  },
  view5: {
    flexDirection: "row",
    alignItems: "center",
    bottom: 0,
    position: "absolute",
    left: 0,
    justifyContent: "space-around",
    marginVertical: 10,
    paddingLeft: 6,
  },
  textInput1: {
    borderRadius: 25,
    width: "80%",
    height: 40,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: "white",
    letterSpacing: 0.005,
    color: "white",
  },
  icon: { fontSize: 25, color: "white", paddingLeft: 5 },
});

export default StoryScreen;
