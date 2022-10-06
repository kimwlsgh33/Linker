import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Linking,
  Button,
  Switch,
  Modal,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import ionic from "react-native-vector-icons/ionicons";
import TextAndIcon from "../components/TextAndIcon";
import IconLeft from "../components/IconLeft";
import TextStyle from "../components/TextStyle";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function Lock2({ navigation, route }) {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
  <ScrollView style={styles.container}>
      <View style={styles.BorderBox}>
      <Modal 
                  animationType="slide"
                  visible={isEnabled}
                  transparent={true}  // 배경 투명하게 만들기 
                  >
      <Pressable style={{flex: 1, backgroundColor:'rgba(0,0,0,0.8)'}} onPress={() => setIsEnabled(false)}>
          <View style={styles.ModalBox}>
            <View style={styles.ModalView}>
                <View style={styles.ModalInnerBox}>
                  <Text style={styles.ModalBoxText}>비공개 계정으로 전환하시겠어요?</Text>
                </View>
                <View style={styles.ModalInnerBox}>
                  <Text style={styles.lock2Text}>회원님의 팔로워만 회원님의 사진과 동영상을 볼 수 있습니다.</Text>
                  <Text style={styles.lock2Text}>회원님을 태그, @언급하거나 회원님에게 메시지를 보낼 수 있는 사람은 변경되지 않습니다.</Text>
                </View>
                <View style={styles.ButtonBox}>  
                  <Button
                    title="비공개로 전환" 
                    color="#0174DF" 
                    onPress={() => setIsEnabled(!isEnabled)}
                  />
                </View>
            </View>
          </View>
              </Pressable>
                </Modal>
        <Text style={styles.lock2Text}>계정 공개 범위</Text>
        <View style={styles.Rightbox}>  
          <IconLeft iconName={"lock"} iconSize={20} text={"비공개 계정"} />
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#4169E1" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.BorderBox}>
        <Text style={styles.lock2Text}>활동</Text>
          <View style={styles.Rightbox}>
          <IconLeft iconName={"exclamationcircleo"} iconSize={20} text={"일시 제한"} />
            <Text style={styles.lock2RightText}>해제</Text>
          </View>
        <IconLeft iconName={"lock"} iconSize={20} text={"숨겨진 단어"} />
        <IconLeft iconName={"lock"} iconSize={20} text={"댓글"} />
        <IconLeft iconName={"lock"} iconSize={20} text={"게시물"} />
          <View style={styles.Rightbox}>
          <IconLeft iconName={"lock"} iconSize={20} text={"언급"} />
            <Text style={styles.lock2RightText}>전체 공개</Text>
          </View>
        <IconLeft iconName={"lock"} iconSize={20} text={"스토리"} />
        <IconLeft iconName={"lock"} iconSize={20} text={"라이브 방송"} />
        <IconLeft iconName={"lock"} iconSize={20} text={"가이드"} />
        <IconLeft iconName={"lock"} iconSize={20} text={"활동 상태"} />
        <IconLeft iconName={"lock"} iconSize={20} text={"메시지"} />
      </View>
        <View style={styles.BottomBox}>
          <Text style={styles.lock2Text}>연결된 연락처</Text>
          <IconLeft iconName={"lock"} iconSize={20} text={"제한된 계정"} />
          <IconLeft iconName={"lock"} iconSize={20} text={"차단된 계정"} />
          <IconLeft iconName={"lock"} iconSize={20} text={"숨긴 계정"} />
          <IconLeft iconName={"lock"} iconSize={20} text={"팔로우하는 계정"} />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:  "#000000",
  },

  lock2Text: {
    fontSize: 15,
    color: "#FFFAFA",
    fontWeight: "bold",
    margin: 15,
  },

  lock2RightText: {
  color: "#333333",
  margin: 15,
  },

  Rightbox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  BorderBox: {
    borderWidth: 1,
    borderBottomColor: "#333333",
  },

  BottomBox: {
  },

  ModalView: {
    backgroundColor: '#151515',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  ModalBox: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // borderWidth: 1,
    // borderTopLeftRadius: 20,
  },

  ModalText: {
    color: "#FFFAFA",
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
  },

  ModalInnerBox: {
    borderWidth: 1,
    borderBottomColor: "#333333",
  },

  ModalBoxText: {
    color: "#FFFAFA",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
  },

  ButtonBox: {
    padding: 15,
  },

});

export default Lock2;
