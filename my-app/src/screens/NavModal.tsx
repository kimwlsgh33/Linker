import React, { useEffect } from "react";
import { StyleSheet, Text, View, Pressable} from "react-native";
import { Auth } from "aws-amplify";
import { useMeStore } from "../store";

const NavModal = ({navigation}) => {

    const { me, setMe } = useMeStore();
    const goSignOut = async () => {
        try {
          await Auth.signOut();
          setMe(null);
        } catch (error) {
          console.log("error signing out: ", error);
        }
        navigation.navigate("Login" as any);
      };

    return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <Pressable 
        onPress={() => navigation.goBack()}
        style={styles.PressModal}
        />
        <View style={styles.ModalView}>
            <Text style={{fontWeight:"bold",fontSize:20,textAlign:"center"}}>{`LINKER에서\n로그아웃하시겠어요?`}</Text>
            <Pressable onPress={goSignOut}
                        style={({ pressed }) => [pressed && {backgroundColor: 'rgba(0, 0, 0, 0.3)'}]}>
            <Text style={{color:"#013ADF"}}>로그아웃</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Setting")}>
            <Text>취소</Text>
            </Pressable>
        </View>
        
    </View>
    )};

const styles= StyleSheet.create({
    ModalView: {
        height:"25%",
        width:"50%",
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"space-around",
        borderRadius:20
    },

    PressModal: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width:"100%",
        height:"100%",
        position:"absolute"
    }
})
export default NavModal;
