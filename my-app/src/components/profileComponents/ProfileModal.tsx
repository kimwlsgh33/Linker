import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal as DefaultModal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { Modal } from "../Modal";

export const ProfileModal = ({ data }) => {
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
          <Text
            style={{
              fontFamily: "GangwonEduAllBold",
              fontSize: 23,
            }}
          >
            {data.accountName}
            <Feather name="chevron-down" style={{ fontSize: 16 }} />
          </Text>
        </Pressable>
      )}
    >
      <View style={styles.modal}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.miniBar} />
        </View>
        <View style={styles.menu}>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={styles.align}>
              <Image style={styles.modalIcon1} source={data.profileImage} />
              <Text style={styles.modalText}>{data.accountName}</Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => {
              navigation.navigate("Login");
              setVisible(false);
            }}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={styles.align}>
              <View style={styles.modalIcon2}>
                <Entypo name="plus" style={{ fontSize: 20 }} />
              </View>
              <Text style={styles.modalText}>계정 추가</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

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
  menu: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 120,
    justifyContent: "space-around",
  },
  align: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalIcon1: {
    width: 45,
    height: 45,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: "rgba(0,0,0,0.3)",
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  modalIcon2: {
    width: 45,
    height: 45,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 14,
    fontFamily: "GangwonEduAllBold",
  },
});

export default ProfileModal;
