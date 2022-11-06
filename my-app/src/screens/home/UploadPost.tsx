import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import {
  type Asset,
  launchCamera,
  launchImageLibrary,
} from "react-native-image-picker";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import MaterialCmnt from "react-native-vector-icons/MaterialCommunityIcons";
import MyPressable from "../../components/MyPressable";
import InputBar from "../../components/upload/InputBar";
import { DataStore, Storage } from "aws-amplify";
import { Post, Tag } from "../../models";
import { v4 as uuidv4 } from "uuid";
import { useMeStore, usePostStore } from "../../store";

const { height, width } = Dimensions.get("window");

function UploadPost({ navigation }) {
  const { me } = useMeStore();
  const { addPost } = usePostStore();
  const [assets, setAssets] = useState<Asset[]>([]);

  const [tag, setTag] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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
          setAssets(result.assets);
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
      selectionLimit: 4,
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
      const data = result.assets;
      // console.log(result.assets[0].uri);
      setAssets(data);
      // console.log(Object.keys(result));
    }
  };

  const onUpload = async (asset) => {
    if (!asset) {
      Alert.alert("Please select an image");
      return;
    }

    try {
      const response = await fetch(asset.uri);
      const blob = await response.blob();
      const urlParts = asset.uri.split(".");
      const extensions = urlParts.pop();
      const key = `${me.id}/${uuidv4()}.${extensions}`;

      return Storage.put(key, blob, {
        contentType: `image/${extensions}`,
      });
    } catch (err) {
      Alert.alert("업로드 실패 : " + err);
    }
  };

  const onSubmit = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    if (assets === null) {
      Alert.alert(
        "에러!",
        "사진을 선택해주세요",
        [
          {
            text: "확인",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
      setLoading(false);
      return;
    } else if (link == "") {
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
      setLoading(false);
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
      setLoading(false);
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
      setLoading(false);
      return;
    }

    try {
      // S3 저장소에 이미지 업로드, key값 가져옴
      const putResults = await Promise.all(
        assets.map((asset) => onUpload(asset))
      );

      // console.log("RESULTS : ", JSON.stringify(imageUrls));

      const imageKeys = putResults.map((item) => item.key);

      // 태그 존재하는지 확인
      let exists = await DataStore.query(Tag, (t) => t.text("eq", tag));

      // 태그 없으면, 새로운 태그 만듬
      if (exists.length === 0) {
        exists[0] = await DataStore.save(new Tag({ text: tag }));
      }

      const post = await DataStore.save(
        new Post({
          imageUrls: imageKeys,
          link,
          text,
          userID: me.id,
          Tag: exists[0],
          postTagId: exists[0].id,
        })
      );

      addPost(post);
      setText("");
      setLink("");
      setTag("");
      navigation.navigate("HomeTab");
    } catch (e) {
      Alert.alert("Error", e.message);
    } finally {
      setAssets(null);
      setLoading(false);
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

      <FlatList
        data={assets}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={{ width }} />
        )}
        ListEmptyComponent={
          <View style={styles.noImage}>
            <Text style={styles.noImageText}>이미지를 선택해주세요</Text>
          </View>
        }
        horizontal
        pagingEnabled
      />

      {/* <View style={[styles.icon, styles.absolute]}></View> */}
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
            <TouchableOpacity onPress={onSelectImage}>
              <Feather name="image" size={20} />
            </TouchableOpacity>
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
            <TouchableOpacity
              onPress={() => {
                console.log("hi");
              }}
            >
              <Feather name="video" size={20} />
            </TouchableOpacity>
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
