import React, { useState, useEffect } from "react";
import { StyleSheet, Modal, Platform, View, Text, Pressable, Image,ImageSourcePropType, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import events from "../../libs/eventEmitter";

export const EditImage = ({ route }) => {
  const { profileImage } = route?.params || {};
  const [image, setImage] = useState(profileImage); // image가 저장되는 상태
  const [response, setResponse] = useState(null); // 갤러리image가 저장되는 상태
  const [data, setData] = useState(profileImage);

  const navigation = useNavigation();

  const onChange = ({
    profileImage,
  }: {
    profileImage: ImageSourcePropType;
  }) => {
    setData((data) => {
      return {
        ...data,
        profileImage: profileImage,
      };
    });
  };

  useEffect(() => {
    events.addListener("dela", onChange);
    return () => {
      events.removeListener("dela");
    };
  }, [image]);

  return(
  <View style={{ padding: 20, alignItems: "center" }}>
    <Image
      // source={
      //   response
      //     ? { uri: response?.assets[0]?.uri }
      //     : require("../../../assets/images/user.png")
      // }
      source={image}
      style={styles.profileImage}
    />
    <Pressable
      onPress={() => navigation.navigate("Modal4", { profileImage })}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.2 : 1,
        },
      ]}
    >
      <Text style={styles.profileText}>프로필 사진 변경</Text>
    </Pressable>
  </View>
)};

const styles = StyleSheet.create({
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderColor: "lightgray",
    borderWidth: 2,
    marginBottom: 10,
  },
  profileText: {
    color: "#3493D9",
    fontFamily: "GangwonEduAllBold",
  },
  modal: {
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  miniBar: {
    backgroundColor: "gray",
    height: 3,
    width: 30,
    marginTop: 15,
    marginBottom: 5,
  },
  modalBar: {
    borderWidth: 0.3,
    width: "100%",
    opacity: 0.3,
    marginTop: 10,
  },
  menu: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 120,
    justifyContent: "space-around",
  },
  modalText: {
    fontFamily: "GangwonEduAllBold",
  },
});

export default EditImage;
