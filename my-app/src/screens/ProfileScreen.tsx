import React, { useState, useEffect } from "react";
import {
  ImageSourcePropType,
  SafeAreaView,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal as DefaultModal,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileBody from "../components/ProfileBody";
import ProfileTopTab from "../components/ProfileTopTab";
import { Modal } from "../components/Modal";
import events from "../lib/eventEmitter";

const ProfileScreen = () => {
  const userInfo = {
    accountName: "userId33",
    name: "user_name",
    post: 123,
    follower: 456,
    following: 789,
    profileImage: require("../../assets/images/profile.png"),
  };

  const navigation = useNavigation();
  const [data, setData] = useState(userInfo);
  const [Visible, setVisible] = useState(false); // modal창 갯수만큼 useState를 만들어줘야함
  const [Visible2, setVisible2] = useState(false);
  const [Visible3, setVisible3] = useState(false);

  const onEdit = ({
    accountName,
    name,
  }: {
    accountName: string;
    name: string;
  }) => {
    console.log("Edit Profile");
    setData((data) => {
      return {
        ...data,
        accountName: accountName,
        name: name,
      };
    });
  };

  const onDelete = ({
    profileImage,
  }: {
    profileImage: ImageSourcePropType;
  }) => {
    console.log("Edit Image");
    setData((data) => {
      return {
        ...data,
        profileImage: profileImage,
      };
    });
  };

  useEffect(() => {
    events.addListener("saveEdit", onEdit);
    events.addListener("deleteImage", onDelete);
    return () => {
      events.removeListener("saveEdit");
      events.removeListener("deleteImage");
    };
  }, []);

  return (
    <SafeAreaView key={data.accountName}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <Modal
              Visible={Visible}
              setVisible={setVisible}
              activator={({ handleOpen }) => (
                <Pressable
                  onPress={() => {
                    handleOpen();
                  }}
                  style={({ pressed }) => [
                    {
                      opacity: pressed ? 0.2 : 1,
                    },
                  ]}
                >
                  <Text
                    style={{
                      fontFamily: "GangwonEduAllBold",
                      fontSize: 23,
                    }}
                  >
                    {data.accountName}
                    <Feather name="chevron-down" style={{ fontSize: 16 }} />
                  </Text>
                </Pressable>
              )}
            >
              <View style={styles.modal}>
                <View style={{ flexDirection: "row" }}>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.2 : 1,
                        width: "100%",
                      },
                    ]}
                  >
                    <View>
                      <Image
                        style={styles.modalIcon1}
                        source={data.profileImage}
                      />
                    </View>
                    <Text style={styles.modalText}>{data.accountName}</Text>
                  </Pressable>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate("Login");
                      setVisible(false);
                    }}
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.2 : 1,
                        width: "100%",
                      },
                    ]}
                  >
                    <View style={styles.modalIcon2}>
                      <Entypo name="plus" style={{ fontSize: 20, color: "#000" }}/>
                    </View>
                    <Text style={styles.modalText}>계정 추가</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </Pressable>
          <View>
            <Modal
              Visible={Visible2}
              setVisible={setVisible2}
              activator={({ handleOpen }) => (
                <Pressable
                  onPress={() => {
                    handleOpen();
                  }}
                  style={({ pressed }) => [
                    {
                      opacity: pressed ? 0.2 : 1,
                    },
                  ]}
                >
                  <View>
                    <FontAwesome
                      name="plus-square-o"
                      style={{
                        fontSize: 22,
                        left: 90,
                      }}
                    />
                  </View>
                </Pressable>
              )}
            >
              <View style={styles.modal2}>
                <View>
                  <Icon
                    name="ios-remove-outline"
                    size={50}
                    color="gray"
                    style={{ top: -15, left: 170 }}
                  />
                  <Text style={styles.modalText2}>만들기</Text>
                  <View style={styles.modalBar}></View>
                  <Pressable
                    onPress={() => {
                      navigation.navigate("Story");
                      setVisible2(false);
                    }}
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.2 : 1,
                      },
                    ]}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Icon
                        name="ios-play-circle-outline"
                        size={25}
                        color="black"
                        style={{ left: 10, top: -10 }}
                      />
                      <Text style={styles.modalText2_1}>릴스</Text>
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      navigation.navigate("Story");
                      setVisible2(false);
                    }}
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.2 : 1,
                        top: 20,
                      },
                    ]}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <MaterialCommunityIcons
                        name="grid"
                        size={22}
                        color="black"
                        style={{ left: 10, top: -10 }}
                      />
                      <Text style={styles.modalText2_2}>게시물</Text>
                    </View>
                  </Pressable>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.2 : 1,
                        top: 40,
                      },
                    ]}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <MaterialCommunityIcons
                        name="plus-circle-outline"
                        size={25}
                        color="black"
                        style={{ left: 10, top: -10 }}
                      />
                      <Text style={styles.modalText2_1}>스토리</Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
          <View>
            <Modal
              Visible={Visible3}
              setVisible={setVisible3}
              activator={({ handleOpen }) => (
                <Pressable
                  onPress={() => {
                    handleOpen();
                  }}
                  style={({ pressed }) => [
                    {
                      opacity: pressed ? 0.2 : 1,
                    },
                  ]}
                >
                  <Icon
                    name="menu-outline"
                    style={{
                      fontSize: 29,
                    }}
                  />
                </Pressable>
              )}
            >
              <View style={styles.modal2}>
                <Icon
                  name="ios-remove-outline"
                  size={50}
                  color="gray"
                  style={{ top: -15, left: 170 }}
                />
                <View style={{ marginTop: 10 }}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate("Story");
                      setVisible3(false);
                    }}
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.2 : 1,
                      },
                    ]}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Icon
                        name="ios-settings-sharp"
                        size={25}
                        color="black"
                        style={{ left: 10, top: -10 }}
                      />
                      <Text style={styles.modalText2_1}>설정</Text>
                    </View>
                  </Pressable>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.2 : 1,
                        top: 20,
                      },
                    ]}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <MaterialCommunityIcons
                        name="clock-time-eight-outline"
                        size={25}
                        color="black"
                        style={{ left: 10, top: -10 }}
                      />
                      <Text style={styles.modalText2_1}>내 활동</Text>
                    </View>
                  </Pressable>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.2 : 1,
                        top: 40,
                      },
                    ]}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Feather
                        name="star"
                        size={25}
                        color="black"
                        style={{ left: 10, top: -10 }}
                      />
                      <Text style={styles.modalText2_1}>즐겨찾기</Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </View>
        <ProfileBody data={data} />
        <ProfileTopTab />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    padding: 15,
  },
  modal: {
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalIcon1: {
    marginTop: 30,
    marginLeft: 15,
    width: 45,
    height: 45,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: "rgba(0,0,0,0.3)",
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  modalIcon2: {
    marginLeft: 15,
    width: 45,
    height: 45,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 14,
    top: -30,
    left: 70,
    fontFamily: "GangwonEduAllBold",
  },
  modal2: {
    backgroundColor: "white",
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalBar: {
    borderWidth: 0.3,
    width: "100%",
    opacity: 0.3,
    top: -20,
  },
  modalText2: {
    top: -30,
    left: 177,
    fontFamily: "GangwonEduAllBold",
  },
  modalText2_1: {
    left: 20,
    top: -6,
    fontFamily: "GangwonEduAllBold",
  },
  modalText2_2: {
    left: 23,
    top: -8,
    fontFamily: "GangwonEduAllBold",
  },
});

export default ProfileScreen;
