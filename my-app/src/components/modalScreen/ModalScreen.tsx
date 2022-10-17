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
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import events from "../../lib/eventEmiiter";

type ModalProps = {
  id: any;
  bookMark: boolean;
  favorite: boolean;
  follow: boolean;
};

const ModalScreen = ({ id, bookMark, favorite, follow }: ModalProps) => {
  return (
    <View
      style={{
        backgroundColor: "#424242",
        height: "60%",
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "30%",
          flexDirection: "row",
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={[styles.topbox]}
          onPress={() => {
            events.emit("shareModal");
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
            events.emit("linkModal");
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
            events.emit("save", id);
          }}
        >
          {bookMark === false ? (
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
            events.emit("qrModal");
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
              events.emit("favorite", id);
            }}
          >
            {favorite === false ? (
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
          <TouchableOpacity
            onPress={() => {
              events.emit("follow", id, follow);
            }}
          >
            {follow === true ? (
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
          </TouchableOpacity>
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
    </View>
  );
};

const styles = StyleSheet.create({
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
