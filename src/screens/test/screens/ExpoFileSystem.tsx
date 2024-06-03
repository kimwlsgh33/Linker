import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MyPressable from "../../../components/MyPressable";
import * as FileSystem from "expo-file-system";
import {
  downloadToDocDicP,
  getDocPath,
  getExtension,
  getFilename,
  getInfoP,
  readDirP,
  readImageAsBase64P,
} from "../../../utils/expoFiles";
import { randomImage } from "../../../utils/data";
import Animated, {
  FadeIn,
  FadeOut,
  runOnJS,
  runOnUI,
} from "react-native-reanimated";
import useToggle from "../../../hooks/useToggle";

function ExpoFileSystem() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [imageUri, setImageUri] = useState<string>("");
  const [base64, setBase64] = useState<string>("");
  const [pink, togglePink] = useToggle();
  const [purple, togglePurple] = useToggle();

  const getLocalImages = async () => {
    // console.log(getDocPath("/image.jpg"));
    // console.log(getFilename("pictures/image.jpg"));
    // console.log(getExtension("pictures/image.jpg"));
    getInfoP(getDocPath("/"))
      .then((info) => console.log(info))
      .catch((err) => console.log(err));
  };

  const downloadRandomImage = async () => {
    if (loading) return;
    try {
      setLoading(true);
      setError(null);
      const { uri } = await downloadToDocDicP(randomImage(), "download.jpg");
      setImageUri(uri);
      const base64Uri = await readImageAsBase64P(uri);
      setBase64(base64Uri);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>FileSystem</Text>
      <MyPressable title="Press" onPress={togglePink} />
      <MyPressable title="Download" onPress={downloadRandomImage} />
      <Text>Image Uri : {imageUri}</Text>
      {base64 && (
        <Image source={{ uri: base64 }} style={{ flex: 1, width: "100%" }} />
      )}
      {pink && (
        <Animated.View
          entering={FadeIn.withCallback(() => {
            "worklet";
            runOnJS(togglePurple)();
          })}
          exiting={FadeOut}
        >
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "pink",
              borderRadius: 15,
            }}
          ></View>
        </Animated.View>
      )}
      {purple && (
        <Animated.View
          entering={FadeIn.withCallback(() => {
            "worklet";
            console.log("end");
          })}
          exiting={FadeOut}
        >
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "purple",
              borderRadius: 15,
            }}
          ></View>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

export default ExpoFileSystem;
