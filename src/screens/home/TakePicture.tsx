import React, { useEffect, useState } from "react";
import {
  Dimensions,
  PermissionsAndroid,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { launchCamera } from "react-native-image-picker";

const { width, height } = Dimensions.get("window");

function TakePicture() {
  const onCamera = () => {
    launchCamera(
      {
        mediaType: "photo",
        includeBase64: true,
        maxHeight: 512,
        maxWidth: 512,
      },
      (result) => {
        console.log(result);
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

  useEffect(() => {}, []);
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          width: "100%",
          borderRadius: 30,
          overflow: "hidden",
          position: "relative",
          alignItems: "center",
          marginBottom: 80,
        }}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            position: "absolute",
            bottom: 20,
            backgroundColor: "white",
            overflow: "hidden",
          }}
        >
          <Pressable
            onPress={requestCameraPermission}
            style={({ pressed }) => [
              styles.button,
              Platform.OS === "ios" && pressed && { opacity: 0.5 },
            ]}
            android_ripple={{ color: "gray" }}
          >
            <View
              style={{
                width: 62,
                height: 62,
                borderRadius: 35,
                borderWidth: 2,
              }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TakePicture;
