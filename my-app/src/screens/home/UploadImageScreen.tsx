import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { launchImageLibrary, Asset } from "react-native-image-picker";
import MyPressable from "../../components/MyPressable";
import Feather from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get("window");

//=============================================================================
const images = new Array(40).fill(0).map((_, i) => ({
  id: i,
  uri: `https://picsum.photos/id/${i}/200/300`,
}));
//=============================================================================

function UploadImageScreen() {
  const [asset, setAsset] = useState<Asset | null>(null);
  const [dirUri, setDirUri] = useState<string | null>(null);
  const [filePath, setFilePath] = useState<string | null>(null);

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
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={[styles.sameWidth, { marginLeft: 20 }]}>
          <Feather name="x" size={24} />
        </View>
        <View style={[styles.sameWidth, { alignItems: "center" }]}>
          <Text style={styles.title}>새 게시물</Text>
        </View>
        <MyPressable style={styles.sameWidth}>
          <Text style={{ color: "#0095f6" }}>공유</Text>
        </MyPressable>
      </View>

      <View style={styles.selectedImage}>
        <Image
          source={asset ?? { uri: "https://picsum.photos/id/1/500/500" }}
          style={{ width: "100%", height: "100%" }}
        />
        <View style={[styles.icon, styles.absolute]}></View>
      </View>
      <View style={styles.selectedImage}>
        <View
          style={{
            height: 50,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text>최근 항목</Text>
            <View style={styles.icon}></View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.icon}></View>
            <View style={styles.icon}></View>
          </View>
        </View>
        <View style={{ backgroundColor: "pink", flex: 1 }}>
          <Text>{dirUri || "폴더가 없습니다."}</Text>
          <MyPressable
            style={{ width: 100, borderRadius: 10, margin: 10 }}
            onPress={onSelectImage}
          >
            <Text>Press</Text>
          </MyPressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  sameWidth: {
    width: width / 3,
    borderWidth: 1,
  },
  title: {
    alignItems: "center",
  },
  selectedImage: { width: "100%", height: height / 2, backgroundColor: "blue" },
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "red",
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
});

export default UploadImageScreen;

{
  /* <FlatList
          data={images}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.image}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{ uri: item.uri }}
              />
            </View>
          )}
          numColumns={4}
          contentContainerStyle={{ paddingBottom: 0 }}
        /> */
}
