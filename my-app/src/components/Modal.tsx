import { FunctionComponent, useState } from "react";
import {
    StyleSheet,
    View,
    Modal as DefaultModal,
    Button,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";

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
        animationType={"slide"}
        onRequestClose={() => setVisible(false)}
        >
        <View style={styles.contentView}>
            <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
            <Ionic
                onPress={() => setVisible(false)}
                name="close-outline"
                style={{ fontSize: 35 }}
            />
            </View>
            {children}
        </View>
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
    height: "22%",
    borderRadius: 15,
    },
});
