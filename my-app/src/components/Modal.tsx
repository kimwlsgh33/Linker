import React from "react";
import { FunctionComponent } from "react";
import { View, Modal as DefaultModal, Pressable } from "react-native";
// import { Modal } from "../components/Modal";
// import {Modal as DefaultModal} from "react-native";
// 해당 스크린에 직접 창 만들어야함(사이즈, 위치, 스타일 등 자유롭게)
// 모달 안쪽 창을 눌러도 닫힘 => 모달 창 전체를 pressable로 감싸서 width: "100%"설정
type ModalProps = {
  activator?: FunctionComponent<{ handleOpen: () => void }>;
  children: React.ReactNode;
  Visible: boolean;
  setVisible: (value: boolean) => void;
};

export function Modal({
  activator: Activator,
  children,
  Visible,
  setVisible,
}: ModalProps) {
  return (
    <View>
      <DefaultModal visible={Visible} transparent={true} animationType={"fade"}>
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.3)" }}
        ></Pressable>
      </DefaultModal>
      <DefaultModal
        visible={Visible}
        transparent={true}
        animationType={"slide"}
      >
        <Pressable
          style={{ flex: 1, justifyContent: "flex-end" }}
          onPress={() => setVisible(false)}
        >
          <View>{children}</View>
        </Pressable>
      </DefaultModal>
      {Activator ? (
        <Activator handleOpen={() => setVisible(true)} />
      ) : (
        <Pressable onPress={() => setVisible(true)} />
      )}
    </View>
  );
}

export default Modal;
