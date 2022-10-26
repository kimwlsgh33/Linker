import React, { useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  launchCamera,
  launchImageLibrary,
  type Asset,
} from "react-native-image-picker";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import MaterialCmnt from "react-native-vector-icons/MaterialCommunityIcons";
import MyPressable from "../components/MyPressable";
import InputBar from "../components/upload/InputBar";
import { useUserContext } from "../context/UserContext";
import { DataStore } from "aws-amplify";
import { Post, Tag } from "../models";

const { width } = Dimensions.get("window");

function UploadPost({ navigation }) {
  const { me } = useUserContext();
  const [asset, setAsset] = useState<Asset | null>(null);

  const [tag, setTag] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [text, setText] = useState<string>("");

  const onCamera = () => {
    launchCamera(
      {
        mediaType: "photo",
        includeBase64: true,
        maxHeight: 512,
        maxWidth: 512,
      },
      (result) => {
        if (result.didCancel) {
          console.log("User cancelled image picker");
        } else if (result.errorCode) {
          console.log("ImagePicker Error: ", result.errorCode);
        } else {
          setAsset(result.assets[0]);
        }
      }
    );
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera Permission",
          message: "App needs camera permission",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission given");
        onCamera();
      } else {
        console.log("Camera permission denied");
      }
    } else {
      onCamera();
    }
  };

  const onSelectImage = async () => {
    const result = await launchImageLibrary({
      mediaType: "photo",
      includeBase64: true,
      maxHeight: 512,
      maxWidth: 512,
    });

    if (result.didCancel) {
      console.log("User cancelled image picker");
    } else if (result.errorCode) {
      console.log("ImagePicker Error: ", result.errorCode);
    } else {
      const data = result.assets[0];
      setAsset(data);
      // console.log(Object.keys(result));
    }
  };

  useEffect(() => {
    // onSelectImage();
    // console.log(Platform.OS, "documentDir", FileSystem.documentDirectory);
    // console.log(Platform.OS, "documentDir", FileSystem.cacheDirectory);
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(me, null, 2));
  }, [me]);

  const onSubmit = async () => {
    if (link == "") {
      Alert.alert(
        "에러!",
        "링크를 입력해주세요",
        [
          {
            text: "확인",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
      return;
    } else if (tag == "") {
      Alert.alert(
        "에러!",
        "태그를 입력해주세요",
        [
          {
            text: "확인",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
      return;
    } else if (text == "") {
      Alert.alert(
        "에러!",
        "게시글을 입력해주세요",
        [
          {
            text: "확인",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
      return;
    }

    try {
      let exists = await DataStore.query(Tag, (t) => t.tagname("eq", tag));

      if (exists.length == 0) {
        exists[0] = await DataStore.save(new Tag({ tagname: tag }));
      }

      await DataStore.save(
        new Post({
          imageUri: asset.uri,
          link,
          text,
          tagID: exists[0].id,
          userID: me.id,
        })
      );
      setText("");
      setLink("");
      setTag("");
      setAsset(null);
      navigation.navigate("HomeTab");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeTab")}
          style={[styles.sameWidth, { paddingLeft: 10 }]}
        >
          <Feather name="x" size={24} />
        </TouchableOpacity>
        <View style={[styles.sameWidth, { alignItems: "center" }]}>
          <Text style={styles.title}>새 게시물</Text>
        </View>
        <TouchableOpacity
          onPress={onSubmit}
          style={[
            styles.sameWidth,
            {
              alignItems: "flex-end",
              paddingRight: 10,
            },
          ]}
        >
          <Text style={styles.nextBtnText}>게시</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.selectedImage}>
        {asset ? (
          <Image
            source={{ uri: asset.uri }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <View style={styles.noImage}>
            <Text style={styles.noImageText}>이미지를 선택해주세요</Text>
          </View>
        )}
        {/* <View style={[styles.icon, styles.absolute]}></View> */}
      </View>
      <View style={styles.middleBar}>
        {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.textView}>
            <Text>최근 항목</Text>
          </View>
          <Pressable
            // onPress={() => setDropdown("test")}
            style={({ pressed }) => [pressed && { opacity: 0.5 }]}
          >
            <Feather name="chevron-down" size={16} />
          </Pressable>
        </View> */}

        <View style={{ flexDirection: "row" }}>
          <View style={[styles.icon, { marginRight: 5 }]}>
            <MyPressable onPress={onSelectImage}>
              <Feather name="image" size={20} />
            </MyPressable>
          </View>
          {/* <View style={styles.icon}>
            <MyPressable onPress={requestCameraPermission}>
              <Feather name="video" size={20} />
            </MyPressable>
          </View> */}
        </View>
        <View style={{ flexDirection: "row" }}>
          {/* <View style={[styles.icon, { marginRight: 5 }]}>
            <MyPressable onPress={onSelectImage}>
              <Feather name="image" size={20} />
            </MyPressable>
          </View> */}
          <View style={styles.icon}>
            <MyPressable onPress={requestCameraPermission}>
              <Feather name="video" size={20} />
            </MyPressable>
          </View>
        </View>
      </View>
      <View style={styles.contents}>
        <InputBar label="tag" value={tag} onChangeText={setTag} />
        <InputBar label="link" value={link} onChangeText={setLink} />
        <View style={styles.textInputView}>
          <View style={[styles.icon, { left: -1 }]}>
            <TouchableOpacity>
              <MaterialCmnt name="emoticon-cool" size={24} />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            multiline
            value={text}
            onChangeText={setText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  header: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  sameWidth: {
    width: width / 3,
    // borderWidth: 1,
  },
  title: {
    alignItems: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  nextBtnText: {
    color: "#0095f6",
    fontWeight: "bold",
    textAlign: "right",
  },
  selectedImage: { flex: 1, width: "100%" },
  textView: {
    height: 40,
    justifyContent: "center",
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0,3)",
    overflow: "hidden",
  },
  absolute: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  image: {
    width: (width - 3) / 4,
    height: (width - 3) / 4,
    marginBottom: 1,
    marginRight: 1,
  },
  noImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noImageText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
  },
  middleBar: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 7,
  },
  contents: {
    width: "100%",
    padding: 10,
  },
  titleInputBar: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 10,
  },
  titleInputLabel: {
    width: 40,
    height: 30,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  titleInput: {
    height: "100%",
    width: "100%",
    backgroundColor: "yellow",
  },
  textInputView: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,

    alignItems: "flex-end",
    overflow: "hidden",
    padding: 3,
  },
  input: {
    width: "85%",
    height: "100%",
    paddingLeft: 7,
  },
});

export default UploadPost;
