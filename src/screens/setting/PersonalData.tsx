import React from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";



function PersonalData() {

  return (
    <View style={styles.container}>
      <View style={styles.PersonalTopViewBox}>
        <View style={styles.PersonalTopView}>
          <Text style={styles.PersonalTop}>
            비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의 개인 정보를
            입력하세요. 공개 프로필에 포함되지 않습니다.
          </Text>
        </View>
    </View>
    <View style={styles.inputBox}>
      <View>
        <Text style={styles.inputText}>이메일 주소</Text>
      </View>
      <AntDesign name={"right"} size={20} color="#333333" />
    </View>
    <View style={styles.inputBox}>
      <View>
        <Text style={styles.inputText}>전화번호</Text>
        <Text style={styles.inputText}>+821012345678</Text>
      </View>
      <AntDesign name={"right"} size={20} color="#333333" />
    </View>
    <View style={styles.inputBox}>
      <View>
        <Text style={styles.inputText}>성별</Text>
        <Text style={styles.inputText}>밝히고 싶지 않음</Text>
      </View>
      <AntDesign name={"right"} size={20} color="#333333" />
    </View>
    <View style={styles.inputBox}>
      <View>
        <Text style={styles.inputText}>생일</Text>
        <Text style={styles.inputText}>1996.5.4</Text>
      </View>
      <AntDesign name={"right"} size={20} color="#333333" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  PersonalTop: {
    color:"#000000",
    textAlign:"center",
  },

  PersonalTopView: {
    width: "78%",
  },

  PersonalTopViewBox: {
    width:"100%",
    alignItems:"center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#d6d4d4",
    borderBottomColor: "#d6d4d4",
    padding: 5,
  },

  inputText: {
    color:"#333333"
  },

  inputBox: {
    flexDirection: "row", 
    justifyContent:"space-between",
    alignItems:"center",
    width:"90%",
    borderBottomWidth:1, 
    borderBottomColor:"#d6d4d4",
    paddingBottom:10,
    marginTop:10,
  },
  

});

export default PersonalData;
