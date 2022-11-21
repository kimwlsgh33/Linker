import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAweSome5 from "react-native-vector-icons/FontAwesome5";
import Evilcons from "react-native-vector-icons/EvilIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Orcticon from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useMeStore, useModalStore, usePostStore } from "../../store";

type ModalProps = {
  id: any;
};

const ModalScreen = () => {
  const { me, setMe, addBookMark, favorite } = useMeStore();
  const { posts, setPosts } = usePostStore();
  const {
    setModal,
    setShareModal,
    setLinkModal,
    setBookMark,
    setQrModal,
    setFavorite,
    setIsFavorite,
    setFollow,
    setIsFollowed,
  } = useModalStore();

  const shareModalState = () => {
    setModal(false);
    setShareModal(true);
  };

  const linkModalState = () => {
    setModal(false);
    setLinkModal(true);
  };

  const save = (id) => {
    setModal(false);
    addBookMark(id);
  };

  const qrModalState = () => {
    setModal(false);
    setQrModal(true);
  };

  const favoriteState = (id) => {
    setModal(false);
    favorite(id);
  };

  // const followState = (userId) => {
  //   following(userId);
  //   setModal(false);
  //   setFollow(true);
  // };

  return (
    <>
      {posts.map((post) => {
        <View style={styles.wholeContainer}>
          <View style={styles.secContainer}>
            <TouchableOpacity
              style={[styles.topbox]}
              onPress={() => {
                shareModalState();
              }}
            >
              <View>
                <Entypo name="share-alternative" size={25} color="#fff" />
                <Text style={styles.textColor}>공유</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.topbox]}
              onPress={() => {
                linkModalState();
              }}
            >
              <View>
                <AntDesign name="link" size={25} color="#fff" />
                <Text style={styles.textColor}>링크</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.topbox]}
              onPress={() => {
                save(post.id);
              }}
            >
              {me?.bookMark.includes(post.id) === false ? (
                <View>
                  <Feather name="bookmark" size={25} color="#fff" />
                  <Text style={styles.textColor}>저장</Text>
                </View>
              ) : (
                <View>
                  <Orcticon name="bookmark-slash" size={25} color="#fff" />
                  <Text style={styles.textColor}>취소</Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.topbox]}
              onPress={() => {
                qrModalState();
              }}
            >
              <View>
                <Ionicons
                  name="qr-code-outline"
                  size={25}
                  color="#fff"
                  style={{ marginLeft: 10 }}
                />
                <Text style={styles.textColor}>QR코드</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              height: "27%",
              alignItems: "center",
            }}
          >
            <View
              style={[
                styles.centerBottomBox,
                {
                  marginBottom: 3,
                },
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  favorite(post.userID);
                }}
              >
                {me?.favorite?.includes(post.userID) === false ? (
                  <View style={{ flexDirection: "row" }}>
                    <AntDesign
                      name="star"
                      size={25}
                      color="#fff"
                      style={{ marginLeft: 10 }}
                    />
                    <Text style={[styles.textColor, { marginLeft: 10 }]}>
                      즐겨찾기에 추가
                    </Text>
                  </View>
                ) : (
                  <View style={{ flexDirection: "row" }}>
                    <MaterialCommunityIcons
                      name="star-off-outline"
                      size={25}
                      color="#fff"
                      style={{ marginLeft: 10 }}
                    />
                    <Text style={[styles.textColor, { marginLeft: 10 }]}>
                      즐겨찾기에서 삭제
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.centerBottomBox}>
              {/* <TouchableOpacity
                onPress={() => {
                  // followState(post.userID);
                }}
              >
                {me.following.includes(post.userID) === true ? (
                  <View style={{ flexDirection: "row" }}>
                    <AntDesign
                      name="deleteuser"
                      size={25}
                      color="#fff"
                      style={{ marginLeft: 10 }}
                    />
                    <Text style={[styles.textColor, { marginLeft: 10 }]}>
                      팔로우 취소
                    </Text>
                  </View>
                ) : (
                  <View style={{ flexDirection: "row" }}>
                    <SimpleLineIcons
                      name="user-follow"
                      size={25}
                      color="#fff"
                      style={{ marginLeft: 10 }}
                    />
                    <Text style={[styles.textColor, { marginLeft: 10 }]}>
                      팔로우
                    </Text>
                  </View>
                )}
              </TouchableOpacity> */}
            </View>
          </View>
          <View style={{ width: "100%", height: "27%", alignItems: "center" }}>
            <View style={[styles.centerBottomBox, { marginBottom: 3 }]}>
              <FontAweSome5
                name="random"
                size={25}
                color="#fff"
                style={{ marginLeft: 10 }}
              />
              <Text style={[styles.textColor, { marginLeft: 10 }]}>
                이 게시물과 유사한 게시물
              </Text>
            </View>
            <View style={[styles.centerBottomBox, { marginBottom: 3 }]}>
              <Evilcons
                name="sc-odnoklassniki"
                size={25}
                color="#fff"
                style={{ marginLeft: 10 }}
              />
              <Text style={[styles.textColor, { marginLeft: 10 }]}>숨기기</Text>
            </View>
            <View style={styles.centerBottomBox}>
              <MaterialIcons
                name="report"
                size={25}
                color="#fff"
                style={{ marginLeft: 10 }}
              />
              <Text style={[styles.textColor, { marginLeft: 10 }]}>신고</Text>
            </View>
          </View>
        </View>;
      })}
    </>
  );
};

const styles = StyleSheet.create({
  wholeContainer: {
    backgroundColor: "#424242",
    height: "60%",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  secContainer: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  topbox: {
    backgroundColor: "#585858",
    width: "20%",
    height: "70%",
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  centerBottomBox: {
    backgroundColor: "#585858",
    width: "90%",
    height: "40%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  textColor: {
    color: "white",
    marginTop: 5,
    fontWeight: "bold",
  },
});
export default ModalScreen;
