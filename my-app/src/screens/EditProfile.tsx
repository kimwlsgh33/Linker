import React, { useState, useRef } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Modal as DefaultModal,
  View,
  Text,
  Pressable,
  ToastAndroid,
  Image,
  TextInput,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Ionicons";
import { Modal } from "../components/Modal";

const EditProfile = ({ route, navigation }) => {
  const [Visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const { acountName, name, profileImage } = route?.params || {};
  const TostMessage = () => {
    ToastAndroid.show("Edited Sucessfully !", ToastAndroid.SHORT);
  };

  const onChange = (e: any) => {
    setText(e.target.value);
  };

  const ref_input: Array<React.RefObject<TextInput>> = [];
  ref_input[0] = useRef(null);
  ref_input[1] = useRef(null);
  ref_input[2] = useRef(null);
  ref_input[3] = useRef(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : undefined}
      >
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
            <Text style={{ fontSize: 16, fontFamily: "GangwonEduAllBold" }}>
              프로필 편집
            </Text>
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
              <Ionic
                name="checkmark"
                style={{ fontSize: 30, color: "#3493D9" }}
              />
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
            <Modal
              Visible={Visible}
              setVisible={setVisible}
              activator={({ handleOpen }) => (
                <Pressable
                  onPress={() => handleOpen()}
                  style={({ pressed }) => [
                    {
                      opacity: pressed ? 0.2 : 1,
                      width: "100%",
                    },
                  ]}
                >
                  <Text
                    style={{
                      color: "#3493D9",
                      fontFamily: "GangwonEduAllBold",
                    }}
                  >
                    프로필 사진 변경
                  </Text>
                </Pressable>
              )}
            >
              <View
                style={{
                  backgroundColor: "white",
                  height: 150,
                  top: "390%",
                  borderRadius: 15,
                }}
              >
                <View>
                  <Icon
                    name="ios-remove-outline"
                    size={50}
                    color="gray"
                    style={{ top: -15, left: 170 }}
                  />
                  <Text
                    style={{
                      top: -30,
                      left: 153,
                      fontFamily: "GangwonEduAllBold",
                    }}
                  >
                    프로필 사진 변경
                  </Text>
                  <View
                    style={{
                      borderWidth: 0.3,
                      width: "100%",
                      opacity: 0.3,
                      top: -20,
                    }}
                  ></View>
                  <View style={{ marginTop: 10 }}>
                    <Pressable
                      style={({ pressed }) => [
                        {
                          opacity: pressed ? 0.2 : 1,
                          width: "100%",
                        },
                      ]}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            left: 20,
                            top: -6,
                            fontFamily: "GangwonEduAllBold",
                          }}
                        >
                          새 프로필 사진
                        </Text>
                      </View>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        //프로필 사진 삭제 함수
                        setVisible(false);
                      }}
                      style={({ pressed }) => [
                        {
                          opacity: pressed ? 0.2 : 1,
                          top: 20,
                        },
                      ]}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            left: 20,
                            top: -6,
                            fontFamily: "GangwonEduAllBold",
                          }}
                        >
                          프로필 사진 삭제
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          <View style={{ padding: 10 }}>
            <View>
              <Text
                style={{
                  opacity: 0.5,
                  fontFamily: "GangwonEduAllBold",
                }}
              >
                이름
              </Text>
              <TextInput
                placeholder="name"
                defaultValue={name}
                onChangeText={(text) => setText(text)}
                returnKeyType="next"
                ref={ref_input[0]}
                onChange={onChange}
                // value={text}
                onSubmitEditing={() => {
                  ref_input[1].current.focus();
                }}
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
                  fontFamily: "GangwonEduAllBold",
                }}
              >
                사용자 이름
              </Text>
              <TextInput
                placeholder="accountname"
                defaultValue={acountName}
                returnKeyType="next"
                ref={ref_input[1]}
                onChange={onChange}
                // value={text}
                onSubmitEditing={() => {
                  ref_input[2].current.focus();
                }}
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
                onChangeText={(text) => setText(text)}
                returnKeyType="next"
                ref={ref_input[2]}
                onChange={onChange}
                onSubmitEditing={() => {
                  ref_input[3].current.focus();
                }}
                style={{
                  fontSize: 16,
                  borderBottomWidth: 1,
                  borderColor: "#CDCDCD",
                  fontFamily: "GangwonEduAllBold",
                }}
              />
            </View>
            <View style={{ paddingVertical: 10 }}>
              <TextInput
                placeholder="링크 추가"
                onChangeText={(text) => setText(text)}
                returnKeyType="next"
                ref={ref_input[3]}
                onChange={onChange}
                onSubmitEditing={() => null}
                style={{
                  fontSize: 16,
                  borderBottomWidth: 1,
                  borderColor: "#CDCDCD",
                  fontFamily: "GangwonEduAllBold",
                }}
              />
            </View>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  width: "100%",
                },
              ]}
            >
              <Text
                style={{
                  padding: 10,
                  color: "#3493D9",
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: "#EFEFEF",
                  fontFamily: "GangwonEduAllBold",
                }}
              >
                프로페셔널 계정으로 전환
              </Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  width: "100%",
                },
              ]}
            >
              <Text
                style={{
                  padding: 10,
                  color: "#3493D9",
                  borderBottomWidth: 1,
                  borderColor: "#EFEFEF",
                  fontFamily: "GangwonEduAllBold",
                }}
              >
                개인정보 설정
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default EditProfile;
