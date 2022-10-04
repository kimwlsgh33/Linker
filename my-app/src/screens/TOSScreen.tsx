import React, { useState } from "react";
import {
  Text,
  View,
  Switch,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";

const TOSScreen = () => {
  const [allow, setAllow] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const [disable, setDisable] = useState(true);
  const [collect, setCollect] = useState(false);
  const [offer, setOffer] = useState(false);
  const [transfer, setTransfer] = useState(false);
  const [location, setLocation] = useState(false);
  const [event, setEvent] = useState(false);
  const [night, setNight] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (isEnabled == true) {
      setCollect(false);
      setOffer(false);
      setTransfer(false);
      setLocation(false);
      setEvent(false);
      setNight(false);
    } else {
      setCollect(true);
      setOffer(true);
      setTransfer(true);
      setLocation(true);
      setEvent(true);
      setNight(true);
    }
  };

  const collectHandler = (e) => {
    setCollect((previousState) => !previousState);
    TOSCheck();
  };
  const offerHandler = () => setOffer((previousState) => !previousState);
  const transferHandler = () => setTransfer((previousState) => !previousState);
  const locationHandler = () => setLocation((previousState) => !previousState);
  const eventHandler = () => setEvent((previousState) => !previousState);
  const nightHandler = () => setNight((previousState) => !previousState);

  const TOSCheck = () => {
    console.log("collect", collect);
    console.log("offer", offer);
    console.log("transfer", transfer);
    console.log("location", location);
    console.log("event", event);
    console.log("night", night);

    if (
      collect == false &&
      offer == false &&
      transfer == false &&
      location == false
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: "flex-end",
          backgroundColor: "#ddd",
        }}
      >
        <Feather name="more-horizontal" size={30} color="#000" />
      </View>
      <View style={{ borderBottomWidth: 1, backgroundColor: "#ddd" }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20 }}>
          전체동의
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          onChange={TOSCheck}
          onTouchEnd={TOSCheck}
        />
      </View>
      <ScrollView style={styles.scrollview}>
        <Text style={styles.title_txt}>
          Instagram 앱을 사용하려면 다음 항목에 동의해야 합니다.
        </Text>
        <Text style={styles.nom_txt}>
          다음은 Meta에서 서비스를 제공하기 위해 회원님의 정보를 이용할 수 있는
          몇가지 주된 방법입니다. 회원님이 각 항목을 검토하고 동의하셔야 합니다.
        </Text>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#AAA",
            width: "100%",
            alignItems: "center",
            marginTop: 20,
            //marginBottom: 10,
          }}
        />
        <Text style={styles.head_txt}>개인정보의 수집 및 이용[필수]</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={collectHandler}
          value={collect}
          // onChange
          // onTouchEnd={TOSCheck}
        />
        <Text style={styles.nom_txt}>
          Meta Platforms, Inc.가 서비스 제공 및 맞춤화, 분석, 안전 및 보안,
          맞춤형 광고 표시를 위한 개인정보 수집 및 이용에 동의합니다.
          <Text style={styles.link}>더 알아보기</Text>
        </Text>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#AAA",
            width: "100%",
            alignItems: "center",
            marginTop: 20,
            //marginBottom: 10,
          }}
        />
        <Text style={styles.head_txt}>개인정보의 제공[필수]</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={offerHandler}
          value={offer}
          onChange={TOSCheck}
          // onTouchEnd={TOSCheck}
        />
        <Text style={styles.nom_txt}>
          Meta Platforms, Inc.가 다른 Meta Companies 및 Meta Companies에서
          서비스를 제공하는 국가의 정부 기관, 수사 기관, 분쟁 해결 기관에
          개인정보를 공유하는 데 동의합니다. Meta Platforms, Inc.는 회원님의
          개인정보를 절대 판매하지 않습니다.
          <Text style={styles.link}>더 알아보기</Text>
        </Text>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#AAA",
            width: "100%",
            alignItems: "center",
            marginTop: 20,
            //marginBottom: 10,
          }}
        />
        <Text style={styles.head_txt}>개인정보의 국가 간 이전[필수]</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={transferHandler}
          value={transfer}
          onChange={TOSCheck}
          // onTouchEnd={TOSCheck}
        />
        <Text style={styles.nom_txt}>
          Meta Platforms, Inc.가 서비스를 제공하기 위해 전 세계의 지사, 데이터
          센터 및 파트너 비즈니스에 개인정보를 이전하는 데 동의합니다.
          <Text style={styles.link}>더 알아보기</Text>
        </Text>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#AAA",
            width: "100%",
            alignItems: "center",
            marginTop: 20,
            //marginBottom: ,
          }}
        />

        <Text style={styles.head_txt}>위치 정보[필수]</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={locationHandler}
          value={location}
          onChange={TOSCheck}
          // onTouchEnd={TOSCheck}
        />
        <Text style={styles.nom_txt}>
          Meta Platforms, Inc.의{" "}
          <Text style={styles.link}>위치 기반 서비스 약관</Text>에 동의합니다.
        </Text>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#AAA",
            width: "100%",
            alignItems: "center",
            marginTop: 20,
            //marginBottom: ,
          }}
        />
        <Text style={styles.head_txt}>이벤트 정보 수신 동의[선택]</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={eventHandler}
          value={event}
        />
        <Text style={styles.nom_txt}>
          Meta Platforms, Inc.가 제공하는 이벤트 정보를 수신하는 데에 동의
          합니다. <Text style={styles.link}>더 알아보기</Text>
        </Text>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "#AAA",
            width: "100%",
            alignItems: "center",
            marginTop: 20,
            //marginBottom: ,
          }}
        />
        <Text style={styles.head_txt}>야간 알림 수신 동의[선택]</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={nightHandler}
          value={night}
        />
        <Text style={styles.nom_txt}>
          0~6시 사이에 알림을 수신하는 데에 동의합니다.{" "}
          <Text style={styles.link}>더 알아보기</Text>
        </Text>
      </ScrollView>
      <View style={styles.bottomBar}>
        <Pressable
          style={({ pressed }) => [
            styles.btn,
            Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
            disable ? { opacity: 0.5 } : {},
          ]}
          android_ripple={{ color: "#FFF" }}
          disabled={disable}
        >
          <Text style={{ fontFamily: "강원교육모두 Bold", fontSize: 18 }}>
            동의함
          </Text>
        </Pressable>
        <Text style={styles.bottomText}>
          동의함을 누르면 위 정보의 수집, 이용, 제공 및 방침과 약관에 동의함을
          확인하게 됩니다. 동의하지 않으면 계정을 만들 수 없습니다.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
  TopBar: {
    flex: 0.15,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  title_txt: {
    fontFamily: "강원교육튼튼",
    fontSize: 30,
    marginTop: 15,
    marginBottom: 15,
  },
  nom_txt: {
    fontFamily: "강원교육모두 Light",
    fontSize: 18,
    textAlign: "left",
  },
  head_txt: {
    fontFamily: "강원교육모두 Bold",
    fontSize: 20,
    marginTop: 20,
    textAlign: "left",
  },
  link: {
    color: "#0000FF",
  },
  btn: {
    backgroundColor: "#0782F9",
    width: "92%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  bottomBar: {
    alignItems: "center",
    justifyContent: "center",
    //position: "absolute",
    width: "100%",
    height: "15%",
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: "#AAA",
    backgroundColor: "#ddd",
  },
  bottomText: {
    fontFamily: "강원교육모두 Light",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
  },
});

export default TOSScreen;
