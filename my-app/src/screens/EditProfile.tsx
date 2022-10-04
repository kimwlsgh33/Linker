import React from "react";
import {
  View,
  Text,
  Pressable,
  ToastAndroid,
  Image,
  TextInput,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";

const EditProfile = ({ route, navigation }) => {
  // const {
  //   /*name, accountName, profileImage*/
  // } = route.params;
  const profileImage = require("../../assets/images/profile.png");
  const TostMessage = () => {
    ToastAndroid.show("Edited Sucessfully !", ToastAndroid.SHORT);
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.2 : 1,
            },
          ]}
        >
          <Ionic name="close-outline" style={{ fontSize: 35 }} />
        </Pressable>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>프로필 편집</Text>
        <Pressable
          onPress={() => {
            TostMessage();
            navigation.goBack();
          }}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.2 : 1,
            },
          ]}
        >
          <Ionic name="checkmark" style={{ fontSize: 30, color: "#3493D9" }} />
        </Pressable>
      </View>
      <View style={{ padding: 20, alignItems: "center" }}>
        <Image
          source={profileImage}
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
            borderColor: "lightgray",
            borderWidth: 2,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            color: "#3493D9",
          }}
        >
          프로필 사진 변경
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <View>
          <Text
            style={{
              opacity: 0.5,
            }}
          >
            이름
          </Text>
          <TextInput
            placeholder="name"
            // defaultValue={name}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text
            style={{
              opacity: 0.5,
            }}
          >
            사용자 이름
          </Text>
          <TextInput
            placeholder="accountname"
            // defaultValue={accountName}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <TextInput
            placeholder="소개"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <TextInput
            placeholder="링크 추가"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
            }}
          />
        </View>
      </View>
      <View style={{ paddingTop: 20 }}>
        <Text
          style={{
            padding: 10,
            color: "#3493D9",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#EFEFEF",
          }}
        >
          프로페셔널 계정으로 전환
        </Text>
        <Text
          style={{
            padding: 10,
            color: "#3493D9",
            borderBottomWidth: 1,
            borderColor: "#EFEFEF",
          }}
        >
          개인정보 설정
        </Text>
      </View>
    </View>
  );
};

export default EditProfile;
