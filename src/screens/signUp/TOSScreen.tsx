import React, { useEffect, useState, useCallback } from "react";
import {
  Text,
  View,
  Switch,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
} from "react-native";
import TOS from "../../components/TOS";
import { useNavigation } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Term, User } from "../../models";
import { SafeAreaView } from "react-native-safe-area-context";

const datas = [
  {
    id: 1,
    state: false,
    title: "개인정보의 수집 및 이용[필수]",
    desc: "Meta Platforms, Inc.가 서비스 제공 및 맞춤화, 분석, 안전 및 보안, 맞춤형 광고 표시를 위한 개인정보 수집 및 이용에 동의합니다.",
    link: "더 알아보기",
  },
  {
    id: 2,
    state: false,
    title: "개인정보의 제공[필수]",
    desc: "Meta Platforms, Inc.가 다른 Meta Companies 및 Meta Companies에서 서비스를 제공하는 국가의 정부 기관, 수사 기관, 분쟁 해결 기관에 개인정보를 공유하는 데 동의합니다. Meta Platforms, Inc.는 회원님의 개인정보를 절대 판매하지 않습니다.",
    link: "더 알아보기",
  },
  {
    id: 3,
    state: false,
    title: "개인정보의 국가 간 이전[필수]",
    desc: "Meta Platforms, Inc.가 서비스를 제공하기 위해 전 세계의 지사, 데이터 센터 및 파트너 비즈니스에 개인정보를 이전하는 데 동의합니다.",
    link: "더 알아보기",
  },
  {
    id: 4,
    state: false,
    title: "위치 정보[필수]",
    desc: "Meta Platforms, Inc.의 위치 기반 서비스 약관 에 동의합니다.",
    link: "위치 기반 서비스 약관 보기",
  },
  {
    id: 5,
    state: false,
    title: "이벤트 정보 수신 동의[선택]",
    desc: "Meta Platforms, Inc.가 제공하는 이벤트 정보를 수신하는 데에 동의합니다.",
    link: "더 알아보기",
  },
  {
    id: 6,
    state: false,
    title: "야간 알림 수신 동의[선택]",
    desc: "Meta Platforms, Inc.가 제공하는 야간(0~6시) 알림을 수신하는 데에 동의합니다.",
    link: "더 알아보기",
  },
];

const TOSScreen = ({ route }) => {
  const [disable, setDisable] = useState(true);
  const [toss, setToss] = useState(datas);
  const [all, setAll] = useState(false);
  const [terms, setTerms] = useState(false);
  const [event, setEvent] = useState(false);
  const [night, setNight] = useState(false);
  const { user } = route.params;
  const navigation = useNavigation();

  const goAuthComp = async () => {
    const newTerm = await DataStore.save(
      new Term({
        required: terms,
        event: event,
        night: night,
      })
    );

    const newUser = await DataStore.save(
      new User({
        ...user,
        Term: newTerm,
      })
    );

    navigation.navigate("AuthComp" as any, { user: newUser });
  };

  useEffect(() => {
    TOSCheck();
  }, [toss]);

  const handleSwitch = useCallback(
    (id) => {
      setToss((prev) =>
        prev.map((data) => {
          if (data.id === id) {
            return {
              ...data,
              state: !data.state,
            };
          }
          return data;
        })
      );
    },
    [toss, setToss]
  );
  // console.log("====================================");
  // console.log(toss[0].state);
  // console.log(toss[1].state);
  // console.log(toss[2].state);
  // console.log(toss[3].state);
  // console.log("====================================");

  //

  const TOSCheck = useCallback(() => {
    if (
      toss[0].state === true &&
      toss[1].state === true &&
      toss[2].state === true &&
      toss[3].state === true
    ) {
      setTerms(true);
      setDisable(false);
    } else {
      setDisable(true);
    }
    if (toss[4].state === true) {
      setEvent(true);
    }
    if (toss[5].state === true) {
      setNight(true);
    }
  }, [toss, setDisable]);

  const toggleSwitch = (state) => {
    // toggleSwitch를 움직이는 역할
    const newState = () => setAll((previousState) => !previousState);
    // toggleSwitch가 true일 때 모든 switch를 true로 바꾸는 역할
    if (state === true) {
      newState();
      setToss((prev) =>
        prev.map((data) => {
          return {
            ...data,
            state: true,
          };
        })
      );
      // toggleSwitch가 false일 때 모든 switch를 false로 바꾸는 역할
    } else if (state === false) {
      newState();
      setToss((prev) =>
        prev.map((data) => {
          return {
            ...data,
            state: false,
          };
        })
      );
    }
  };
  // 모든 switch가 true일 때 toggleSwitch를 true로 바꾸는 역할
  useEffect(() => {
    if (
      toss[0].state === true &&
      toss[1].state === true &&
      toss[2].state === true &&
      toss[3].state === true &&
      toss[4].state === true &&
      toss[5].state === true
    ) {
      setAll(true);
    } else {
      setAll(false);
    }
  }, [toss]);

  // 한 개의 switch라도 false일 때 toggleSwitch를 false로 바꾸는 역할
  useEffect(() => {
    if (
      toss[0].state === false ||
      toss[1].state === false ||
      toss[2].state === false ||
      toss[3].state === false ||
      toss[4].state === false ||
      toss[5].state === false
    ) {
      setAll(false);
    }
  }, [toss]);

  // useEffect(() => {
  //   console.log("isenabled: " + isEnabled);
  //   console.log("collect", collect);
  //   console.log("offer", offer);
  //   console.log("transfer", transfer);
  //   console.log("location", location);
  //   console.log("event", event);
  //   console.log("night", night);
  // }, [collect, offer, transfer, location, event, night]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ borderBottomWidth: 1, backgroundColor: "pink" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          전체동의
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={all}
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
        {toss.map((data) => (
          <TOS
            key={data.id}
            id={data.id}
            title={data.title}
            desc={data.desc}
            link={data.link}
            pData={data.state}
            setPData={handleSwitch}
          />
        ))}
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
          onPress={goAuthComp}
        >
          <Text
            style={{
              fontFamily: "GangwonEduAllBold",
              fontSize: 18,
              color: "#FFF",
            }}
          >
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
    backgroundColor: "pink",
  },
  scrollview: {
    marginHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "pink",
  },
  TopBar: {
    flex: 0.15,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  title_txt: {
    fontFamily: "GangwonEduAllBold",
    fontSize: 30,
    marginTop: 15,
    marginBottom: 15,
  },
  nom_txt: {
    fontFamily: "GangwonEduAllLight",
    fontSize: 18,
    textAlign: "left",
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
    width: "100%",
    height: "15%",
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: "pink",
    backgroundColor: "#ffb6c1",
  },
  bottomText: {
    fontFamily: "GangwonEduAllLight",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
  },
});

export default TOSScreen;
