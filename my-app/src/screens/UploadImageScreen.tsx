import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

function UploadImageScreen() {
  // const [type, setType] = useState(CameraType.back);
  // const [premission, requestPermission] = Camera.useCameraPermissions();
  // function toggleCamera() {
  //   setType((current) =>
  //     current === CameraType.back ? CameraType.front : CameraType.back
  //   );
  // }

  // useEffect(() => {
  //   // console.log("test.jpg : ", filenameOnly("test.jpg"));
  // }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Upload</Text>
      <View
      // style={{ width: "100%" }}
      >
        <TouchableOpacity
        // onPress={toggleCamera}
        >
          <Text>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default UploadImageScreen;
