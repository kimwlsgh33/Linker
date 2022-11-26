import React, { useEffect } from "react";
import { FunctionComponent } from "react";
import { View, Modal, Pressable } from "react-native";

type ModalProps = {
  activator?: FunctionComponent<{ handleOpen: () => void }>;
  children: React.ReactNode;
  Visible: boolean;
  setVisible: (value: boolean) => void;
};

function PostModal({
  activator: Activator,
  children,
  Visible,
  setVisible,
}: ModalProps) {
  return (
    <View>
      <Modal visible={Visible} transparent={true} animationType="fade">
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        ></Pressable>
      </Modal>
      <Modal visible={Visible} transparent={true} animationType="slide">
        <Pressable
          style={{ flex: 1, width: "100%", justifyContent: "flex-end" }}
          onPress={() => setVisible(false)}
        >
          {children}
        </Pressable>
      </Modal>
    </View>
  );
}

export default PostModal;
