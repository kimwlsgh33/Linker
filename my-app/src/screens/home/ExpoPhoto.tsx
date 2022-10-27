import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import CameraNav from "../../components/upload/CameraNav";

const { width, height } = Dimensions.get("window");

function ExpoPhoto() {
  const cameraRef = React.useRef<Camera>(null);
  const [type, setType] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const [premission, requestPermission] = Camera.useCameraPermissions();
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  // function takePicture() {
  //   if (camera) {
  //     const data = await camera.takePictureAsync(null);
  //     console.log(data);
  //   }
  // }

  useEffect(() => {
    // console.log("test.jpg : ", filenameOnly("test.jpg"));
  }, []);
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
        <Camera
          type={type}
          flashMode={flashMode}
          style={{ flex: 1, width: "100%" }}
          ref={cameraRef}
        />
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
            onPress={toggleCameraType}
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

export default ExpoPhoto;
