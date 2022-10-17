import React, { useState, useRef, useCallback, } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  StyleSheet,
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
import events from "../libs/eventEmitter";

const EditProfile = ({ route, navigation }) => {
  const { accountName, name, profileImage } = route?.params || {};
  const [Visible, setVisible] = useState(false);
  const [disable, setDisable] = useState(true);

  const TostMessage = () => {
    ToastAndroid.show("Edited Sucessfully !", ToastAndroid.SHORT);
  };
  const [edit, setEdit] = useState(""); // accountName이 저장되는 상태
  const [edit2, setEdit2] = useState(""); // name이 저장되는 상태
  const [image, setImage] = useState(profileImage); // image가 저장되는 상태

  // 저장 버튼 누르면
  const onEdit = () => {
    events.emit("saveEdit", {
      accountName: edit,
      name: edit2,
    });
  };

  const onDelete = () => {
    events.emit("deleteImage", {
      profileImage: image,
    });
  };

  // 길이가 8자 미만이면 pressable (view)비활성화
  const lengthCheck = useCallback((text) => {
    if (text.length < 8) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, []);

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
        <View style={styles.container}>
          <View style={styles.header}>
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
            <Text style={styles.headerText}>프로필 편집</Text>
            <Pressable
              onPress={() => {
                TostMessage();
                navigation.goBack();
                onEdit();
              }}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                },
                disable ? { opacity: 0.5 } : {},
              ]}
              // eidt이 8자 미만이면 onPress 비활성화
              disabled={edit.length < 8 || edit2 === ""}
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
              style={styles.profileImage}
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
                  <Text style={styles.profileText}>프로필 사진 변경</Text>
                </Pressable>
              )}
            >
              <View style={styles.modal}>
                <View>
                  <Icon
                    name="ios-remove-outline"
                    size={50}
                    color="gray"
                    style={{ top: -15, left: 170 }}
                  />
                  <Text style={styles.modalText}>프로필 사진 변경</Text>
                  <View style={styles.modalBar}></View>
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
                        <Text style={styles.modalText2}>새 프로필 사진</Text>
                      </View>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        // onDelete();
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
                        <Text style={styles.modalText2}>프로필 사진 삭제</Text>
                      </View>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          <View style={{ padding: 10 }}>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.text}>사용자 이름</Text>
                <Text style={styles.text2}>(8자 이상 10자 미만)</Text>
              </View>
              <TextInput
                maxLength={10}
                placeholder={accountName}
                value={edit}
                onChangeText={(text) => {
                  setEdit(text);
                  lengthCheck(text);
                }}
                returnKeyType="next"
                ref={ref_input[0]}
                onSubmitEditing={() => {
                  ref_input[1].current.focus();
                }}
                style={styles.textInput}
              />
            </View>
            <View style={{ paddingVertical: 10 }}>
              <Text style={styles.text}>이름</Text>
              <TextInput
                placeholder={name}
                value={edit2}
                onChangeText={(text) => setEdit2(text)}
                returnKeyType="next"
                ref={ref_input[1]}
                onSubmitEditing={() => {
                  ref_input[2].current.focus();
                }}
                style={styles.textInput}
              />
            </View>
            <View style={{ paddingVertical: 10 }}>
              <TextInput
                placeholder="소개"
                returnKeyType="next"
                ref={ref_input[2]}
                onSubmitEditing={() => {
                  ref_input[3].current.focus();
                }}
                style={styles.textInput}
              />
            </View>
            <View style={{ paddingVertical: 10 }}>
              <TextInput
                placeholder="링크 추가"
                returnKeyType="next"
                ref={ref_input[3]}
                onSubmitEditing={() => null}
                style={styles.textInput}
              />
            </View>
          </View>
          <View style={{ paddingTop: 20 }}>
            <View style={styles.bar} />
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  width: "100%",
                },
              ]}
            >
              <Text style={styles.text3}>프로페셔널 계정으로 전환</Text>
            </Pressable>
            <View style={styles.bar} />
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                  width: "100%",
                },
              ]}
            >
              <Text style={styles.text3}>개인정보 설정</Text>
            </Pressable>
            <View style={styles.bar} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  headerText: {
    fontSize: 16,
    fontFamily: "GangwonEduAllBold",
  },
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
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalText: {
    top: -30,
    left: 153,
    fontFamily: "GangwonEduAllBold",
  },
  modalBar: {
    borderWidth: 0.3,
    width: "100%",
    opacity: 0.3,
    top: -20,
  },
  modalText2: {
    left: 20,
    top: -6,
    fontFamily: "GangwonEduAllBold",
  },
  text: {
    opacity: 0.5,
    fontFamily: "GangwonEduAllBold",
  },
  text2: {
    paddingLeft: 5,
    opacity: 0.4,
    fontSize: 10,
    fontFamily: "GangwonEduAllBold",
  },
  textInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#CDCDCD",
    fontFamily: "GangwonEduAllBold",
  },
  bar: {
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderColor: "#EFEFEF",
  },
  text3: {
    padding: 10,
    color: "#3493D9",
    fontFamily: "GangwonEduAllBold",
  },
});

export default EditProfile;
