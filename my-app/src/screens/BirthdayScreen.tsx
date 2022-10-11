import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

const BirthdayScreen = () => {
  // useState Hook를 사용하여 날짜와 모달 유형, 노출 여부를 설정할 변수를 생성
  const [date, onChangeDate] = useState(new Date()); // 선택 날짜
  const [mode, setMode] = useState("date"); // 모달 유형
  const [visible, setVisible] = useState(false); // 모달 노출 여부

  const navigation = useNavigation();

  const goComplete = () => {
    navigation.navigate("CompleteN" as any);
  };

  const onPressDate = () => {
    // 날짜 클릭 시
    setMode("date"); // 모달 유형을 date로 변경
    setVisible(true); // 모달 open
  };

  const onConfirm = (selectedDate) => {
    // 날짜 또는 시간 선택 시
    setVisible(false); // 모달 close
    onChangeDate(selectedDate); // 선택한 날짜 변경
  };

  const onCancel = () => {
    // 취소 시
    setVisible(false); // 모달 close
  };

  // 선택한 날짜를 표시할 문자열을 생성
  const dateStr = date.toLocaleDateString();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <FontAwesomeIcon name="birthday-cake" size={80} />
          <Text style={styles.Title}>생일 추가</Text>
          <Text style={styles.desc}>
            공개 프로필에 포함되지 않습니다. 왜 생일을 입력해야 하나요?
          </Text>
          <View style={styles.dateView}>
            <Pressable onPress={onPressDate} style={styles.dateBotton}>
              {/* 날짜 선택 영역 */}
              <Text style={styles.dateTitle}>
                {format(new Date(date), "PPP")}{" "}
              </Text>
            </Pressable>
            <Text></Text>
            <Text style={styles.desc}>날짜를 눌러 생일을 입력하세요.</Text>
            <View />
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
            onPress={goComplete}
          >
            <Text style={styles.buttonText}>다음</Text>
          </Pressable>
          <DateTimePickerModal
            isVisible={visible}
            onConfirm={onConfirm}
            onCancel={onCancel}
            date={date}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  back: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 30,
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
    fontFamily: "강원교육모두 Bold",
    marginTop: 20,
  },
  dateTitle: {
    fontSize: 22,
    textAlign: "center",
    border: "1px solid #000",
    borderRadius: 10,
    padding: 10,
    fontFamily: "강원교육모두 Bold",
    height: 50,
  },
  desc: {
    fontSize: 14,
    color: "#8e8e8e",
    textAlign: "center",
    marginBottom: 20,
    marginHorizontal: 80,
    fontFamily: "강원교육모두 Light",
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
  },
  footerText: {
    fontSize: 14,
    color: "#8e8e8e",
    textAlign: "center",
    marginHorizontal: 25,
    fontFamily: "강원교육모두 Light",
  },
  button: {
    backgroundColor: "#0782F9",
    borderRadius: 5,
    width: "100%",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "강원교육모두 Light",
  },
  dateView: {
    alignItems: "center",
  },
  dateBotton: {
    backgroundColor: "#3333FF",
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
    fontFamily: "강원교육모두 Light",
  },
});

export default BirthdayScreen;
