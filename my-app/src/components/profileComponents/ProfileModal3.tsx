import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal as DefaultModal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Modal } from "../Modal";

export const ProfileModal3 = () => {
  const navigation = useNavigation();

  const [Visible, setVisible] = useState(false);

  return (
    <Modal
      Visible={Visible}
      setVisible={setVisible}
      activator={({ handleOpen }) => (
        <Pressable
          onPress={handleOpen}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.2 : 1,
            },
          ]}
        >
          <Icon
            name="menu-outline"
            style={{
              fontSize: 29,
            }}
          />
        </Pressable>
      )}
    >
      <View style={styles.modal2}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.miniBar} />
        </View>
        <View style={styles.menu}>
          <Pressable
            onPress={() => {
              navigation.navigate("Setting");
              setVisible(false);
            }}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon name="ios-settings-sharp" size={25} color="black" />
              <Text style={styles.text}>설정</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("User2"); // 계정 스크린으로 이동
              setVisible(false);
            }}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="clock-time-eight-outline"
                size={25}
                color="black"
              />
              <Text style={styles.text}>내 활동</Text>
            </View>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <Feather name="star" size={25} color="black" />
              <Text style={styles.text}>즐겨찾기</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal2: {
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
  text: {
    fontFamily: "GangwonEduAllBold",
    paddingLeft: 10,
    paddingTop: 3,
  },
  menu: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 120,
    justifyContent: "space-around",
  },
});

export default ProfileModal3;
