import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import { DataStore } from "aws-amplify";
import { User } from "../../models";
import { LinearGradient } from "expo-linear-gradient";

const BirthdayScreen = ({ navigation, route }) => {
  const { username, name, nick: nickname, password } = route.params;
  // useState Hook를 사용하여 날짜와 모달 유형, 노출 여부를 설정할 변수를 생성
  const [date, onChangeDate] = useState(new Date()); // 선택 날짜
  const [mode, setMode] = useState("date"); // 모달 유형
  const [visible, setVisible] = useState(false); // 모달 노출 여부
  const [dateStr, setDateStr] = useState(format(date, "yyyy-MM-dd")); // 화면에 노출 될 선택 날짜

  const goTOS = async () => {
    try {
      const user = await DataStore.save(
        new User({
          username,
          name,
          nickname,
          password,
          birthday: dateStr,
        })
      );
      navigation.navigate("TOS" as any, { user });
    } catch (e) {
      console.log("error creating user", JSON.stringify(e, null, 2));
    }
  };

  const onPressDate = () => {
    // 날짜 클릭 시
    setMode("date"); // 모달 유형을 date로 변경
    setVisible(!visible); // 모달 open
    console.log("date " + visible);
  };

  const onConfirm = (selectedDate) => {
    // 날짜 또는 시간 선택 시
    setVisible(false); // 모달 close
    onChangeDate(selectedDate); // 선택한 날짜 변경
    setDateStr(format(selectedDate, "yyyy-MM-dd")); // 날짜를 화면에 노출 될 포멧으로 변경
  };

  const onCancel = () => {
    // 취소 시
    setVisible(false); // 모달 close
  };

  // 선택한 날짜를 표시할 문자열을 생성
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={["pink", "white"]}
        style={styles.LinearGradient}
        locations={[0, 0.9]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.header}>
          <FontAwesomeIcon name="birthday-cake" size={80} />
          <Text style={styles.Title}>생일 추가</Text>
          <Text style={styles.desc}>
            공개 프로필에 포함되지 않습니다. 왜 생일을 입력해야 하나요?
          </Text>
          <View style={styles.dateView}>
            <Pressable
              style={({ pressed }) => [
                styles.dateButton,
                Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
              ]}
              android_ripple={{ color: "#FFF" }}
              onPress={onPressDate}
            >
              <Text style={styles.dateTitle}>
                {format(new Date(date), "PPP")}
              </Text>
            </Pressable>
            <Text style={styles.desc}>날짜를 눌러 생일을 입력하세요.</Text>
            <Text style={styles.descb}>{dateStr}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            비즈니스나 반려동물 등을 위한 계정인 경우에도 회원님의 생일을
            사용하세요.
          </Text>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
            ]}
            android_ripple={{ color: "#FFF" }}
            onPress={goTOS}
          >
            <Text style={styles.buttonText}>다음</Text>
          </Pressable>
        </View>
        <DateTimePickerModal
          isVisible={visible}
          mode="date"
          onConfirm={onConfirm}
          onCancel={onCancel}
          date={date}
        />
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  LinearGradient: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 50,
  },
  Title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "GangwonEduAllBold",
    marginTop: 20,
  },
  dateTitle: {
    fontSize: 22,
    textAlign: "center",
    border: "1px solid #000",
    borderRadius: 10,
    padding: 10,
    fontFamily: "GangwonEduAllBold",
    height: 50,
  },
  desc: {
    fontSize: 14,
    color: "#8e8e8e",
    textAlign: "center",
    marginBottom: 20,
    marginHorizontal: 80,
    fontFamily: "GangwonEduAllLight",
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#8e8e8e",
    textAlign: "center",
    marginHorizontal: 60,
    fontFamily: "GangwonEduAllLight",
  },
  button: {
    backgroundColor: "#0782F9",
    borderRadius: 5,
    width: "85%",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "GangwonEduAllLight",
  },
  dateView: {
    alignItems: "center",
  },
  dateButton: {
    backgroundColor: "cyan",
    borderRadius: 50,
    width: "60%",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  dateText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "GangwonEduAllLight",
  },
  descb: {
    fontSize: 20,
    color: "blue",
    textAlign: "center",
    marginBottom: 20,
    marginHorizontal: 80,
    fontFamily: "GangwonEduAllLight",
  },
});

export default BirthdayScreen;
