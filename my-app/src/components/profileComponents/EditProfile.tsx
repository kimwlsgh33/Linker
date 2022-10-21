import React, { useState, useRef, useCallback } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  StyleSheet,
  Modal,
  View,
  Text,
  Pressable,
  ToastAndroid,
  Image,
  TextInput,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import events from "../../libs/eventEmitter";
import { launchImageLibrary } from "react-native-image-picker";

const EditProfile = ({ route, navigation }) => {
  const { accountName, name, profileImage } = route?.params || {};
  const [visible, setVisible] = useState(false);
  const [disable, setDisable] = useState(true);

  const TostMessage = () => {
    ToastAndroid.show("Edited Sucessfully !", ToastAndroid.SHORT);
  };
  const [edit, setEdit] = useState(""); // accountName이 저장되는 상태
  const [edit2, setEdit2] = useState(""); // name이 저장되는 상태
  const [image, setImage] = useState(profileImage); // image가 저장되는 상태
  // const [response, setResponse] = useState(null); // 갤러리image가 저장되는 상태

  // 저장 버튼 누르면
  const onEdit = () => {
    events.emit("saveEdit", {
      accountName: edit,
      name: edit2,
    });
  };

  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === "android",
      },
      (res) => {
        if (res.didCancel) {
          // 취소했을 경우
          return;
        }
        setImage(res);
      }
    );
  };

  // const onChange = () => {
  //   events.emit("changeImage", {
  //     profileImage: image
  //   });
  // };

  // const onDelete = () => {
  //   events.emit("deleteImage", {
  //     profileImage: image,
  //   });
  // };

  const editComplete = () => {
    TostMessage();
    navigation.goBack();
    onEdit();
    // onChange();
    // onDelete();
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
              onPress={editComplete}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                },
                disable ? { opacity: 0.5 } : {},
              ]}
              // eidt이 8자 미만, edit2가 4자 미만이면 기능 비활성화
              disabled={edit.length < 8 || edit2.length < 4}
            >
              <Ionic
                name="checkmark"
                style={{ fontSize: 30, color: "#3493D9" }}
              />
            </Pressable>
          </View>
          <View style={{ padding: 20, alignItems: "center" }}>
            <Image
              source={
                image
                  ? { uri: image?.assets[0]?.uri }
                  : require("../../../assets/images/user.png")
              }
              style={styles.profileImage}
            />
            <Pressable
              onPress={() => setVisible(true)}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                },
              ]}
            >
              <Text style={styles.profileText}>프로필 사진 변경</Text>
            </Pressable>
            <Modal visible={visible} transparent={true} animationType={"fade"}>
              <Pressable
                style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.3)" }}
              ></Pressable>
            </Modal>
            <Modal visible={visible} transparent={true} animationType={"slide"}>
              <Pressable
                style={{ flex: 1, justifyContent: "flex-end" }}
                onPress={() => setVisible(false)}
              ></Pressable>
              <View style={styles.modal}>
                <View style={{ alignItems: "center" }}>
                  <View style={styles.miniBar} />
                  <Text style={styles.modalText}>프로필 사진 변경</Text>
                  <View style={styles.modalBar}></View>
                </View>
                <View style={styles.menu}>
                  <Pressable
                    onPress={() => {
                      onSelectImage();
                      setVisible(false);
                    }}
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.2 : 1,
                      },
                    ]}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.modalText}>새 프로필 사진</Text>
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      // setImage(require("../../../assets/images/user.png"));
                      setVisible(false);
                    }}
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.2 : 1,
                      },
                    ]}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.modalText}>프로필 사진 삭제</Text>
                    </View>
                  </Pressable>
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
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.text}>이름</Text>
                <Text style={styles.text2}>(4자 이상 10자 미만)</Text>
              </View>
              <TextInput
                maxLength={10}
                placeholder={name}
                value={edit2}
                onChangeText={(text) => {
                  setEdit2(text);
                }}
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
                },
              ]}
            >
              <Text style={styles.text3}>프로페셔널 계정으로 전환</Text>
            </Pressable>
            <View style={styles.bar} />
            <Pressable
              onPress={() => {
                navigation.navigate("Setting");
              }}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
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
