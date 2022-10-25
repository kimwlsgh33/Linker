import React, { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  Platform,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import events from "../../libs/eventEmitter";

const { width, height } = Dimensions.get("window");

function Modal4({ route, navigation }) {
  const { image, setImage } = route?.params || {};
  const opacity = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    openModal();
  }, []);

  const openModal = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => navigation.goBack());
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
        setImage(res.assets[0].uri);
      }
    );
  };

  const onEdit = () => {
    events.emit("saveEdit", {
      profileImage: image,
    });
  };

  return (
    <>
      <Animated.View style={{ position: "absolute", height, width, opacity }}>
        <Pressable
          style={[
            {
              height,
              width,
              backgroundColor: "rgba(0,0,0,0.3)",
            },
          ]}
          onPress={closeModal}
        />
      </Animated.View>
      <View style={{ height: height - 190 }}></View>
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
              closeModal();
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
              setImage(null);
              closeModal();
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
    </>
  );
}

const styles = StyleSheet.create({
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
});

export default Modal4;
