import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Switch,
  Modal,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import IconLeft from "../components/IconLeft";

function Lock2() {

  const [isEnabled, setIsEnabled] = useState(false);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const toggleSwitch = () => {
    if(isEnabled == false){
    setModalVisible(!modalVisible);
    }
    else if(isEnabled == true){
    setModalVisible2(!modalVisible2);
    }
  }

  return (
  <ScrollView style={styles.container}>
    <View style={styles.BorderBox}>

    <Modal  // 비공개 계정으로 전환하시겠어요? 모달창
      animationType="slide"
      visible={modalVisible}
      transparent={true}  // 배경 투명하게 만들기 
    >
      <Pressable style={{flex: 1, backgroundColor:'rgba(0,0,0,0.8)'}} onPress={() => setModalVisible(false)}>
          <View style={styles.ModalBox}>
            <View style={styles.ModalView}>
                <View style={styles.ModalInnerBox}>
                  <Text style={styles.ModalBoxText}>비공개 계정으로 전환하시겠어요?</Text>
                </View>
              <View style={styles.ModalInnerBox}>
                <View style={{flexDirection: "row"}}>
                  <View style={styles.ViewPadding}>
                    <AntDesign name={"lock"} size={20} color="#000000" />
                  </View>
                  <View style={styles.ViewPadding}>
                    <Text style={styles.ModalIconText}>회원님의 팔로워만 회원님의 사진과 동영상을 볼 수 있습니다.</Text>
                  </View>
                </View>
                <View style={{flexDirection: "row"}}>
                  <View style={styles.ViewPadding}>
                    <AntDesign name={"lock"} size={20} color="#000000" />
                  </View>
                  <View style={styles.ViewPadding}>
                    <Text style={styles.ModalIconText}>회원님을 태그, @언급하거나 회원님에게 메시지를 보낼 수 있는 사람은 변경되지 않습니다.</Text>
                  </View>
                </View>
              </View>
                <View style={styles.ButtonBox}>  
                  <Pressable 
                    style={styles.ModalButton} 
                    onPress={() => {
                      setModalVisible(false);
                      setIsEnabled(true);
                    }}
                    >
                  <Text style={styles.ModalButtonText}>비공개로 전환</Text>
                  </Pressable>
                </View>
            </View>
          </View>
        </Pressable>
      </Modal>

    <Modal                // 공개 계정으로 전환하시겠어요? 모달창
      animationType="slide"
      visible={modalVisible2}
      transparent={true}  // 배경 투명하게 만들기 
    >
      <Pressable style={{flex: 1, backgroundColor:'rgba(0,0,0,0.8)'}} onPress={() => setModalVisible(false)}>
          <View style={styles.ModalBox}>
            <View style={styles.ModalView}>
                <View style={styles.ModalInnerBox}>
                  <Text style={styles.ModalBoxText}>공개 계정으로 전환하시겠어요?</Text>
                </View>
              <View style={styles.ModalInnerBox}>
                <View style={{flexDirection: "row"}}>
                  <View style={styles.ViewPadding}>
                    <AntDesign name={"lock"} size={20} color="#000000" />
                  </View>
                  <View style={styles.ViewPadding}>
                    <Text style={styles.ModalIconText}>누구나 회원님의 게시물, 릴스 및 스토리를 볼 수 있으며  회원님의 원본 오디오를 사용할 수 있습니다.</Text>
                  </View>
                </View>
                <View style={{flexDirection: "row"}}>
                  <View style={styles.ViewPadding}>
                    <AntDesign name={"lock"} size={20} color="#000000" />
                  </View>
                  <View style={styles.ViewPadding}>
                    <Text style={styles.ModalIconText}>회원님에게 메시지를 보내거나 회원님을 태그 또는 @언급할 수 있는 사람은 변경되지 않습니다.</Text>
                  </View>
                </View>
                <View style={{flexDirection: "row"}}>
                  <View style={styles.ViewPadding}>
                    <AntDesign name={"lock"} size={20} color="#000000" />
                  </View>
                  <View style={styles.ViewPadding}>
                    <Text style={styles.ModalIconText}>대기 중인 팔로워 요청은 삭제하지 않을 경우 모두 승인됩니다.</Text>
                  </View>
                </View>
                <View style={{flexDirection: "row"}}>
                  <View style={styles.ViewPadding}>
                    <AntDesign name={"lock"} size={20} color="#000000" />
                  </View>
                  <View style={styles.ViewPadding}>
                    <Text style={styles.ModalIconText}>사람들이 회원님의 릴스를 리믹스하거나 리믹스의 일부로 다운로드할 수 있습니다. 설정에서 언제든지 이 옵션을 변경할 수 있습니다.</Text>
                  </View>
                </View>
              </View>
                <View style={styles.ButtonBox}>  
                  <Pressable 
                    style={styles.ModalButton} 
                    onPress={() => {
                      setModalVisible2(false);
                      setIsEnabled(false);
                    }}
                    >
                  <Text style={styles.ModalButtonText}>공개로 전환</Text>
                  </Pressable>
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
    <View>
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
      <View>
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
    backgroundColor:  "#ffffff",
  },

  lock2Text: {
    fontSize: 15,
    color: "#000000",
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
    borderBottomWidth: 1,
    borderBottomColor: "#bababa",
  },

  ModalView: {
    width: "100%",
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  ModalBox: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  ModalInnerBox: {
    borderBottomWidth: 1,
    borderBottomColor: "#d6d4d4",
  },

  ModalBoxText: {
    color: "#000000",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10,
  },

  ButtonBox: {
    padding: 15,
  },

  ModalButton: {
    backgroundColor: "#0174DF",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0174DF",
  },

  ModalButtonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },

  ModalIconText: {
    fontSize: 15,
    color: "#000000",
  },

  ViewPadding: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
    flexShrink: 1,
  },

});

export default Lock2;
