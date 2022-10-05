import { FunctionComponent, useState } from "react";
import {
    StyleSheet,
    View,
    Modal as DefaultModal,
    Button,
    Pressable,
} from "react-native";

// 외부 창 클릭시 모달 닫는기능만 구현되어있음
// 모달 컴포넌트 사용시 <View style={{background:"white"}}> 사용해서 
// 해당 스크린에 직접 창 만들어야함(사이즈, 위치, 스타일 등 자유롭게)
// <Modal>버튼,뷰</Modal>
type ModalProps = {
    activator?: FunctionComponent<{ handleOpen: () => void }>;
    children: React.ReactNode;
};

export function Modal({ activator: Activator, children }: ModalProps) {
    const [Visible, setVisible] = useState(false);

    return (
    <View>
        <DefaultModal
        visible={Visible}
        transparent={true}
        animationType={"fade"}
        >
        <Pressable 
            onPress={() => setVisible(false)}
            style={{flex: 1, backgroundColor: "rgba(0,0,0,0.1)"}}>
                <View>
                    {children}
                </View>
        </Pressable>
        </DefaultModal>
        {Activator ? (
        <Activator handleOpen={() => setVisible(true)} />
        ) : (
        <Button onPress={() => setVisible(true)} title="Open"></Button>
        )}
    </View>
    );
}

const styles = StyleSheet.create({
  //모달창 크기 조절 = height와 top으로 조절
    contentView: {
    top: 580,
    backgroundColor: "white",
    borderRadius: 15,
    height: "50%",
    },
});
